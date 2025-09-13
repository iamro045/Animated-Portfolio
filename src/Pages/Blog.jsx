import React, { useState, useEffect } from 'react';
import { Post } from '@/entities/Post';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const allPosts = await Post.list('-published_date');
      setPosts(allPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
            The Code &amp; Data Chronicles
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-gray-500 dark:text-gray-400 mb-12"
        >
            A collection of my thoughts and explorations in technology.
        </motion.p>
        
        <div className="space-y-12">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                    <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-600 rounded mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-600 rounded mt-2"></div>
                </div>
            ))
          ) : (
            posts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Link to={createPageUrl(`BlogPost?slug=${post.slug}`)} className="group block">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {format(new Date(post.published_date), 'MMMM d, yyyy')}
                  </p>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <span className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                    Read more &rarr;
                  </span>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}