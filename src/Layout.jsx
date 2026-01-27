import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sun, Moon, Github, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage =
    location.pathname === createPageUrl("Home") || location.pathname === "/";

  /* =========================
     THEME MANAGEMENT
  ========================== */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  /* =========================
     SCROLL & ACTIVE SECTION
  ========================== */
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = [
      "home",
      "about",
      "skills",
      "education",
      "projects",
      "blog",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 50);

      const offset = 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPos + offset >= section.offsetTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  /* =========================
     SCROLL TO SECTION (OFFSET SAFE)
  ========================== */
  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate(`/#${id}`);
      setTimeout(() => scrollToSection(id), 100);
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  /* =========================
     NAV ITEMS
  ========================== */
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Blog", id: "blog" }, // ✅ FIXED
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow border-b border-gray-200 dark:border-gray-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <button
              onClick={() => scrollToSection("home")}
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition"
            >
              Groott
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-2 font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  )}
                </button>
              ))}

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "light" ? <Moon /> : <Sun />}
              </button>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "light" ? <Moon /> : <Sun />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg ${
                      activeSection === item.id
                        ? "bg-blue-50 dark:bg-blue-900/40 text-blue-600"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="">{children}</main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://github.com/iamro045"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white dark:bg-gray-700 rounded-full
                   flex items-center justify-center
                   hover:scale-110 transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/rohitshinde045"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white dark:bg-gray-700 rounded-full
                   flex items-center justify-center
                   hover:scale-110 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Rohit Shinde. Built with React &
            passion 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}
