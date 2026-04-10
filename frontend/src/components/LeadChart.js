import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function LeadChart({ leads }) {
  const dates = leads.map(l => l.created_at?.slice(0, 10) || "Unknown");

  const counts = dates.reduce((acc, d) => {
    acc[d] = (acc[d] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Leads",
        data: Object.values(counts),
        borderColor: "#14b8a6",
        backgroundColor: "rgba(20,184,166,0.2)",
      },
    ],
  };

  return (
    <div className="bg-white/5 p-4 rounded-xl mt-6 h-[300px]">
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
        }}
      /> 
    </div>
  );
}

export default LeadChart;
