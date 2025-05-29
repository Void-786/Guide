import { useState } from "react";
import ExpertsList from "./ExpertsList";
import ExpertProfile from "./ExpertsProfile";

const ExpertsPage = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Meet the Experts</h1>
      {selectedExpert ? (
        <ExpertProfile expert={selectedExpert} onBack={() => setSelectedExpert(null)} />
      ) : (
        <ExpertsList onSelectExpert={setSelectedExpert} />
      )}
    </div>
  );
};

export default ExpertsPage;
