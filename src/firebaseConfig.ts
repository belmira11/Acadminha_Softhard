import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbQeovk7G8EiYFj4mAN1hALzQvjfntfSM",
  authDomain: "meu-chat-d5479.firebaseapp.com",
  projectId: "meu-chat-d5479",
  storageBucket: "meu-chat-d5479.firebasestorage.app",
  messagingSenderId: "1010385211055",
  appId: "1:1010385211055:web:432831286dcb636d734e5a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
