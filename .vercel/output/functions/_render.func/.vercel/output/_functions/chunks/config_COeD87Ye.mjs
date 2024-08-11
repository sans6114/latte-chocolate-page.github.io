import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjve4lRFhuBL7pkkb0M3tBzXb7rxs4YjU",
  authDomain: "astro-latte.firebaseapp.com",
  projectId: "astro-latte",
  storageBucket: "astro-latte.appspot.com",
  messagingSenderId: "346591148914",
  appId: "1:346591148914:web:4f03179359e9274853fbeb"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebase = {
  app,
  auth
};

export { firebase as f };
