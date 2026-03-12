// API base URL configuration
// After deploying backend to Render, replace with your Render URL
// e.g. 'https://unimap-api.onrender.com'
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? ''  // local development — same origin
  : 'https://unimap-api.onrender.com';  // production — Render backend
