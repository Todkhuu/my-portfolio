import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { educationSkills } from "@/utils/skills";
import { educationMainProjects } from "@/utils/projects";
import { achievement, studyPath } from "@/utils/studyPath";

export const EducationExperience = () => {
  return (
    <motion.section
      className="py-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Боловсрол & Туршлага
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
              Боловсрол
            </h3>
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold">
                    Full Stack Web Development Bootcamp
                  </h4>
                  <p className="text-muted-foreground">
                    8 сарын хөтөлбөр - Амжилттай төгссөн
                  </p>
                </div>
                <Badge variant="secondary">2024</Badge>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium mb-2">Суралцсан технологиуд:</h5>
                  <div className="flex flex-wrap gap-2">
                    {educationSkills.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Гол төслүүд:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {educationMainProjects.map((project) => {
                      return <li key={project}>{project}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
              Хөгжлийн замнал
            </h3>
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {studyPath.map((path, index) => {
                return (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-muted"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className={`absolute -left-2 top-0 w-4 h-4 ${path.color} rounded-full`}
                    ></div>
                    <div className="pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{path.header}</h4>
                        <span className="text-sm text-muted-foreground">
                          {path.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {path.studySkills}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.section
          className="mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Bootcamp-ын амжилтууд
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievement.map((ach, index) => {
              return (
                <Card key={index} className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${ach.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-2xl">{ach.icon}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{ach.header}</h4>
                  <p className="text-sm text-muted-foreground">
                    {ach.paragraph}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.section>
      </div>
    </motion.section>
  );
};
