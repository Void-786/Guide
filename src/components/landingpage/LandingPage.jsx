import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaChartLine, FaLightbulb, FaStar, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const features = [
    {
      icon: <FaRocket className="w-12 h-12 text-blue-500" />,
      title: 'Expert Guidance',
      description: 'Get personalized advice from industry leaders and experienced professionals.',
    },
    {
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
      title: 'Flexible Scheduling',
      description: 'Connect with experts at your convenience, 24/7 availability.',
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-blue-500" />,
      title: 'Career Growth',
      description: 'Accelerate your career with proven strategies and mentorship.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      quote: 'The expert guidance helped me land my dream job at a top tech company.',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      quote: 'I received invaluable career advice that transformed my professional journey.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      quote: 'The mentorship program was exactly what I needed to advance my career.',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '500+', label: 'Expert Mentors' },
    { number: '50K+', label: 'Sessions Completed' },
    { number: '95%', label: 'Success Rate' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Transform Your Career with Expert Guidance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Connect with industry experts, get personalized mentorship, and accelerate your professional growth.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/experts"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Browse Experts
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the tools and guidance you need to succeed in your career journey.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center transform hover:scale-105 transition duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who have transformed their careers with our platform.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our platform in three simple steps.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[1, 2, 3].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center transform hover:scale-105 transition duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">{step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step === 1 ? 'Create Your Profile' : step === 2 ? 'Choose Your Expert' : 'Start Your Journey'}
                </h3>
                <p className="text-gray-600">
                  {step === 1 ? 'Sign up and tell us about your career goals.' :
                   step === 2 ? 'Browse and select from our network of experts.' :
                   'Schedule sessions and begin your career transformation.'}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have already taken their careers to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
