import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function LeadForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    source: "",
    notes: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("leads/", {
        ...form,
        status: "new"
      });
      
      toast.success("Lead created successfully!");
      // ✅ reset form
      setForm({ name: "", email: "", source: "" });

      // ✅ redirect to dashboard
      navigate("/");

    } catch (error) {
      if (error.response?.data?.email) {
        toast.error("Email already exists");
      } else {
        toast.error("Error creating lead");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {/* Name */}
      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="bg-[#020617] p-3 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="bg-[#020617] p-3 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
        required
      />

      {/* Source */}
      <input
        type="text"
        placeholder="Lead Source (e.g. Website, Referral)"
        value={form.source}
        onChange={(e) =>
          setForm({ ...form, source: e.target.value })
        }
        className="bg-[#020617] p-3 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
      />
      {/* Notes */}
      <textarea
        placeholder="Notes"
        value={form.notes}
        onChange={(e) =>
          setForm({ ...form, notes: e.target.value })
        }
        className="bg-[#020617] p-3 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
      />

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-teal-500 hover:bg-teal-600 transition p-3 rounded-lg font-semibold disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Lead"}
      </button>

    </form>
  );
}

export default LeadForm;