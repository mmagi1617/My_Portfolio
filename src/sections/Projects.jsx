import React from "react";

import {
  Layers3,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "HRMS",
      subtitle: "Human Resource Management System",
      category: "Production Application",
      description:
        "A production HRMS developed to manage employee records, biometric attendance, payroll, accounts, dashboards, and reports. Integrated eSSL biometric hardware to automate attendance capture.",
      technologies: [
        "PHP",
        "CodeIgniter 4",
        "MySQL",
        "JavaScript",
        "jQuery",
        "AJAX",
      ],
      features: [
        "eSSL biometric integration",
        "Employee management",
        "Payroll management",
        "Dashboard & reports",
      ],
    },

    {
      number: "02",
      title: "Digital Business Card",
      subtitle: "Multi-Tenant Web Application",
      category: "Web Application",
      description:
        "A multi-tenant digital business card platform that allows users to create professional profiles, manage dynamic information, and share their contact details through a personalized digital card.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML5",
        "CSS3",
        "AJAX",
      ],
      features: [
        "Multi-tenant architecture",
        "Dynamic profile management",
        "Role-based access control",
        "Contact sharing",
      ],
    },

    {
      number: "03",
      title: "Books Management System",
      subtitle: "Spring Boot REST API",
      category: "Backend Application",
      description:
        "A REST API-based book management system developed using Spring Boot and Hibernate/JPA, providing complete CRUD operations for managing book records.",
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "JPA",
        "MySQL",
        "Postman",
      ],
      features: [
        "RESTful API development",
        "CRUD operations",
        "Hibernate/JPA integration",
        "Postman API testing",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* ==================================================
          BACKGROUND GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div className="container relative z-10 mx-auto px-6">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          {/* Small Heading */}

          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-2">

              <Layers3 className="h-5 w-5 text-primary" />

              <span
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                My Work
              </span>

            </div>
          </ScrollReveal>

          {/* Main Heading */}

          <ScrollReveal delay={100}>
            <h2
              className="
                text-3xl
                font-bold
                sm:text-4xl
                md:text-5xl
              "
            >
              Featured{" "}

              <span className="text-primary glow-text">
                Projects
              </span>

            </h2>
          </ScrollReveal>

          {/* Description */}

          <ScrollReveal delay={200}>
            <p
              className="
                mt-5
                text-sm
                leading-7
                text-muted-foreground
                sm:text-base
              "
            >
              A selection of applications I've developed using Java,
              Spring Boot, PHP, React.js, and MySQL.
            </p>
          </ScrollReveal>

        </div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {projects.map((project, index) => (

            <ScrollReveal
              key={project.number}
              delay={index * 100}
              className="h-full"
            >

              <article
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  glass
                  box-shadow
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-[0_0_30px_rgba(23,174,217,0.08)]
                "
              >

                {/* ==================================================
                    TOP HOVER LINE
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
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

                {/* ==================================================
                    BACKGROUND HOVER GLOW
                ================================================== */}

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

                {/* ==================================================
                    CARD HEADER
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    items-start
                    justify-between
                    p-6
                    pb-0
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
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

                    <Layers3 className="h-5 w-5" />

                  </div>

                  {/* Number */}

                  <span
                    className="
                      text-4xl
                      font-bold
                      text-primary/10
                      transition-colors
                      duration-300
                      group-hover:text-primary/20
                    "
                  >
                    {project.number}
                  </span>

                </div>

                {/* ==================================================
                    CARD CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    flex-1
                    flex-col
                    p-6
                  "
                >

                  {/* Category */}

                  <span
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-wider
                      text-primary
                    "
                  >
                    {project.category}
                  </span>

                  {/* Title */}

                  <h3
                    className="
                      mt-3
                      text-xl
                      font-bold
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      sm:text-2xl
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle */}

                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-muted-foreground
                    "
                  >
                    {project.description}
                  </p>

                  {/* ==================================================
                      FEATURES
                  ================================================== */}

                  <div className="mt-6">

                    <p
                      className="
                        mb-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-muted-foreground
                      "
                    >
                      Key Features
                    </p>

                    <div className="space-y-2.5">

                      {project.features.map((feature) => (

                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-3
                            text-sm
                            text-muted-foreground
                          "
                        >

                          <span
                            className="
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-primary
                            "
                          />

                          <span>
                            {feature}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* ==================================================
                      TECHNOLOGIES
                  ================================================== */}

                  <div className="mt-auto pt-6">

                    <p
                      className="
                        mb-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-muted-foreground
                      "
                    >
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (

                        <span
                          key={technology}
                          className="
                            rounded-lg
                            border
                            border-border
                            bg-surface/70
                            px-2.5
                            py-1.5
                            text-xs
                            text-muted-foreground
                            transition-all
                            duration-300
                            hover:border-primary/40
                            hover:text-primary
                          "
                        >
                          {technology}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </article>

            </ScrollReveal>

          ))}

        </div>

        {/* ==================================================
            BOTTOM TEXT
        ================================================== */}

        <ScrollReveal delay={100}>

          <div className="mt-12 text-center">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-muted-foreground/40
              "
            >
              Java • Spring Boot • PHP • React.js • MySQL
            </p>

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
};

export default Projects;