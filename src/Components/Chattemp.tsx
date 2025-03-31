"use client";

import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

import { MessageSquare } from "lucide-react"; // ✅ Importação corrigida

export default function Chat() {
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs: { id: string; text: string }[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        msgs.push({ 
          id: doc.id, 
          text: data.text || "Mensagem sem texto" 
        });
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#D96A33] text-white p-3 rounded-full hover:bg-[#D96A33] transition-all shadow-lg flex items-center"
      >
        <MessageSquare size={24} /> {/* ✅ Ícone agora funciona */}
      </button>

      {isOpen && (
        <div className="w-96 bg-white border border-gray-300 shadow-lg rounded-lg p-4 relative">
          <div className="bg-gray-200 p-3 rounded-t-lg flex justify-between items-center">
            <h2 className="text-lg font-semibold">Soft Assistente</h2>
            <button className="text-gray-500" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="h-72 overflow-y-auto bg-blue-100 p-4 rounded-b-lg">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-white p-2 rounded-lg shadow mb-2 max-w-xs">
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-gray-50 flex items-center border-t- p-2">
            <input
              className="border p-2 w-full rounded-lg" 
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <button className="bg-gray-500 text-white p-2 ml-2 rounded-lg hover:bg-gray-600 transition" onClick={sendMessage}>
              ✈
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
