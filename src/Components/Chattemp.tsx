"use client";

import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { Mail, Send } from "lucide-react"; // Ícones atualizados

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
          text: data.text || "Mensagem sem texto",
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
      {/* Botão para abrir o chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#D96A33] text-white p-4 rounded-full hover:bg-[#c95d2e] transition-all shadow-lg flex items-center justify-center"
      >
        <Mail size={28} /> {/* Ícone de email */}
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="w-96 bg-white border border-gray-300 shadow-xl rounded-2xl p-4 fixed bottom-20 right-4 z-[99999]">
          {/* Cabeçalho do chat */}
          <div className="bg-[#F7F7F7] p-3 rounded-t-2xl flex justify-between items-center border-b border-gray-300">
            <h2 className="text-lg font-semibold text-gray-700">Soft Assistente</h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Área de mensagens */}
          <div className="h-72 overflow-y-auto bg-[#EBF2FA] p-4 rounded-b-2xl space-y-2 flex flex-col">
            {messages.map((msg, index) => (
              <div 
                key={msg.id} 
                className={`p-3 rounded-xl shadow max-w-[75%] text-gray-800 ${
                  index % 2 === 0 ? "bg-white self-start" : "bg-[#D96A33] text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Campo de envio */}
          <div className="border-t border-gray-200 flex items-center p-3 bg-white rounded-b-2xl">
            <input
              className="border p-3 w-full rounded-xl outline-none bg-gray-200 focus:ring-2 focus:ring-[#D96A33]"
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <button 
              className="bg-gray-200 text-white p-3 ml-2 rounded-full hover:bg-[#c95d2e] transition shadow-lg"
              onClick={sendMessage}
            >
              <Send size={20} /> {/* Ícone de envio atualizado */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
