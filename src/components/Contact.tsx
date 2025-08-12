import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { contact } from "@/utils/contact";

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Холбоо барих</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Хамтран ажиллахыг хүсвэл надтай холбогдоорой!
        </p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {contact.map((con, index) => {
            return (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {con.icon}
                <Link href={con.href} className="hover:underline">
                  {con.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          className="flex gap-4 justify-center mt-8"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/Todkhuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
          {/* <Button variant="outline" asChild>
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </Button> */}
        </motion.div>
      </div>
    </motion.section>
  );
};
