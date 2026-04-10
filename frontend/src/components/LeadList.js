import { useState, useEffect } from "react";
import API from "../api";
import StatsCards from "./StatsCards";
import LeadChart from "./LeadChart";


function LeadList() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    try {
      const res = await API.get("leads/");
      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.results || [];

      setLeads(data);
    } catch {
      setLeads([]);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filtered = leads.filter((l) =>
    (l.name || "").toLowerCase().includes(search.toLowerCase())
  );

  const updateStatus = async (id, status) => {
    await API.patch(`leads/${id}/`, { status });
    fetchLeads();
  };

  const deleteLead = async (id) => {
    await API.delete(`leads/${id}/`);
    fetchLeads();
  };

  return (
    <div className="space-y-6">

      {/* Stats */}
      <StatsCards leads={leads} />

      {/* Chart */}
      <LeadChart leads={leads} />

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-teal-400">Leads</h2>

        <input
          className="bg-white/10 px-3 py-1 rounded-lg"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white/5 p-4 rounded-xl backdrop-blur-lg">
        <table className="w-full text-left">
          <thead className="text-gray-400">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Source</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id} className="border-t border-white/10">
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.source}</td>

                <td>
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateStatus(lead.id, e.target.value)
                    }
                    className="bg-[#020617] p-1 rounded"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                  </select>
                </td>

                <td>
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="bg-red-500 px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default LeadList;