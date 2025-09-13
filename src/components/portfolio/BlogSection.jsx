import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// STEP 1: Import the CORRECT data file, which is an ARRAY of posts.
import postsData from '@/Entities/Post.json'; 
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { format } from 'date-fns';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // STEP 2: Use the imported array directly. No .posts is needed.
    const latestPosts = [...postsData]
      .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
      .slice(0, 3);

    setPosts(latestPosts);
  }, []);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            From The <span className="text-blue-600">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My thoughts on technology, data science, and personal development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
            >
              <Link
                to={createPageUrl(`BlogPost?slug=${post.slug}`)}
                className="block bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
              >
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col h-full">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {format(new Date(post.published_date), 'MMMM d, yyyy')}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={createPageUrl('Blog')}
            className="px-6 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;