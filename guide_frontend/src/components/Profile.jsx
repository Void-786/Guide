import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    title: 'Senior Developer @Tech Corp | Full Stack Expert | 50K+ Students | Technical Mentor',
    image: '/default-avatar.jpg',
    linkedin: 'https://linkedin.com',
    description: 'John is highly valued for his expertise in full-stack development, cloud architecture, and DevOps practices.',
    testimonial: {
      text: "John's mentorship has been instrumental in my professional growth. His guidance helped me land my dream job at a top tech company.",
      author: "Sarah Johnson"
    },
    services: [
      {
        id: 1,
        title: '1:1 Mentorship Call',
        description: 'Personal guidance session to help you with technical challenges, career advice, and skill development.',
        duration: '60 min',
        price: '₹2,999'
      },
      {
        id: 2,
        title: 'Resume Review',
        description: 'Detailed review of your resume with actionable feedback and improvements to help you stand out.',
        duration: '30 min',
        price: '₹1,499'
      }
    ]
  });

  useEffect(() => {
    // Here you would typically fetch the profile data using the ID
    console.log('Profile ID:', id);
    // Example API call:
    // fetchProfileData(id).then(data => setProfileData(data));
  }, [id]);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-image-container">
            <img src={profileData.image} alt={profileData.name} className="profile-image" />
            <div className="verification-badge">✓</div>
          </div>
          <div className="profile-details">
            <h1>{profileData.name}</h1>
            <p className="profile-title">{profileData.title}</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="social-links">
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="link-text">LinkedIn</span>
            <span className="link-icon">↗</span>
          </a>
        </div>

        <div className="profile-description">
          <p>{profileData.description}</p>
          <span className="ai-generated">✨ AI-generated based on testimonials</span>
        </div>

        <div className="testimonial">
          <blockquote>{profileData.testimonial.text}</blockquote>
          <cite>- {profileData.testimonial.author}</cite>
        </div>

        <div className="service-options">
          <button className="option-btn active">All</button>
          <button className="option-btn">1:1 Call</button>
          <button className="option-btn">Priority DM</button>
          <button className="option-btn">Digital Product</button>
          <button className="option-btn">Package</button>
        </div>

        <div className="service-cards">
          {profileData.services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <span className="duration">{service.duration}</span>
                <span className="price">{service.price}</span>
              </div>
              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile; 