"use client";
import { ThemeToggle } from "./ThemeToggle";
import { HeroSection } from "./HeroSection";
import { SkillsSection } from "./SkillsSection";
import { EducationExperience } from "./EducationExperience";
import { Projects } from "./Projects";
import { About } from "./About";
import { Contact } from "./Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <HeroSection />
      <SkillsSection />
      <EducationExperience />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
