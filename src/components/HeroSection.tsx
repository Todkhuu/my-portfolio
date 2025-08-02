import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <motion.section
      className="py-20 px-4 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center ">
          <Image
            width={1000}
            height={1000}
            alt="me"
            src={"/me.png"}
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Тодхүү</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Full Stack Developer
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
          Миний зорилго технологийн хүчээр асуудлыг шийдэх явдал юм.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#projects">Төслүүдийг үзэх</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Холбоо барих</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
