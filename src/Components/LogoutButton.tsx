
"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import Chat from "@/Components/Chattemp"; // Importa o componente do chat

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-[#D96A33] text-white p-3 rounded-full hover:bg-[#D96A33] transition-all shadow-lg flex items-center"
      >
        <MessageSquare size={24} />
      </button>

      {isChatOpen && (
        <div className="absolute bottom-14 right-0 bg-white p-4 rounded-lg shadow-lg w-96">
          <Chat />
        </div>
      )}
    </div>
  );
}
