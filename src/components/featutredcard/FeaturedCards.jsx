import React from "react";
import { useNavigate } from "react-router-dom";
import expertsData from "../experts/ExpertsList";

const FeaturedCard = () => {
  const navigate = useNavigate();
  
  const topExperts = [...expertsData]
    .sort((a, b) => b.rating - a.rating) 
    .slice(0, 5); 

  const handleViewProfile = (expertId) => {
    navigate(`/profile/${expertId}`);
  };

  return (
    <section className="max-w-screen-xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Top 5 Experts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topExperts.map((expert) => (
          <div key={expert.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold mt-4">{expert.name}</h3>
            <p className="text-gray-600">{expert.specialty}</p>
            <p className="text-yellow-500">⭐ {expert.rating}</p>
            <button 
              onClick={() => handleViewProfile(expert.id)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCard;
