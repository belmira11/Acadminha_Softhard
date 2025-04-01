import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 🔹 Importação correta para autenticação
import { getFirestore } from "firebase/firestore"; // 🔹 Firestore para banco de dados

const firebaseConfig = {
  apiKey: "AIzaSyAbQeovk7G8EiYFj4mAN1hALzQvjfntfSM",
  authDomain: "meu-chat-d5479.firebaseapp.com",
  projectId: "meu-chat-d5479",
  storageBucket: "meu-chat-d5479.appspot.com", // 🔹 Certifique-se que está correto
  messagingSenderId: "1010385211055",
  appId: "1:1010385211055:web:432831286dcb636d734e5a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

