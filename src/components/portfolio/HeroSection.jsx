import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Code, Brain, Download } from "lucide-react";
import { motion } from "framer-motion";
import RohitRes from "@/assets/Rohit_Resume.pdf";

/* =========================
   TYPEWRITER
========================= */
const Typewriter = ({ text, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const hasTyped = useRef(false);

  useEffect(() => {
    if (hasTyped.current) return;

    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          hasTyped.current = true;
        }
      }, 70);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span className={className}>{displayedText}</span>;
};

export default function HeroSection() {
  /* =========================
     CURSOR FOLLOW GLOW
  ========================== */
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let x = 0, y = 0;
    let targetX = 0, targetY = 0;

    const animate = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      glow.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    const onMove = (e) => {
      targetX = e.clientX - 250;
      targetY = e.clientY - 250;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* =========================
     OFFSET SAFE SCROLL
  ========================== */
  const scrollWithOffset = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
    id="home"
    className="scroll-mt-24 relative min-h-screen flex items-center justify-center
               overflow-hidden bg-white dark:bg-gray-900"
  >
      

    
      {/* CURSOR GLOW */}
      <div
        ref={glowRef}
        className="hidden md:block pointer-events-none fixed top-0 left-0
                   w-[500px] h-[500px] rounded-full
                   bg-blue-500/30 dark:bg-blue-400/25
                   blur-[140px] opacity-90"
      />

      {/* SUBTLE BASE GRADIENT */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br
                      from-blue-50 via-white to-indigo-50
                      dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              <Typewriter text="Rohit Shinde" delay={500} />
            </span>
          </h1>

          {/* TAGS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80
                            backdrop-blur px-4 py-2 rounded-full shadow border">
              <Code className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Computer Engineering Student
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80
                            backdrop-blur px-4 py-2 rounded-full shadow border">
              <Brain className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Aspiring Data Scientist
              </span>
            </div>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300
                       mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions through technology,
            data science, and full-stack development.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollWithOffset("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white
                         px-8 py-3 rounded-full font-semibold shadow-lg"
            >
              View My Work
            </motion.button>

            <motion.a
              href="@/assets/Rohit_Resume.pdf"              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                         text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg
                         border flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button onClick={() => scrollWithOffset("about")} className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-blue-600" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
