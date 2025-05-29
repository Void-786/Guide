import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '299',
      description: 'Perfect for initial career guidance and basic consultation',
      features: [
        { text: '45-minute Expert Consultation', included: true },
        { text: 'Basic Career Assessment', included: true },
        { text: 'Resume Review', included: true },
        { text: 'Email Support', included: true },
        { text: 'Access to Basic Resources', included: true },
        { text: 'Interview Preparation', included: false },
        { text: 'Career Roadmap Planning', included: false },
        { text: 'LinkedIn Profile Review', included: false },
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '499',
      description: 'Ideal for comprehensive career development',
      features: [
        { text: '90-minute Expert Consultation', included: true },
        { text: 'Detailed Career Assessment', included: true },
        { text: 'Resume & Cover Letter Review', included: true },
        { text: 'Priority Email Support', included: true },
        { text: 'Access to All Resources', included: true },
        { text: 'Interview Preparation', included: true },
        { text: 'Career Roadmap Planning', included: true },
        { text: 'LinkedIn Profile Optimization', included: true },
      ],
      buttonText: 'Get Started',
      popular: true,
    },
    {
      name: 'Premium',
      price: '799',
      description: 'For serious career advancement and transitions',
      features: [
        { text: '120-minute Expert Consultation', included: true },
        { text: 'Comprehensive Career Assessment', included: true },
        { text: 'Resume, Cover Letter & Portfolio Review', included: true },
        { text: '24/7 Priority Support', included: true },
        { text: 'Access to Premium Resources', included: true },
        { text: 'Advanced Interview Preparation', included: true },
        { text: 'Detailed Career Roadmap', included: true },
        { text: 'LinkedIn & Personal Branding', included: true },
      ],
      buttonText: 'Contact Sales',
      popular: false,
    },
  ];

  const expertPricing = [
    {
      type: 'Career Transition',
      price: '250',
      duration: '90 min',
      description: 'Expert guidance for career changes and transitions',
    },
    {
      type: 'Interview Preparation',
      price: '200',
      duration: '60 min',
      description: 'Comprehensive interview coaching and preparation',
    },
    {
      type: 'Resume & LinkedIn',
      price: '175',
      duration: '45 min',
      description: 'Professional profile optimization and review',
    },
    {
      type: 'Career Strategy',
      price: '350',
      duration: '120 min',
      description: 'Long-term career planning and strategy development',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your career development needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.popular
                  ? 'border-2 border-blue-500 relative'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <Link
                  to="/signup"
                  className={`mt-8 block w-full bg-${
                    plan.popular ? 'blue' : 'gray'
                  }-600 text-white rounded-md py-2 text-sm font-semibold text-center hover:bg-${
                    plan.popular ? 'blue' : 'gray'
                  }-700`}
                >
                  {plan.buttonText}
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex space-x-3">
                      {feature.included ? (
                        <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                      ) : (
                        <FaTimes className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      )}
                      <span className="text-sm text-gray-500">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Services Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Individual Expert Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertPricing.map((service) => (
              <div
                key={service.type}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900">{service.type}</h4>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">${service.price}</span>
                  <span className="ml-1 text-gray-500">/{service.duration}</span>
                </div>
                <Link
                  to="/experts"
                  className="mt-6 block w-full bg-blue-600 text-white rounded-md py-2 text-sm font-semibold text-center hover:bg-blue-700"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Can I change my plan later?
              </h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                What payment methods do you accept?
              </h4>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                How do I book an expert session?
              </h4>
              <p className="text-gray-600">
                After selecting a plan or service, you'll be able to browse our expert profiles and schedule a session at your convenience.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Can I get a refund if I'm not satisfied?
              </h4>
              <p className="text-gray-600">
                Yes, we offer a 14-day money-back guarantee if you're not satisfied with our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 