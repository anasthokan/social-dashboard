import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Messages from "./pages/Messages";
import WhatsApp from "./pages/WhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex bg-slate-900 text-slate-100">
      
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT AREA */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <Topbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
          </Routes>
        </main>

      </div>

    </div>
  );
}
