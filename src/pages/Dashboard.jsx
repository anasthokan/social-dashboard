export default function Dashboard() {
  const stats = [
    { label: "Total Campaigns", value: 12 },
    { label: "Active Campaigns", value: 5 },
    { label: "Total Messages", value: 248 },
    { label: "Active Users", value: 18 },
  ];

  const campaignsByType = [
    { type: "Social Media", count: 6 },
    { type: "Email", count: 3 },
    { type: "WhatsApp", count: 3 },
  ];

  return (
    <div className="space-y-6">
      {/* Heading */}
      <header className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Dashboard Overview
        </h2>
        <p className="text-xs md:text-sm text-slate-400">
          High-level snapshot of your campaigns, messages and user activity.
        </p>
      </header>

      {/* Stats cards */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/60 shadow-lg hover:shadow-2xl hover:border-indigo-500/70 transition-all duration-200 p-4"
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-bold text-slate-50">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom section: campaigns + activity */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/60 shadow-lg p-4">
          <h3 className="text-sm font-semibold text-slate-100 mb-3">
            Campaigns by Channel
          </h3>
          <ul className="space-y-3">
            {campaignsByType.map((c) => (
              <li
                key={c.type}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  <span className="text-slate-300">{c.type}</span>
                </div>
                <span className="font-semibold text-slate-50">{c.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/60 shadow-lg p-4">
          <h3 className="text-sm font-semibold text-slate-100 mb-3">
            Recent Activity
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>📣 New WhatsApp campaign created: "Diwali Offer Blast"</li>
            <li>✉️ Email campaign sent to 120 users.</li>
            <li>💬 35 new one-to-one messages in last 24 hours.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
