import React, { useState } from "react";
import { FaStar, FaClock, FaUsers, FaComments, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const ExpertProfile = ({ expert, onBack }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  if (!expert) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-300"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Experts
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="absolute -bottom-16 left-8">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-20 px-8 pb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{expert.name}</h1>
              <p className="text-xl text-gray-600 mt-1">{expert.specialty}</p>
            </div>
            <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="font-semibold text-gray-800">{expert.rating}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <FaClock className="text-blue-500 text-2xl mx-auto mb-2" />
              <p className="text-gray-600">Experience</p>
              <p className="font-semibold text-gray-800">{expert.experience}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <FaUsers className="text-blue-500 text-2xl mx-auto mb-2" />
              <p className="text-gray-600">Sessions</p>
              <p className="font-semibold text-gray-800">{expert.sessions}+</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <FaComments className="text-blue-500 text-2xl mx-auto mb-2" />
              <p className="text-gray-600">Reviews</p>
              <p className="font-semibold text-gray-800">{expert.reviews}+</p>
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {expert.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaGlobe className="text-2xl" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 relative z-10">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold cursor-pointer" onClick={() => setShowBookingModal(true)}>
              Book a Session
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold cursor-pointer">
              View Profile
            </button>
          </div>

          {/* Booking Modal */}
          {showBookingModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto relative z-50">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setShowBookingModal(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Session Type</label>
                  <select className="w-full p-2 border rounded">
                    <option value="video">Video Call</option>
                    <option value="chat">Chat Session</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Session Duration</label>
                  <select className="w-full p-2 border rounded">
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Date</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Time</label>
                  <input type="time" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-600">Session Type: <span id="sessionType">Video Call</span></p>
                    <p className="text-gray-600">Duration: <span id="sessionDuration">30 minutes</span></p>
                    <p className="text-gray-600">Date: <span id="sessionDate">Selected Date</span></p>
                    <p className="text-gray-600">Time: <span id="sessionTime">Selected Time</span></p>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setShowBookingModal(false)}>Cancel</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Confirm Booking</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
  