import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaClock, FaUsers, FaComments, FaLinkedin, FaTwitter, FaGlobe, FaCalendarAlt, FaBookmark, FaShare, FaTimes } from 'react-icons/fa';
import './Profile.css';

const ExpertProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [expert, setExpert] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [sessionType, setSessionType] = useState('video');
  const [sessionDuration, setSessionDuration] = useState('30');
  const [sessionNotes, setSessionNotes] = useState('');
  const [showChatModal, setShowChatModal] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const foundExpert = expertsData.find(e => e.id === parseInt(id));
    if (foundExpert) {
      setExpert(foundExpert);
    } else {
      navigate('/experts');
    }
  }, [id, navigate]);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // TODO: Implement bookmark functionality
  };

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
    // TODO: Implement share functionality
  };

  const handleBookSession = () => {
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setSessionType('video');
    setSessionDuration('30');
    setSessionNotes('');
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for your session');
      return;
    }

    // TODO: Implement actual booking logic
    console.log('Booking confirmed:', {
      expertId: expert.id,
      date: selectedDate,
      time: selectedTime,
      type: sessionType,
      duration: sessionDuration,
      notes: sessionNotes
    });

    // Show success message and close modal
    alert('Booking confirmed! We will send you a confirmation email shortly.');
    handleCloseBookingModal();
  };

  const handleOpenChat = () => {
    setShowChatModal(true);
  };

  const handleCloseChat = () => {
    setShowChatModal(false);
    setMessage('');
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      // TODO: Implement actual message sending logic
      alert('Message sent!');
      handleCloseChat();
    } else {
      alert('Please enter a message.');
    }
  };

  if (!expert) return null;

  const availableTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      text: "Working with this expert has been transformative for my career. Their insights and guidance helped me land my dream job."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      text: "The mentorship sessions were incredibly valuable. I learned practical strategies that I could apply immediately."
    }
  ];

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'availability', label: 'Availability' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  // Generate next 7 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <button
          onClick={() => navigate('/experts')}
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
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={handleBookmark}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                <FaBookmark className={`text-xl ${isBookmarked ? 'text-blue-500' : 'text-gray-500'}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                <FaShare className="text-xl text-gray-500" />
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 px-8 pb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {expert.name}
                </h1>
                <p className="text-xl text-gray-600 mt-1">
                  {expert.specialty}
                </p>
              </div>
              <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full">
                <FaStar className="text-yellow-500 mr-2" />
                <span className="font-semibold text-gray-800">{expert.rating}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <FaClock className="text-blue-500 text-2xl mx-auto mb-2" />
                <p className="text-gray-600">Experience</p>
                <p className="font-semibold text-gray-800">{expert.experience}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <FaUsers className="text-blue-500 text-2xl mx-auto mb-2" />
                <p className="text-gray-600">Sessions</p>
                <p className="font-semibold text-gray-800">{expert.sessions}+</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <FaComments className="text-blue-500 text-2xl mx-auto mb-2" />
                <p className="text-gray-600">Reviews</p>
                <p className="font-semibold text-gray-800">{expert.reviews}+</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
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

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">About Me</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {expert.name} is a highly experienced professional with {expert.experience} of expertise in {expert.specialty}. 
                    They have successfully conducted {expert.sessions}+ sessions and received {expert.reviews}+ positive reviews from satisfied clients.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                  <div className="flex gap-4">
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
                </div>
              </div>
            )}

            {activeTab === 'availability' && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Available Time Slots</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {availableTimeSlots.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg text-center transition-colors duration-300 ${
                          selectedTime === time
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-blue-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex items-center text-yellow-500">
                        <FaStar className="mr-1" />
                        <span>{testimonial.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleBookSession}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold flex items-center justify-center cursor-pointer"
              >
                <FaCalendarAlt className="mr-2" />
                Book a Session
              </button>
              <button
                onClick={handleOpenChat}
                className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold flex items-center justify-center"
              >
                <FaComments className="mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto relative z-50">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleCloseBookingModal}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Session Type</label>
              <select className="w-full p-2 border rounded" value={sessionType} onChange={(e) => setSessionType(e.target.value)}>
                <option value="video">Video Call</option>
                <option value="chat">Chat Session</option>
                <option value="audio">Audio Call</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Session Duration</label>
              <select className="w-full p-2 border rounded" value={sessionDuration} onChange={(e) => setSessionDuration(e.target.value)}>
                <option value="30">30 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input type="date" className="w-full p-2 border rounded" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Time</label>
              <input type="time" className="w-full p-2 border rounded" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Notes</label>
              <textarea className="w-full p-2 border rounded" rows="3" value={sessionNotes} onChange={(e) => setSessionNotes(e.target.value)}></textarea>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600">Session Type: <span id="sessionType">{sessionType}</span></p>
                <p className="text-gray-600">Duration: <span id="sessionDuration">{sessionDuration} minutes</span></p>
                <p className="text-gray-600">Date: <span id="sessionDate">{selectedDate}</span></p>
                <p className="text-gray-600">Time: <span id="sessionTime">{selectedTime}</span></p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={handleCloseBookingModal}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleConfirmBooking}>Confirm Booking</button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {showChatModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto relative z-50">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleCloseChat}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea className="w-full p-2 border rounded" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={handleCloseChat}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertProfile;