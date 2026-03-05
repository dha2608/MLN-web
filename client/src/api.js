const API = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : '/api';

const fetchOptions = (method = 'GET', body) => {
  const opts = { method, credentials: 'include', headers: {} };
  if (body && method !== 'GET') {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  return opts;
};

export const auth = {
  me: () => fetch(`${API}/auth/me`, fetchOptions()).then(r => r.json()),
  logout: () => fetch(`${API}/auth/logout`, fetchOptions('POST')).then(r => r.json()),
  loginUrl: () => `${API}/auth/google`,
  // Full server URL for OAuth redirect (browser navigates directly)
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
  topPhilosophers: () => fetch(`${API}/stats/top-philosophers`, fetchOptions()).then(r => r.json()),
  hotQuestions: () => fetch(`${API}/stats/hot-questions`, fetchOptions()).then(r => r.json()),
  overview: () => fetch(`${API}/stats/overview`, fetchOptions()).then(r => r.json()),
};

export const schools = {
  list: () => fetch(`${API}/schools`, fetchOptions()).then(r => r.json()),
};

export const timeline = {
  list: () => fetch(`${API}/timeline`, fetchOptions()).then(r => r.json()),
};
