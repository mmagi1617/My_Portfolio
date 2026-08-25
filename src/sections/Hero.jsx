import React from "react";
import background from "../assets/images/background.png";
import TYpingText from "../components/TYpingText";
import Button from "../components/Button";
import { ArrowRight, ChevronDown, DownloadIcon } from "lucide-react";
import magendiran from "../assets/images/Magendiran-M.png";
import TrainBorderButton from "../components/TrainBorderButton";
import resume from "../assets/doc/Magediran_M_Full_Stack_Developer.pdf";

const Hero = () => {
  const skills = [
    "Java",
    "PHP",
    "JavaScript",
    "SQL",
    "HTML5",
    "CSS3",
    "ES6+",
    "React.js",
    "jQuery",
    "AJAX",
    "Responsive Design",
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "JPA",
    "CodeIgniter 4",
    "REST APIs",
    "MVC Architecture",
    "MySQL",
    "Git",
    "GitHub",
    "Postman",
    "XAMPP",
    "Figma",
    "WordPress",
    "VS Code",
    "OOP",
    "REST API Design",
    "DBMS",
    "RBAC",
    "Biometric Integration",
    "Agile",
    "JDBC",
    "Servlet",
    "JSP",
    "Collections",
    "Multithreading",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background */}
      <div className="absolute inset-0">
        <a href="#home">
          <img
            src={background}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
        </a>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-30 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT ================= */}
          <div>
            <div className="grid gap-3 mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in animation-delay-200">
                Hi, I'm
                <span className="text-primary sm:text-5xl md:text-6xl lg:text-7xl glow-text">
                  {" "}
                  Magendiran
                </span>
              </h1>

              <h3 className="text-xl sm:text-2xl md:text-3xl animate-fade-in animation-delay-300">
                Full Stack Developer{" "}
                <span>
                  [ <TYpingText /> ]
                </span>
              </h3>

              <p className="text-lg tracking-wide text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                I build practical, scalable web applications that solve real
                business problems — from backend APIs and database design to
                responsive user interfaces.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-5 flex-wrap animate-fade-in animation-delay-400">
              <Button
                size="lg"
                className="py-[7px] px-[15px] btn-hover"
              >
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>

              <TrainBorderButton>
                <DownloadIcon className="h-4 w-4" />
                Download
              </TrainBorderButton>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative animate-fade-in animation-delay-400">
            <div className="relative max-w-md mx-auto">
              <div className="relative glass-img rounded-3xl glow-border mx-auto h-[400px] w-[300px]">
                <img
                  src={magendiran}
                  alt="Magendiran"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Open to Work Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                    <span className="text-sm font-medium">
                      Open to work
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-1 -left-4 glass rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-primary">
                    1.6+
                  </div>

                  <div className="text-xs text-muted-foreground">
                    years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SKILLS MARQUEE ================= */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee">
              {/* First set */}
              <div className="flex shrink-0">
                {skills.map((skill, index) => (
                  <div
                    key={`skill-1-${index}`}
                    className="shrink-0 px-8 py-4"
                  >
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Second identical set */}
              <div className="flex shrink-0">
                {skills.map((skill, index) => (
                  <div
                    key={`skill-2-${index}`}
                    className="shrink-0 px-8 py-4"
                  >
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors "
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>

          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

    </section>
  );
};

export default Hero;