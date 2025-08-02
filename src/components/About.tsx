import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-muted/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Миний тухай</h2>
        <div className="prose prose-lg mx-auto text-muted-foreground">
          <p className="mb-6">
            Би 8 сарын интенсив Full Stack Web Development bootcamp-г саяхан
            амжилттай төгссөн шинэ хөгжүүлэгч юм. Энэ хугацаанд би HTML, CSS,
            JavaScript-аас эхлээд React, Node.js, MongoDB зэрэг орчин үеийн
            технологиудыг эзэмшсэн.
          </p>
          <p className="mb-6">
            Bootcamp-г төгссөнөөр одоо өөрийн портфолиогоо бүтээж байна. Миний
            зорилго бол эдгээр мэдлэгээ ашиглан бодит асуудлыг шийдэх инновацийн
            шийдлүүд бүтээх явдал юм.
          </p>
          <p className="mb-6">
            Одоо өөрийн ур чадварыг улам бүр хөгжүүлж, шинэ технологиуд судалж,
            өөрийн хувь нэмэрийг оруулахыг зорьж байна.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-8">
            <Badge variant="secondary" className="text-sm py-2 px-4">
              Bootcamp амжилттай төгссөн
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              10+ төсөл хийсэн
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              Ажилд ороход бэлэн
            </Badge>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
