const API = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : '/api';

// --- Token management ---
const TOKEN_KEY = 'philosophy_token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// --- In-memory cache ---
const cache = new Map();

function getCached(key, ttl = 5 * 60 * 1000) {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.time < ttl) return entry.data;
  return null;
}

function setCache(key, data) {
  cache.set(key, { data, time: Date.now() });
}

export function clearCache(prefix) {
  if (!prefix) { cache.clear(); return; }
  for (const key of cache.keys()) {
    if (key.startsWith(prefix)) cache.delete(key);
  }
}

// --- Fetch helpers ---
const fetchOptions = (method = 'GET', body) => {
  const token = getToken();
  const opts = {
    method,
    headers: {}
  };
  if (token) {
    opts.headers['Authorization'] = `Bearer ${token}`;
  }
  if (body && method !== 'GET') {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  return opts;
};

// Cached GET helper — deduplicates in-flight requests
const inFlight = new Map();

function cachedFetch(url, ttl) {
  const cached = getCached(url, ttl);
  if (cached) return Promise.resolve(cached);

  // Deduplicate concurrent requests to same URL
  if (inFlight.has(url)) return inFlight.get(url);

  const promise = fetch(url, fetchOptions())
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then(data => {
      setCache(url, data);
      inFlight.delete(url);
      return data;
    })
    .catch(err => {
      inFlight.delete(url);
      throw err;
    });

  inFlight.set(url, promise);
  return promise;
}

export const auth = {
  me: () => {
    const token = getToken();
    if (!token) return Promise.resolve({ user: null });
    return fetch(`${API}/auth/me`, fetchOptions()).then(r => {
      if (!r.ok) {
        removeToken();
        return { user: null };
      }
      return r.json();
    });
  },
  logout: () => {
    removeToken();
    clearCache();
    return Promise.resolve({ ok: true });
  },
  loginUrl: () => `${API}/auth/google`,
  googleLogin: () => {
    window.location.href = `${API}/auth/google`;
  },
};

export const user = {
  profile: () => fetch(`${API}/user/profile`, fetchOptions()).then(r => r.json()),
  viewContent: (conceptId) => fetch(`${API}/user/view-content`, fetchOptions('POST', { conceptId })).then(r => r.json()),
};

export const chat = {
  send: (content) => fetch(`${API}/chat/message`, fetchOptions('POST', { content })).then(r => r.json()),
  history: () => fetch(`${API}/chat/history`, fetchOptions()).then(r => r.json()),
};

// Cached data endpoints (TTL: 5 min for lists, 10 min for static data)
const LIST_TTL = 5 * 60 * 1000;
const STATIC_TTL = 10 * 60 * 1000;

export const philosophers = {
  list: () => cachedFetch(`${API}/philosophers`, LIST_TTL),
  get: (slug) => cachedFetch(`${API}/philosophers/${slug}`, LIST_TTL),
};

export const concepts = {
  list: () => cachedFetch(`${API}/concepts`, LIST_TTL),
  get: (slug) => cachedFetch(`${API}/concepts/${slug}`, LIST_TTL),
};

export const quote = {
  daily: () => cachedFetch(`${API}/quote/daily`, STATIC_TTL),
};

export const quiz = {
  questions: () => cachedFetch(`${API}/quiz/questions`, STATIC_TTL),
  submit: (answers) => fetch(`${API}/quiz/submit`, fetchOptions('POST', { answers })).then(r => r.json()),
};

// Stats — shorter cache (2 min) since data changes more often
const STATS_TTL = 2 * 60 * 1000;

export const stats = {
  overview: () => cachedFetch(`${API}/stats/overview`, STATS_TTL),
  engagement: () => cachedFetch(`${API}/stats/engagement`, STATS_TTL),
  quizDistribution: () => cachedFetch(`${API}/stats/quiz-distribution`, STATS_TTL),
  chatActivity: () => cachedFetch(`${API}/stats/chat-activity`, STATS_TTL),
  topPhilosophers: () => cachedFetch(`${API}/stats/top-philosophers`, STATS_TTL),
  hotQuestions: () => cachedFetch(`${API}/stats/hot-questions`, STATS_TTL),
  recentActivity: () => cachedFetch(`${API}/stats/recent-activity`, STATS_TTL),
  schoolDistribution: () => cachedFetch(`${API}/stats/school-distribution`, STATIC_TTL),
  eraDistribution: () => cachedFetch(`${API}/stats/era-distribution`, STATIC_TTL),
  philosopherRichness: () => cachedFetch(`${API}/stats/philosopher-richness`, STATIC_TTL),
};

export const schools = {
  list: () => cachedFetch(`${API}/schools`, STATIC_TTL),
};

export const timeline = {
  list: () => cachedFetch(`${API}/timeline`, STATIC_TTL),
};
