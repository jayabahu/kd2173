export const IS_DEVELOPMENT = process.env.REACT_APP_IS_DEVELOPMENT || false;
export const BLOG_ID = process.env.REACT_APP_BLOG_ID;
export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN;

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY || '',
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN || '',
  projectId: process.env.REACT_APP_FB_PROJECT_ID || '',
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET || '',
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_APP_FB_APP_ID || '',
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID || ''
}