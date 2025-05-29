import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaClock, FaUsers, FaComments } from "react-icons/fa";

const ExpertCard = ({ expert }) => {
  const navigate = useNavigate();

  const handleViewProfile = (e) => {
    e.stopPropagation();
    navigate(`/profile/${expert.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className="relative">
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {expert.availability}
        </div>
        <img
          src={expert.image || "https://via.placeholder.com/150"}
          alt={expert.name}
          className="w-full h-48 object-cover"
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{expert.name}</h3>
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span className="font-semibold">{expert.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{expert.specialty}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {expert.expertise.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            <span>{expert.experience}</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-2 text-blue-500" />
            <span>{expert.sessions} sessions</span>
          </div>
          <div className="flex items-center">
            <FaComments className="mr-2 text-blue-500" />
            <span>{expert.reviews} reviews</span>
          </div>
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
          onClick={handleViewProfile}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ExpertCard;