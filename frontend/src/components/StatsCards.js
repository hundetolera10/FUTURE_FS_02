import { Users, CheckCircle, Mail, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function StatsCards({ leads }) {
  const total = leads.length;
  const newLeads = leads.filter(l => l.status === "new").length;
  const contacted = leads.filter(l => l.status === "contacted").length;
  const converted = leads.filter(l => l.status === "converted").length;

  const cards = [
    { title: "Total Leads", value: total, icon: <Users />, gradient: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { title: "New", value: newLeads, icon: <Mail />, gradient: "bg-gradient-to-r from-green-500 to-teal-400" },
    { title: "Contacted", value: contacted, icon: <CheckCircle />, gradient: "bg-gradient-to-r from-yellow-400 to-orange-400" },
    { title: "Converted", value: converted, icon: <TrendingUp />, gradient: "bg-gradient-to-r from-purple-500 to-pink-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`p-4 rounded-xl shadow-lg flex justify-between items-center ${card.gradient} text-white`}
        >
          <div>
            <p className="text-sm font-medium">{card.title}</p>
            <h2 className="text-2xl font-bold">{card.value}</h2>
          </div>
          <div className="w-12 h-12 flex items-center justify-center text-white">
            {card.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsCards;