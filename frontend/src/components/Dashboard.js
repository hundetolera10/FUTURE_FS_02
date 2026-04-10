
function Dashboard({ leads }) {
  const newLeads = leads.filter(l => l.status === "new").length;
  const contacted = leads.filter(l => l.status === "contacted").length;
  const converted = leads.filter(l => l.status === "converted").length;


  return (
    <div style={{ marginBottom: 30 }}>
      <h2>Dashboard</h2>

      
    <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-xl">
            <h3>Total</h3>
            <p className="text-xl">{leads.length}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl">
            <h3>New</h3>
            <p className="text-xl">{newLeads}</p>
         </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
            <h3>Contacted</h3>
            <p className="text-xl">{contacted}</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-xl">
             <h3>Converted</h3>
            <p className="text-xl">{converted}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;