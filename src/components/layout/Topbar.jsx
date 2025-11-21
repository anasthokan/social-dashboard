export default function Topbar() {
  return (
    <header
      className="
        w-full sticky top-0 z-20 
        bg-slate-900/50 backdrop-blur-2xl 
        border-b border-slate-800/60 
        shadow-lg
      "
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        
        {/* Mobile Title */}
        <div className="flex items-center gap-2 md:hidden">
          <span className="text-xl">📊</span>
          <span className="font-semibold text-slate-100">
            Social Dashboard
          </span>
        </div>

        {/* Desktop Main Title */}
        <div className="hidden md:block">
          <h1 className="text-xl font-bold 
            bg-gradient-to-r from-indigo-400 to-purple-400 
            bg-clip-text text-transparent
            drop-shadow-md"
          >
            Social Media Campaign & Messaging Dashboard
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage campaigns across Social, Email & WhatsApp + Messages
          </p>
        </div>

        {/* Right User Section */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-slate-400">
            Logged in as
          </span>

          <div className="flex items-center gap-2">
            <div className="
              h-9 w-9 rounded-full 
              bg-gradient-to-br from-indigo-600 to-purple-600 
              text-white flex items-center justify-center text-sm font-semibold
              shadow-lg
            ">
              A
            </div>
            <span className="text-sm font-medium text-slate-100">
              Anas Thokan
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
