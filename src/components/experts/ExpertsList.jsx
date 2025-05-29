import { useState } from "react";
import ExpertCard from "./expertscard";

export const expertsData = [
  {
    id: 1,
    name: "Iron Man",
    specialty: "Stark Industry",
    rating: 4.9,
    image: "https://i.pinimg.com/236x/a2/6f/02/a26f022f95423ba4f4cfcd68b9a5c489.jpg",
    experience: "15+ years",
    expertise: ["AI", "Robotics", "Engineering"],
    availability: "Available",
    sessions: 150,
    reviews: 89
  },
  {
    id: 2,
    name: "Lucifer Morningstar",
    specialty: "Healer of Hell",
    rating: 5.0,
    image: "https://cdn.manualdohomem.com.br/?w=1200&h=751&key=aHR0cHM6Ly9tYW51YWxkb2hvbWVtbW9kZXJuby5jb20uYnI=&u=%2Ffiles%2F2021%2F05%2Flucifer-4-licoes-de-vida-que-voce-pode-aprender-com-a-serie-lucifer-4-licoes-de-vida-que-voce-pode-aprender-com-a-serie-4.jpg",
    experience: "10+ years",
    expertise: ["Psychology", "Leadership", "Problem Solving"],
    availability: "Available",
    sessions: 200,
    reviews: 120
  },
  {
    id: 3,
    name: "Jon Snow",
    specialty: "Defending the Wall",
    rating: 4.9,
    image: "https://preview.redd.it/what-if-jon-snow-never-took-the-black-v0-iw3inkgg9wac1.jpeg?auto=webp&s=54bb1fd35d8f59d173e2045f200f4409eba8f795",
    experience: "8+ years",
    expertise: ["Leadership", "Strategy", "Combat"],
    availability: "Available",
    sessions: 100,
    reviews: 75
  }
];

const ExpertsList = ({ onSelectExpert }) => {
  const [search, setSearch] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // Get unique expertise areas
  const expertiseAreas = [...new Set(expertsData.flatMap(expert => expert.expertise))];

  const filteredExperts = expertsData
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

