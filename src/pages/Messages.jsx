import { useState } from "react";
import ChatSidebar from "../components/messages/ChatSidebar";
import ChatWindow from "../components/messages/ChatWindow";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="space-y-4">
      <header>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Message Center
        </h2>
        <p className="text-xs md:text-sm text-slate-400 mt-1">
          One-to-One and Group Messaging
        </p>
      </header>

      <div className="flex flex-col md:flex-row rounded-2xl border border-slate-800/70 bg-slate-900/60 backdrop-blur-2xl shadow-2xl overflow-hidden min-h-[420px]">
        
        <ChatSidebar onSelect={setSelectedChat} />

        <ChatWindow selectedChat={selectedChat} />
      </div>
    </div>
  );
}
