import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navLinkClasses = (isActive) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
     ${isActive
        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md scale-[1.02]"
        : "text-slate-300 hover:bg-slate-800/40 hover:shadow-sm hover:scale-[1.01]"
     }`;

  return (
    <aside
      className="
        hidden md:flex md:flex-col w-64 
        bg-slate-900/60 backdrop-blur-2xl 
        border-r border-slate-800/60 
        shadow-2xl p-6
      "
    >
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold tracking-wide 
          bg-gradient-to-r from-indigo-400 to-purple-400 
          bg-clip-text text-transparent drop-shadow-lg"
        >
          KodeMelon
        </h1>
        <p className="text-xs text-slate-400 mt-2 tracking-wide">
          Social Campaign & Messaging Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-3">

        <NavLink to="/dashboard">
          {({ isActive }) => (
            <div className={navLinkClasses(isActive)}>
              <span className="text-lg">📊</span>
              <span className="font-medium">Dashboard</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/campaigns">
          {({ isActive }) => (
            <div className={navLinkClasses(isActive)}>
              <span className="text-lg">📣</span>
              <span className="font-medium">Campaigns</span>
            </div>
          )}
        </NavLink>

    <NavLink
  to="/whatsapp"
  className={({ isActive }) =>
    `${navLinkClasses(isActive)}`
  }
>
  <span className="text-lg">🟢</span>
  <span>WhatsApp</span>
</NavLink>

      </nav>

      

      {/* Footer */}
      <div className="mt-12 pt-5 border-t border-slate-800 text-xs text-slate-500">
        <p className="tracking-wide">First Round Assessment</p>
        <p className="font-medium text-slate-300 mt-1">Anas Thokan</p>
      </div>

    </aside>
  );
}
