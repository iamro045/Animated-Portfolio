import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-800 dark:text-gray-200">{skill}</span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;