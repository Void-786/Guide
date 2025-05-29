import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';

// Sample blog posts with more detailed content
const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right Expert for Your Career Development',
    excerpt: 'Finding the right expert can be challenging, but with these tips, you can make informed decisions that will accelerate your career growth...',
    content: 'In today\'s competitive job market, having the right mentor can make all the difference. This comprehensive guide will help you identify and connect with experts who can truly help you achieve your career goals.',
    date: '2024-03-15',
    author: 'John Doe',
    authorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    category: 'Career Development',
    readTime: '5 min read',
    tags: ['Career Growth', 'Mentorship', 'Professional Development'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    link: '/blog/how-to-choose-the-right-expert-for-your-career-development',
  },
  {
    id: 2,
    title: 'The Importance of Networking in the Modern Job Market',
    excerpt: 'Networking plays a pivotal role in career advancement. In this post, we discuss strategies for effective networking and building meaningful professional relationships...',
    content: 'Networking is no longer just about exchanging business cards. Learn how to build genuine connections that can open doors to new opportunities and career growth.',
    date: '2024-03-10',
    author: 'Jane Smith',
    authorImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    category: 'Networking',
    readTime: '4 min read',
    tags: ['Networking', 'Career Tips', 'Professional Growth'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '/blog/the-importance-of-networking-in-the-modern-job-market',
  },
  {
    id: 3,
    title: 'Top Skills Every Developer Should Learn in 2024',
    excerpt: 'As technology evolves, so do the skills required. Check out these in-demand skills every developer should be focusing on to stay competitive...',
    content: 'Stay ahead of the curve by mastering these essential skills that are shaping the future of software development.',
    date: '2024-03-05',
    author: 'Alice Johnson',
    authorImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    category: 'Technology',
    readTime: '6 min read',
    tags: ['Programming', 'Tech Skills', 'Career Development'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    link: '/blog/top-skills-every-developer-should-learn-in-2024',
  },
  {
    id: 4,
    title: 'How Expert Guidance Can Accelerate Your Career Growth',
    excerpt: 'Seeking expert advice can be the key to unlocking faster career progression. Learn how to maximize the benefits of mentorship and expert guidance...',
    content: 'Discover how working with industry experts can help you navigate career challenges and achieve your professional goals more effectively.',
    date: '2024-03-01',
    author: 'Bob Brown',
    authorImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    category: 'Career Growth',
    readTime: '5 min read',
    tags: ['Mentorship', 'Career Growth', 'Professional Development'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '/blog/how-expert-guidance-can-accelerate-your-career-growth',
  },
];

// Categories for filtering
const categories = ['All', 'Career Development', 'Networking', 'Technology', 'Career Growth'];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  // Get unique tags from all posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights, tips, and strategies to help you grow in your career
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {filteredPosts[0].category}
                  </span>
                  <span>•</span>
                  <span>{filteredPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  <Link to={filteredPosts[0].link} className="hover:text-blue-600">
                    {filteredPosts[0].title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center">
                  <img
                    src={filteredPosts[0].authorImage}
                    alt={filteredPosts[0].author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{filteredPosts[0].author}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(filteredPosts[0].date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.slice(1).map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                <Link to={post.link} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium text-gray-900">{post.author}</span>
                </div>
                <Link
                  to={post.link}
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  Read More <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* No Results Message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedTag('');
            }}
            className="text-blue-600 hover:text-blue-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;


