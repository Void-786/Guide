import { useState, useEffect } from "react";
import ExpertCard from "./expertscard";
import axios from 'axios';

const ExpertsList = ({ onSelectExpert }) => {
  const [search, setSearch] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await axios.get('http://localhost:8585/api/experts'); // Ensure this URL is correct
        setExperts(response.data);
      } catch (error) {
        console.error('Error fetching experts:', error);
      }
    };

    fetchExperts();
  }, []);

  // Get unique expertise areas
  const expertiseAreas = [...new Set(experts.flatMap(expert => expert.expertise))];

  const filteredExperts = experts
    .filter((expert) => {
      const matchesSearch = expert.name.toLowerCase().includes(search.toLowerCase()) ||
                          expert.specialty.toLowerCase().includes(search.toLowerCase());
      const matchesExpertise = !selectedExpertise || expert.expertise.includes(selectedExpertise);
      return matchesSearch && matchesExpertise;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "sessions") return b.sessions - a.sessions;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-6">Find Your Perfect Expert</h2>
        <p className="text-gray-600 text-center mb-8">
          Connect with industry experts who can help you achieve your goals
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <select
            value={selectedExpertise}
            onChange={(e) => setSelectedExpertise(e.target.value)}
            className="border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Expertise Areas</option>
            {expertiseAreas.map((expertise) => (
              <option key={expertise} value={expertise}>
                {expertise}
              </option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="rating">Sort by Rating</option>
            <option value="sessions">Sort by Sessions</option>
            <option value="reviews">Sort by Reviews</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperts.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} onSelect={onSelectExpert} />
        ))}
      </div>

      {filteredExperts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No experts found matching your criteria.</p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedExpertise("");
            }}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpertsList;

