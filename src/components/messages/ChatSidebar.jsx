const users = [
  { id: "Rohan", name: "Rohan (Marketing)", type: "direct" },
  { id: "Diwali Promo Group", name: "Diwali Promo Group", type: "group" }
];

export default function ChatSidebar({ onSelect }) {
  return (
    <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800/70 bg-slate-900/80">
      <div className="p-3 border-b border-slate-800/70">
        <h3 className="text-sm font-semibold text-slate-100">Conversations</h3>
      </div>

      <ul>
        {users.map((u) => (
          <li
            key={u.id}
            onClick={() => onSelect(u)}
            className="px-3 py-2.5 text-sm cursor-pointer hover:bg-slate-800/60 text-slate-300 flex justify-between"
          >
            {u.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
