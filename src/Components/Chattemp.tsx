"use client";

import { useState, useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Send, X } from "lucide-react";

// Definição do tipo para as mensagens
interface Message {
  id: string;
  text: string;
  user: string;
  timestamp: Timestamp | null;
}

export default function Chattemp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            text: data.text,
            user: data.user,
            timestamp: data.timestamp ? data.timestamp : null,
          };
        })
      );
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;
    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        user: user.displayName || "Anônimo",
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-10 right-10 w-80 bg-white shadow-lg rounded-xl overflow-hidden z-50">
      {/* Cabeçalho */}
      <div className="bg-gray-200 p-3 flex justify-between items-center">
        <span className="font-semibold">Soft Assistente</span>
        <button onClick={() => setIsOpen(false)}>
          <X size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Corpo do Chat */}
      <div className="p-3 h-72 overflow-y-auto bg-gray-100">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <div className={`p-2 rounded-lg max-w-[80%] ${msg.user === user?.displayName ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black"}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Campo de Entrada */}
      <form onSubmit={sendMessage} className="flex items-center border-t p-2 bg-white">
        <input
          type="text"
          className="flex-1 p-2 text-sm border-none outline-none bg-white"
          placeholder="Digite sua mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className="text-blue-500 p-2">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}

