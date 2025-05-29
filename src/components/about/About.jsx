import React from 'react';
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: 'With over 15 years of experience in career development and HR, Sarah founded our platform to make expert guidance accessible to everyone.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Expert Relations',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Michael brings 10+ years of experience in talent management and has built our network of industry experts.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Career Coach',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Emily is a certified career coach with expertise in helping professionals navigate career transitions.',
    },
    {
      name: 'David Kim',
      role: 'Technology Director',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      bio: 'David leads our technology initiatives, ensuring a seamless experience for both experts and users.',
    },
  ];

  const values = [
    {
      icon: <FaUsers className="h-8 w-8 text-blue-600" />,
      title: 'Community First',
      description: 'We believe in building a supportive community where everyone can grow and succeed together.',
    },
    {
      icon: <FaLightbulb className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best tools and resources for career development.',
    },
    {
      icon: <FaHandshake className="h-8 w-8 text-blue-600" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of professionalism and ethical conduct in all our interactions.',
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-blue-600" />,
      title: 'Growth',
      description: 'Were committed to helping individuals achieve their full potential through continuous learning.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Us
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              We're on a mission to make expert career guidance accessible to everyone
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We believe that everyone deserves access to expert career guidance. Our platform connects
            professionals with industry experts who can help them navigate their career journey,
            make informed decisions, and achieve their goals.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind our platform who are dedicated to helping you succeed
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                className="mx-auto h-32 w-32 rounded-full"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-blue-600">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-white">10K+</p>
              <p className="mt-2 text-lg text-blue-100">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-white">500+</p>
              <p className="mt-2 text-lg text-blue-100">Expert Mentors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-white">50K+</p>
              <p className="mt-2 text-lg text-blue-100">Sessions Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-white">95%</p>
              <p className="mt-2 text-lg text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of professionals who have transformed their careers with our platform
            </p>
            <div className="mt-8">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 