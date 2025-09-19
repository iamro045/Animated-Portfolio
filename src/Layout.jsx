import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === createPageUrl("Home") || location.pathname === '/';

  // --- Theme Management ---
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // --- Scroll Handling ---
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'education', 'projects', 'blog', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      if (isHomePage) {
        let currentSectionId = 'home'; // Default to home at the top
        for (const id of sections) {
            const element = document.getElementById(id);
            // FIX: Check if element exists before trying to access its properties
            if (element) {
                const offsetTop = element.offsetTop - 150; // Adjust offset as needed
                if (scrollPosition >= offsetTop) {
                    currentSectionId = id;
                }
            }
        }
        setActiveSection(currentSectionId);
      } else {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.pathname]); // Re-run if path changes

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Use react-router-dom's Link/navigate for better SPA behavior
      window.location.href = `${createPageUrl('Home')}#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'Blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    // FIX: Added dark mode classes
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <style>{`
        html { scroll-behavior: smooth; }
        .navbar-blur {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage || isMobileMenuOpen
          ? 'bg-white/80 dark:bg-gray-900/80 navbar-blur shadow-lg border-b border-gray-200 dark:border-gray-700' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('home')}
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-transform duration-200 hover:scale-105"
            >
              Groott
            </button>
            
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                item.page ? (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2 ${
                      activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.span 
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      />
                    )}
                  </button>
                )
              ))}
               {/* ADDED: Theme toggle button for desktop */}
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
                {/* ADDED: Theme toggle button for mobile */}
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 navbar-blur"
            >
              <div className="max-w-6xl mx-auto px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  item.page ? (
                    <Link 
                      key={item.name} 
                      to={createPageUrl(item.page)} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button 
                      key={item.name} 
                      onClick={() => scrollToSection(item.id)} 
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.id 
                          ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/your-username" // ADD your link
              target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-600" />
            </a>
            <a 
              href="https://linkedin.com/in/your-username" // ADD your link
              target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-700" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Rohit Shinde. Built with React and passion for technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
