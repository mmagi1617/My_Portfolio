import React from "react";

import background from "../assets/images/background.png";
import magendiran from "../assets/images/Magendiran-M.png";
import resume from "../assets/doc/Magediran_M_Full_Stack_Developer.pdf";

import TYpingText from "../components/TYpingText";
import Button from "../components/Button";
import TrainBorderButton from "../components/TrainBorderButton";
import ScrollReveal from "../components/ScrollReveal";

import {
  ArrowRight,
  ChevronDown,
  DownloadIcon,
} from "lucide-react";

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
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="absolute inset-0">

        <a href="#home">
          <img
            src={background}
            alt="Hero Background"
            className="h-full w-full object-cover opacity-40"
          />
        </a>

      </div>


      {/* ==================================================
          BACKGROUND GRADIENT
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-background/20
          via-background/80
          to-background
        "
      />


      {/* ==================================================
          FLOATING DOTS
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {[...Array(30)].map((_, i) => (

          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: "#20b2a6",

              left: `${Math.random() * 100}%`,

              top: `${Math.random() * 100}%`,

              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,

              animationDelay: `${
                Math.random() * 5
              }s`,
            }}
          />

        ))}

      </div>


      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          container
          relative
          z-10
          mx-auto
          px-6
          pb-30
          pt-32
        "
      >

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div>

            <div className="mb-4 grid gap-3">

              {/* ================= NAME ================= */}

              <ScrollReveal delay={100}>

                <h1
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  Hi, I'm

                  <span
                    className="
                      text-primary
                      glow-text
                      sm:text-5xl
                      md:text-6xl
                      lg:text-7xl
                    "
                  >
                    {" "}
                    Magendiran
                  </span>

                </h1>

              </ScrollReveal>


              {/* ================= ROLE ================= */}

              <ScrollReveal delay={200}>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  Full Stack Developer{" "}

                  <span>
                    [ <TYpingText /> ]
                  </span>

                </h3>

              </ScrollReveal>


              {/* ================= DESCRIPTION ================= */}

              <ScrollReveal delay={300}>

                <p
                  className="
                    max-w-lg
                    text-lg
                    tracking-wide
                    text-muted-foreground
                  "
                >
                  I build practical, scalable web applications that
                  solve real business problems — from backend APIs
                  and database design to responsive user interfaces.
                </p>

              </ScrollReveal>

            </div>


            {/* ==================================================
                CTA BUTTONS
            ================================================== */}

            <ScrollReveal delay={400}>

              <div className="flex flex-wrap gap-5">

                {/* Contact Button */}

                <a href="#contact">

                  <Button
                    size="lg"
                    className="btn-hover px-[15px] py-[7px]"
                  >
                    Contact Me

                    <ArrowRight className="h-5 w-5" />
                  </Button>

                </a>


                {/* Download Resume */}

                <a
                  href={resume}
                  download="Magendiran_M_Full_Stack_Developer.pdf"
                >

                  <TrainBorderButton>

                    <DownloadIcon className="h-4 w-4" />

                    Download Resume

                  </TrainBorderButton>

                </a>

              </div>

            </ScrollReveal>

          </div>


          {/* ==================================================
              RIGHT PROFILE IMAGE
          ================================================== */}

          <ScrollReveal
            direction="left"
            delay={250}
            className="relative"
          >

            <div className="relative mx-auto max-w-md">

              <div
                className="
                  glass-img
                  glow-border
                  relative
                  mx-auto
                  h-[400px]
                  w-[300px]
                  rounded-3xl
                "
              >

                {/* ================= PROFILE IMAGE ================= */}

                <img
                  src={magendiran}
                  alt="Magendiran M, Full Stack Developer"
                  className="
                    h-full
                    w-full
                    rounded-2xl
                    object-cover
                  "
                />


                {/* ==================================================
                    OPEN TO WORK BADGE
                ================================================== */}

                <div
                  className="
                    glass
                    animate-float
                    absolute
                    -bottom-4
                    -right-4
                    rounded-xl
                    px-4
                    py-3
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        h-3
                        w-3
                        animate-pulse
                        rounded-full
                        bg-green-500
                      "
                    />

                    <span className="text-sm font-medium">
                      Open to work
                    </span>

                  </div>

                </div>


                {/* ==================================================
                    EXPERIENCE BADGE
                ================================================== */}

                <div
                  className="
                    glass
                    absolute
                    -left-4
                    -top-1
                    rounded-xl
                    px-4
                    py-3
                  "
                >

                  <div className="text-2xl font-bold text-primary">
                    1.6+
                  </div>

                  <div className="text-xs text-muted-foreground">
                    years Exp.
                  </div>

                </div>

              </div>

            </div>

          </ScrollReveal>

        </div>


        {/* ==================================================
            SKILLS MARQUEE
        ================================================== */}

        <ScrollReveal delay={500}>

          <div className="mt-20">

            <p
              className="
                mb-6
                text-center
                text-sm
                text-muted-foreground
              "
            >
              Technologies I work with
            </p>


            <div className="relative overflow-hidden">

              <div className="flex w-max animate-marquee">

                {/* ==================================================
                    FIRST SET
                ================================================== */}

                <div className="flex shrink-0">

                  {skills.map((skill, index) => (

                    <div
                      key={`skill-1-${index}`}
                      className="
                        shrink-0
                        px-8
                        py-4
                      "
                    >

                      <span
                        className="
                          whitespace-nowrap
                          text-xl
                          font-semibold
                          text-muted-foreground/50
                          transition-colors
                          hover:text-muted-foreground
                        "
                      >
                        {skill}
                      </span>

                    </div>

                  ))}

                </div>


                {/* ==================================================
                    SECOND SET
                ================================================== */}

                <div className="flex shrink-0">

                  {skills.map((skill, index) => (

                    <div
                      key={`skill-2-${index}`}
                      className="
                        shrink-0
                        px-8
                        py-4
                      "
                    >

                      <span
                        className="
                          whitespace-nowrap
                          text-xl
                          font-semibold
                          text-muted-foreground/50
                          transition-colors
                          hover:text-muted-foreground
                        "
                      >
                        {skill}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </ScrollReveal>

      </div>


      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

      <ScrollReveal
        delay={600}
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          -translate-x-1/2
        "
      >

        <a
          href="#about"
          className="
            flex
            flex-col
            items-center
            gap-2
            text-muted-foreground
            transition-colors
            hover:text-primary
          "
        >

          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>

          <ChevronDown className="h-6 w-6 animate-bounce" />

        </a>

      </ScrollReveal>

    </section>
  );
};

export default Hero;