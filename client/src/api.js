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

export const auth = {
  me: () => {
    const token = getToken();
    if (!token) return Promise.resolve({ user: null });
    return fetch(`${API}/auth/me`, fetchOptions()).then(r => {
      if (!r.ok) {
        // Token expired or invalid — clean up
        removeToken();
        return { user: null };
      }
      return r.json();
    });
  },
  logout: () => {
    removeToken();
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

export const philosophers = {
  list: () => fetch(`${API}/philosophers`, fetchOptions()).then(r => r.json()),
  get: (slug) => fetch(`${API}/philosophers/${slug}`, fetchOptions()).then(r => r.json()),
};

export const concepts = {
  list: () => fetch(`${API}/concepts`, fetchOptions()).then(r => r.json()),
  get: (slug) => fetch(`${API}/concepts/${slug}`, fetchOptions()).then(r => r.json()),
};

export const quote = {
  daily: () => fetch(`${API}/quote/daily`, fetchOptions()).then(r => r.json()),
};

export const quiz = {
  questions: () => fetch(`${API}/quiz/questions`, fetchOptions()).then(r => r.json()),
  submit: (answers) => fetch(`${API}/quiz/submit`, fetchOptions('POST', { answers })).then(r => r.json()),
};

export const stats = {
  overview: () => fetch(`${API}/stats/overview`, fetchOptions()).then(r => r.json()),
  engagement: () => fetch(`${API}/stats/engagement`, fetchOptions()).then(r => r.json()),
  quizDistribution: () => fetch(`${API}/stats/quiz-distribution`, fetchOptions()).then(r => r.json()),
  chatActivity: () => fetch(`${API}/stats/chat-activity`, fetchOptions()).then(r => r.json()),
  topPhilosophers: () => fetch(`${API}/stats/top-philosophers`, fetchOptions()).then(r => r.json()),
  hotQuestions: () => fetch(`${API}/stats/hot-questions`, fetchOptions()).then(r => r.json()),
  recentActivity: () => fetch(`${API}/stats/recent-activity`, fetchOptions()).then(r => r.json()),
  schoolDistribution: () => fetch(`${API}/stats/school-distribution`, fetchOptions()).then(r => r.json()),
  eraDistribution: () => fetch(`${API}/stats/era-distribution`, fetchOptions()).then(r => r.json()),
  philosopherRichness: () => fetch(`${API}/stats/philosopher-richness`, fetchOptions()).then(r => r.json()),
};

export const schools = {
  list: () => fetch(`${API}/schools`, fetchOptions()).then(r => r.json()),
};

export const timeline = {
  list: () => fetch(`${API}/timeline`, fetchOptions()).then(r => r.json()),
};
