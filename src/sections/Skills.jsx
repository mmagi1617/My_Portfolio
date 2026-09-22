import { useMemo, useState } from "react";
import { Code2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

/* ============================================================
   FEATURED SKILLS
============================================================ */

const featured = [
  {
    name: "Java",
    icon: "bx-java",
    category: "backend",
    desc: "Core Java · OOP · Collections · Multithreading · JDBC",
  },
  {
    name: "Spring Boot",
    icon: "bx-spring-boot",
    category: "backend",
    desc: "REST APIs · Spring MVC · Hibernate/JPA · Backend Architecture",
  },
  {
    name: "React.js",
    icon: "bx-react",
    category: "frontend",
    desc: "Modern UI · JavaScript ES6 · Responsive Web Development",
  },
  {
    name: "PHP",
    icon: "bx-php",
    category: "backend",
    desc: "CodeIgniter 4 · MVC · Dynamic Applications · APIs",
  },
];

/* ============================================================
   SKILLS DATA
============================================================ */

const skills = [
  ["Backend", "Spring Boot", "Java backend", "bxl bx-spring-boot"],
  ["Backend", "Spring MVC", "Web architecture", "bxl bx-spring-boot"],
  ["Backend", "Hibernate / JPA", "ORM & persistence", "bx bx-cube-alt"],
  ["Backend", "CodeIgniter 4", "PHP framework", "bxl bx-php"],
  ["Backend", "REST APIs", "API development", "bx bx-arrow-right-left"],
  ["Backend", "Servlet / JSP", "Java web", "bxl bx-java"],

  ["Frontend", "React.js", "UI development", "bxl bx-react"],
  ["Frontend", "JavaScript ES6", "Web scripting", "bxl bx-javascript"],
  ["Frontend", "HTML5", "Semantic markup", "bxl bx-html5"],
  ["Frontend", "CSS3", "Responsive styling", "bxl bx-css3"],
  ["Frontend", "jQuery / AJAX", "Dynamic interfaces", "bxl bx-jquery"],

  ["Database", "MySQL", "Relational database", "bx bx-table"],
  ["Database", "Database Design", "Schema & relationships", "bx bx-database"],
  ["Database", "Query Optimization", "Performance", "bx bx-compare-alt"],
  ["Database", "CRUD Operations", "Data management", "bx bx-gear"],

  ["Tools", "Git / GitHub", "Version control", "bxl bx-git"],
  ["Tools", "Postman", "API testing", "bx bx-send"],
  ["Tools", "Figma", "UI handoff", "bxl bx-figma"],
  ["Tools", "WordPress", "Websites & CMS", "bxl bx-wordpress"],
  ["Tools", "XAMPP", "Local development", "bx bx-x"],

  ["Concepts", "OOP", "Object-oriented design", "bx bx-bracket-curly"],
  ["Concepts", "MVC Architecture", "Application structure", "bx bx-git-repo-forked"],
  ["Concepts", "RBAC", "Role-based access", "bx bx-car-key"],
  ["Concepts", "Multithreading", "Concurrent processing", "bx bx-select-all"],
  ["Concepts", "Multi-Tenant Apps", "Application architecture", "bx bx-select-many"],
];

const filters = [
  "All Skills",
  "Backend",
  "Frontend",
  "Database",
  "Tools",
  "Concepts",
];

/* ============================================================
   SKILLS SECTION
============================================================ */

export default function Skills() {
  const [active, setActive] = useState("All Skills");

  const filtered = useMemo(
    () =>
      active === "All Skills"
        ? skills
        : skills.filter(([category]) => category === active),
    [active]
  );

  const visibleFeatured =
    active === "All Skills"
      ? featured
      : featured.filter(
          (item) => item.category === active.toLowerCase()
        );

  return (
    <section
      id="skill"
      className="relative overflow-hidden"
    >
      <div className="relative mx-auto w-[92%] max-w-[1180px]">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="flex flex-col items-center justify-center pb-10 pt-14 sm:pt-[72px]">

          {/* Small Heading */}

          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                My Expertise
              </span>
            </div>
          </ScrollReveal>

          {/* Main Heading */}

          <ScrollReveal delay={100}>
            <h2 className="mt-[18px] max-w-[850px] text-center text-4xl font-bold md:text-5xl">
              Tools I use to build{" "}
              <span className="text-primary glow-text">
                real products.
              </span>
            </h2>
          </ScrollReveal>

          {/* Description */}

          <ScrollReveal delay={200}>
            <p className="mx-auto mt-6 max-w-[690px] text-center text-[15px] leading-7 text-muted-foreground sm:text-[17px] sm:leading-[1.75]">
              Full Stack Developer focused on Java, Spring Boot, PHP
              and React.js. I build production-ready web applications,
              REST APIs and database-driven systems with a focus on
              clean architecture and responsive experiences.
            </p>
          </ScrollReveal>

        </div>

        {/* ==================================================
            FILTER BUTTONS
        ================================================== */}

        <ScrollReveal delay={100}>
          <div className="mb-7 mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={`
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-[13px]
                  font-semibold
                  transition-all
                  duration-200

                  ${
                    active === filter
                      ? "border-primary bg-primary text-secondery"
                      : "border-white/[.09] bg-white/[.025] text-[#aeb8c7] hover:border-primary/50 hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ==================================================
            FEATURED SKILLS
        ================================================== */}

        <div className="mb-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">

          {visibleFeatured.map((item, index) => (
            <ScrollReveal
              key={item.name}
              delay={(index % 4) * 100}
              className="h-full"
            >
              <article
                className="
                  group
                  relative
                  h-full
                  min-h-[190px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/20
                  p-6
                  shadow-[0_25px_80px_rgba(0,0,0,.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-primary/40
                "
              >
                {/* Background Glow */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-16
                    -right-16
                    h-32
                    w-32
                    rounded-full
                    bg-[#7cf2c5]/10
                    blur-sm
                    transition-transform
                    duration-300
                    group-hover:scale-125
                  "
                />

                {/* Card Content */}

                <div className="relative">

                  <i
                    className={`bxl ${item.icon} mb-7 text-4xl`}
                    aria-hidden="true"
                  />

                  <h3 className="font-['Space_Grotesk'] text-[22px] font-bold tracking-[-.03em]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#8d99aa]">
                    {item.desc}
                  </p>

                </div>
              </article>
            </ScrollReveal>
          ))}

        </div>

        {/* ==================================================
            TOOLKIT HEADER
        ================================================== */}

        <ScrollReveal>
          <div className="mb-5 flex items-end justify-between gap-4">

            <h3 className="text-2xl font-bold sm:text-xl">
              Everything in my toolkit
            </h3>

            <span className="shrink-0 text-xs text-[#697587]">
              {filtered.length}{" "}
              {filtered.length === 1 ? "skill" : "skills"}
            </span>

          </div>
        </ScrollReveal>

        {/* ==================================================
            TOOLKIT GRID
        ================================================== */}

        <div className="grid gap-3 pb-20 sm:grid-cols-2 lg:grid-cols-4">

          {filtered.map(([category, name, desc, icon], index) => (
            <ScrollReveal
              key={`${category}-${name}`}
              delay={(index % 4) * 75}
              className="h-full"
            >
              <div
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[.09]
                  bg-white/[.025]
                  p-[17px]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-[0_0_30px_rgba(23,174,217,0.08)]
                "
              >
                {/* Animated Top Border */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-primary
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Card Content */}

                <div className="flex items-center gap-3">

                  {/* Icon */}

                  <div
                    className="
                      grid
                      h-[38px]
                      w-[38px]
                      shrink-0
                      place-items-center
                      rounded-[11px]
                      bg-primary
                      text-lg
                      text-secondery
                      transition-all
                      duration-300
                      group-hover:shadow-[0_0_20px_rgba(23,174,217,0.3)]
                    "
                  >
                    <i className={icon} aria-hidden="true" />
                  </div>

                  {/* Skill Information */}

                  <div className="min-w-0">

                    <strong
                      className="
                        text-sm
                        transition-colors
                        duration-300
                        group-hover:text-primary
                      "
                    >
                      {name}
                    </strong>

                    <small className="mt-1 block text-[10px] text-[#697587]">
                      {desc}
                    </small>

                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}