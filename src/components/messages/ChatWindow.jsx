import { useEffect, useState } from "react";
import { sendMessage, getOneToOneMessages, getGroupMessages } from "../../services/messageApi";

export default function ChatWindow({ selectedChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const currentUser = "Anas"; // logged in user

  useEffect(() => {
    if (!selectedChat) return;

    async function loadMessages() {
      if (selectedChat.type === "direct") {
        const res = await getOneToOneMessages(currentUser, selectedChat.id);
        setMessages(res.data);
      } else {
        const res = await getGroupMessages(selectedChat.id);
        setMessages(res.data);
      }
    }

    loadMessages();
  }, [selectedChat]);

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = {
      sender: currentUser,
      receiver: selectedChat.id,
      isGroup: selectedChat.type === "group",
      content: input,
    };

    const res = await sendMessage(newMsg);

    setMessages((prev) => [...prev, res.data]);
    setInput("");
  }

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-400">
        Select a chat
      </div>
    );
  }

  return (
    <section className="flex-1 flex flex-col bg-slate-900/40 backdrop-blur-xl">
      <div className="px-4 py-3 border-b border-slate-800/70">
        <h3 className="text-sm font-semibold text-slate-50">
          {selectedChat.name}
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.map((m) => (
          <div
            key={m._id}
            className={`flex ${m.sender === currentUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs md:max-w-sm rounded-2xl px-3 py-2 text-sm shadow-md ${
                m.sender === currentUser
                  ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                  : "bg-slate-800/80 text-slate-100 border border-slate-700"
              }`}
            >
              <p>{m.content}</p>
              <p className="mt-1 text-[10px] opacity-70 text-right">
                {new Date(m.createdAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSend}
        className="border-t border-slate-800/70 px-3 py-2 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message…"
          className="flex-1 border border-slate-700 bg-slate-900/70 rounded-full px-3 py-2 text-sm text-slate-100"
        />

        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white">
          Send
        </button>
      </form>
    </section>
  );
}
