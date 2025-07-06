"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: "SmartHire HR system",
      description:
        "Next.js болон Gemini AI ашиглан хийсэн CV шүүж match өгөх систем",
      technologies: [
        "Gemini AI",
        "Next.js",
        "React",
        "PDF.js",
        "Route Handlers",
        "MongoDB",
      ],
      githubUrl: "https://github.com/Todkhuu/SmartHire",
      liveUrl: "https://smart-hire-rouge.vercel.app/",
      image: "/smarthire.png",
    },
    {
      title: "StyleCut Salon Booking App",
      description: "Next.js ашиглан хийсэн салон цаг захиалгын апп",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Route Handlers",
        "MongoDB",
      ],
      githubUrl: "https://github.com/Todkhuu/my-salon",
      liveUrl: "https://my-salon-six.vercel.app/",
      image: "/StyleCut.png",
    },
    {
      title: "Food delivery",
      description:
        "Хоол захиалгын web app хийв. Admin болон хэрэглэгчийн хуудастай",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Route Handlers",
        "MongoDB",
      ],
      githubUrl: "https://github.com/Todkhuu/food_delivery_last",
      liveUrl:
        "https://food-delivery-last-291bypmyo-todkhuus-projects.vercel.app/",
      image: "/food.png",
    },
    {
      title: "Movie App",
      description: "Гадны API ашиглан, киноны мэдээлэл харуулах web хийв",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Todkhuu/movie-app-be-2-10",
      liveUrl: "https://movie-app-2-3.vercel.app/",
      image: "/movie.png",
    },
  ];

  const skills = [
    { name: "JavaScript", category: "Frontend", logo: "/js.svg" },
    { name: "TypeScript", category: "Frontend", logo: "/ts.svg" },
    { name: "HTML", category: "Frontend", logo: "/html.svg" },
    { name: "CSS", category: "Frontend", logo: "/css.svg" },
    { name: "React", category: "Frontend", logo: "/react.svg" },
    { name: "Next.js", category: "Frontend", logo: "/nextjs.svg" },
    { name: "Tailwind CSS", category: "Frontend", logo: "/tailwind.svg" },
    { name: "Shadcn/ui", category: "Frontend", logo: "/shadcnui.svg" },
    { name: "Node.js", category: "Backend", logo: "/node.svg" },
    { name: "Express", category: "Backend", logo: "/express.svg" },
    {
      name: "Apollo GraphQL",
      category: "Backend",
      logo: "/apollographql.svg",
    },
    { name: "REST API", category: "Backend", logo: "/rest-api.svg" },
    { name: "MongoDB", category: "Database", logo: "/mongo.svg" },
    { name: "MySQL", category: "Database", logo: "/mysql.svg" },
    { name: "PostgreSQL", category: "Database", logo: "/postgresql.svg" },
    { name: "Cypress", category: "Testing", logo: "/cypress.svg" },
    { name: "Jest", category: "Testing", logo: "/jest.svg" },
    { name: "Git", category: "Tools", logo: "/git.svg" },
    { name: "Monorepo", category: "Tools", logo: "/monorepo.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <section className="py-20 px-4 text-center">
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
      </section>

      {/* Skills Section - Compact Design */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Технологи & Ур чадвар
          </h2>

          {/* All skills in one clean grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">
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
                      e.currentTarget.src =
                        "/placeholder.svg?height=24&width=24";
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Simple category badges */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
              Мэргэшсэн чиглэлүүд
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="px-4 py-2">
                Frontend Development
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Backend Development
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Database Management
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Боловсрол & Туршлага
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
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
                      {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "Git",
                      ].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Гол төслүүд:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• E-commerce веб сайт (React + Node.js)</li>
                      <li>• RESTful API хөгжүүлэлт</li>
                      <li>• Database дизайн болон удирдлага</li>
                      <li>• Багийн төсөл - Task Management App</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
                Хөгжлийн замнал
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Bootcamp эхлэл</h4>
                      <span className="text-sm text-muted-foreground">
                        1-р сар
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      HTML, CSS, JavaScript үндсийг эзэмшсэн
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Frontend</h4>
                      <span className="text-sm text-muted-foreground">
                        2-4 сар
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      React, TypeScript, Tailwind CSS-г судалсан
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Backend хөгжүүлэлт</h4>
                      <span className="text-sm text-muted-foreground">
                        5-6 сар
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Node.js, Express, MongoDB, API хөгжүүлэлт
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Full Stack төслүүд</h4>
                      <span className="text-sm text-muted-foreground">
                        7-8 сар
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Веб аппликейшн хөгжүүлэлт, deployment & PineQuest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bootcamp Achievements */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Bootcamp-ын амжилтууд
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold mb-2">Тэмцээн</h4>
                <p className="text-sm text-muted-foreground">
                  PineQuest тэмцээнд амжилттай оролцов
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-semibold mb-2">Багийн ахлагч</h4>
                <p className="text-sm text-muted-foreground">
                  5 хүний багийн төслийг амжилттай удирдсан
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Хурдан суралцагч</h4>
                <p className="text-sm text-muted-foreground">
                  Шинэ технологиудыг эзэмшиж, бусдад туслах
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Миний төслүүд
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow pt-0"
              >
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub код үзэх</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Амьд төсөл үзэх</span>
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated About Section */}
      <section className="py-16 px-4 bg-muted/50">
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
              Bootcamp-г төгссөнөөр би одоо өөрийн портфолиогоо бүтээж байна.
              Миний зорилго бол эдгээр мэдлэгээ ашиглан бодит асуудлыг шийдэх
              инновацийн шийдлүүд бүтээх явдал юм.
            </p>
            <p className="mb-6">
              Одоо би өөрийн ур чадварыг улам бүр хөгжүүлж, шинэ технологиуд
              судалж, өөрийн хувь нэмэрийг оруулахыг зорьж байна.
            </p>
            <div className="flex justify-center gap-4 mt-8">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Холбоо барих</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Хамтран ажиллах, эсвэл зүгээр л уулзахыг хүсвэл надтай холбогдоорой!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <Link
                href="mailto:todoo.zorigtbaatar@gmail.com"
                className="hover:underline"
              >
                todoo.zorigtbaatar@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <Link href="tel:+976-9549-7062" className="hover:underline">
                +976-9549-7062
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>Улаанбаатар, Монгол</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-8">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/50"></footer>
    </div>
  );
}
