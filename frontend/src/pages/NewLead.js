import LeadForm from "../components/LeadForm";

function NewLead() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          Add New Lead
        </h2>
        <LeadForm />
      </div>
    </div>
  );
}

export default NewLead;