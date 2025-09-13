import React, { useState, useEffect } from 'react';
import { Post } from '@/entities/Post';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const params = new URLSearchParams(location.search);
      const slug = params.get('slug');
      if (slug) {
        const result = await Post.filter({ slug: slug });
        if (result && result.length > 0) {
          setPost(result[0]);
        }
      }
      setLoading(false);
    };
    fetchPost();
  }, [location.search]);

  if (loading) {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 animate-pulse">
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-1/4 mb-8"></div>
            <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded mb-8"></div>
            <div className="space-y-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
            </div>
        </div>
    );
  }

  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-12">
        <article className="prose dark:prose-invert lg:prose-xl max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <p className="text-gray-500 dark:text-gray-400">{format(new Date(post.published_date), 'MMMM d, yyyy')}</p>
                <h1 className="mb-4">{post.title}</h1>
            </motion.div>
            <motion.img 
                src={post.image_url} 
                alt={post.title} 
                className="rounded-lg my-8" 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.div>
        </article>
    </div>
  );
}