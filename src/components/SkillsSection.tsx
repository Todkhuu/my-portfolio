import { professionSkills, skills } from "@/utils/skills";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export const SkillsSection = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-muted/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Технологи & Ур чадвар
        </h2>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-3 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group hover:scale-105"
            >
              <div className="w-10 h-10 mb-2 flex items-center justify-center bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                <img
                  src={skill.logo || "/placeholder.svg"}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=24&width=24";
                  }}
                />
              </div>
              <span className="text-xs font-medium text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
            Мэргэшсэн чиглэлүүд
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {professionSkills.map((skill, index) => {
              return (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {skill.profession}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
