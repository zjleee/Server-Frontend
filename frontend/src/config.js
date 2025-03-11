const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://server-frontend-orcin.vercel.app',
  API_ENDPOINTS: {
    AUTH: '/api/auth',
    CHAT: '/api/chat'
  }
};

export { API_CONFIG }; 