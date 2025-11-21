import { useState, useEffect } from "react";
import CampaignForm from "../components/campaigns/CampaignForm";
import CampaignList from "../components/campaigns/CampaignList";
import api from "../services/api";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch campaigns from backend
  const loadCampaigns = async () => {
    try {
      const res = await api.get("/campaigns");
      setCampaigns(res.data);
    } catch (err) {
      console.error("Error fetching campaigns:", err);
    }
    setLoading(false);
  };

  // Create campaign (calls backend)
  const handleCreateCampaign = async (data) => {
    try {
      const res = await api.post("/campaigns", data);
      setCampaigns((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("Error creating campaign:", err);
    }
  };

  useEffect(() => {
    loadCampaigns();
  }, []);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Campaign Management
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Create and manage Social Media, Email and WhatsApp campaigns.
          </p>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <CampaignForm onCreate={handleCreateCampaign} />

        {loading ? (
          <p className="text-slate-400">Loading campaigns...</p>
        ) : (
          <CampaignList campaigns={campaigns} />
        )}
      </div>
    </div>
  );
}
