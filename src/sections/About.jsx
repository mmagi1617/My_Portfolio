import React from "react";
import magi from "../assets/images/magi-about-image.png";

import {
  UserRound,
  Layers3,
  Server,
  MonitorSmartphone,
  Database,
  Workflow,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  const whatIDo = [
    {
      id: 1,
      number: "01",
      icon: Layers3,
      heading: "Full Stack Development",
      content:
        "Building complete web applications from database and backend logic to responsive frontend interfaces.",
      skills: ["React.js", "Spring Boot", "PHP", "MySQL"],
    },
    {
      id: 2,
      number: "02",
      icon: Server,
      heading: "Backend Development",
      content:
        "Developing REST APIs and server-side applications using Java, Spring Boot, PHP, and CodeIgniter 4.",
      skills: ["Java", "Spring Boot", "CodeIgniter 4"],
    },
    {
      id: 3,
      number: "03",
      icon: MonitorSmartphone,
      heading: "Frontend Development",
      content:
        "Creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, React.js, jQuery, and AJAX.",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
    },
    {
      id: 4,
      number: "04",
      icon: Database,
      heading: "Database Development",
      content:
        "Designing MySQL databases, writing queries and joins, working with stored procedures, and optimizing database operations.",
      skills: ["MySQL", "SQL", "Database Design"],
    },
    {
      id: 5,
      number: "05",
      icon: Workflow,
      heading: "API & System Integration",
      content:
        "Integrating REST APIs and external hardware systems such as eSSL biometric devices into business applications.",
      skills: ["REST APIs", "eSSL", "System Integration"],
    },
  ];

  return (
    <section
      id="about"
      className="container mx-auto mt-25 w-full px-6 py-8 md:p-10 lg:p-15"
    >
      {/* ==================================================
          ABOUT SECTION
      ================================================== */}

      <div className="m-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5">

        {/* ================= ABOUT IMAGE ================= */}

        <div className="flex items-center justify-center">
          <ScrollReveal direction="right" className="w-full">
            <div className="mx-auto w-[80%] overflow-hidden rounded-3xl glow-border">
              <img
                className="w-full"
                src={magi}
                alt="Magendiran"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* ================= ABOUT CONTENT ================= */}

        <div>

          {/* Small Heading */}

          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <UserRound className="h-5 w-5 text-primary" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Who I Am
              </span>
            </div>
          </ScrollReveal>

          {/* Main Heading */}

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-center text-4xl font-bold text-white md:mt-0 md:text-start md:text-5xl">
              About{" "}
              <span className="text-primary glow-text">
                Me
              </span>
            </h2>
          </ScrollReveal>

          {/* Paragraph 1 */}

          <ScrollReveal delay={150}>
            <p className="my-4 text-[18px] leading-relaxed text-muted-foreground">
              I'm a Full Stack Developer with 1.5+ years of hands-on
              experience building enterprise web applications, HRMS
              platforms, REST APIs, and business-oriented web solutions.
            </p>
          </ScrollReveal>

          {/* Paragraph 2 */}

          <ScrollReveal delay={200}>
            <p className="my-4 text-[18px] leading-relaxed text-muted-foreground">
              My development experience spans Java, Spring Boot, PHP,
              CodeIgniter 4, JavaScript, React.js, and MySQL.
            </p>
          </ScrollReveal>

          {/* Paragraph 3 */}

          <ScrollReveal delay={250}>
            <p className="my-4 text-[18px] leading-relaxed text-muted-foreground">
              At my previous role, I worked on production applications used
              by real organizations, including an HRMS that manages employee
              records, attendance, payroll, and accounts. I also integrated
              an eSSL biometric device to automate attendance collection.
            </p>
          </ScrollReveal>

          {/* Paragraph 4 */}

          <ScrollReveal delay={300}>
            <p className="my-4 text-[18px] leading-relaxed text-muted-foreground">
              I enjoy working across the complete development cycle —
              understanding requirements, designing database structures,
              developing backend logic, creating responsive interfaces,
              integrating APIs, testing, and improving existing applications.
            </p>
          </ScrollReveal>

          {/* Paragraph 5 */}

          <ScrollReveal delay={350}>
            <p className="my-4 text-[18px] leading-relaxed text-muted-foreground">
              I'm currently strengthening my expertise in React.js,
              JWT-based security, and cloud deployment.
            </p>
          </ScrollReveal>

        </div>
      </div>

      {/* ==================================================
          WHAT I DO SECTION
      ================================================== */}

      <div className="relative mt-24 md:mt-32">

        {/* ================= SECTION HEADER ================= */}

        <div className="mx-auto mb-12 max-w-2xl text-center">

          {/* Small Heading */}

          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                My Expertise
              </span>
            </div>
          </ScrollReveal>

          {/* Main Heading */}

          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              What I{" "}
              <span className="text-primary glow-text">
                Do
              </span>
            </h2>
          </ScrollReveal>

          {/* Description */}

          <ScrollReveal delay={200}>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              From frontend interfaces to backend systems, I build complete
              digital solutions that solve real-world problems.
            </p>
          </ScrollReveal>

        </div>

        {/* ==================================================
            CARDS CONTAINER
        ================================================== */}

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">

          {whatIDo.map((data, index) => {
            const Icon = data.icon;

            return (
              <ScrollReveal
                key={data.id}
                delay={(index % 2) * 100}
                className={
                  index === whatIDo.length - 1
                    ? "md:col-span-2"
                    : ""
                }
              >

                <article
                  className="
                    glass
                    box-shadow
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    p-6
                    transition-all
                    duration-500
                    hover:border-primary/40
                    hover:shadow-[0_0_30px_rgba(23,174,217,0.08)]
                    sm:p-7
                  "
                >

                  {/* ================= HOVER TOP BORDER ================= */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-0
                      bg-primary
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* ================= BACKGROUND GLOW ================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-primary/5
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* ================= CARD TOP ================= */}

                  <div className="relative flex items-start justify-between gap-4">

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-primary/20
                        bg-primary/10
                        text-primary
                        transition-all
                        duration-500
                        group-hover:border-primary
                        group-hover:bg-primary
                        group-hover:text-background
                        group-hover:shadow-[0_0_25px_rgba(23,174,217,0.25)]
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* NUMBER */}

                    <span
                      className="
                        text-xs
                        font-medium
                        tracking-wider
                        text-muted-foreground/60
                        transition-colors
                        duration-300
                        group-hover:text-primary
                      "
                    >
                      / {data.number}
                    </span>

                  </div>

                  {/* ================= CARD CONTENT ================= */}

                  <div className="relative mt-6 flex-1">

                    <h3
                      className="
                        text-xl
                        font-bold
                        leading-snug
                        transition-colors
                        duration-300
                        group-hover:text-primary
                        sm:text-2xl
                      "
                    >
                      {data.heading}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                      {data.content}
                    </p>

                  </div>

                  {/* ================= SKILLS ================= */}

                  <div className="relative mt-7 flex flex-wrap gap-2">

                    {data.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-lg
                          border
                          border-border
                          bg-surface/70
                          px-2.5
                          py-1.5
                          text-[11px]
                          text-muted-foreground
                          transition-all
                          duration-300
                          hover:border-primary/40
                          hover:text-primary
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  {/* ================= BOTTOM ================= */}
                  justify-between

                  <div
                    className="
                      relative
                      mt-7
                      flex
                      items-center
                      border-t
                      border-border/70
                      pt-5
                    "
                  >

                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Development Expertise
                    </span>

                    <ArrowUpRight
                      className="
                        h-5
                        w-5
                        text-primary
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </div>

                </article>

              </ScrollReveal>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default About;