import React from "react";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import TimelineSection from "../components/portfolio/TimelineSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import BlogSection from "../components/portfolio/BlogSection";
import ContactSection from "../components/portfolio/ContactSection";
import Layout from "@/Layout";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Layout/>
    </div>
  );
}