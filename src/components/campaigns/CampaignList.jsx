export default function CampaignList({ campaigns }) {
  if (!campaigns || campaigns.length === 0) {
    return (
      <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-dashed border-slate-700/60 p-6 text-sm text-slate-400">
        No campaigns yet. Create your first Social / Email / WhatsApp campaign
        using the form.
      </div>
    );
  }

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/60 shadow-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-900/80 text-slate-300 text-xs uppercase tracking-wide">
          <tr>
            <th className="text-left px-4 py-2">Title</th>
            <th className="text-left px-4 py-2">Channel</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-4 py-2">Created At</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((c, index) => (
            <tr
              key={c._id || c.id || index} // ✅ FIXED: unique & safe
              className="border-t border-slate-800/80 hover:bg-slate-800/50 transition-all"
            >
              <td className="px-4 py-2 font-medium text-slate-100">
                {c.title}
              </td>

              <td className="px-4 py-2 text-slate-300">
                {c.type === "social"
                  ? "Social Media"
                  : c.type === "email"
                  ? "Email"
                  : "WhatsApp"}
              </td>

              <td className="px-4 py-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/40">
                  {c.status || "Active"}
                </span>
              </td>

              <td className="px-4 py-2 text-slate-500 text-xs">
                {c.createdAt
                  ? new Date(c.createdAt).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
