import React from "react";

import {
  Code2,
  MonitorSmartphone,
  ShoppingCart,
  PanelsTopLeft,
  DatabaseZap,
  Wrench,
  ArrowUpRight,
  Sparkles,
  Send,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

/* ============================================================
   SERVICES DATA
============================================================ */

const servicesData = [
  {
    id: 1,
    number: "01",
    title: "Website Design & Development",
    description:
      "I create modern, responsive, and user-friendly websites that represent your brand and deliver seamless experiences across desktop, tablet, and mobile devices.",
    icon: MonitorSmartphone,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    id: 2,
    number: "02",
    title: "Full Stack Web Development",
    description:
      "I build custom web applications with intuitive user interfaces, powerful backend systems, and efficient database management tailored to your business requirements.",
    icon: Code2,
    skills: ["Java", "Spring Boot", "PHP", "MySQL"],
  },
  {
    id: 3,
    number: "03",
    title: "E-Commerce Development",
    description:
      "I develop customized online stores that help businesses showcase products, manage orders, and provide customers with a smooth and convenient shopping experience.",
    icon: ShoppingCart,
    skills: ["WooCommerce", "WordPress", "PHP", "MySQL"],
  },
  {
    id: 4,
    number: "04",
    title: "WordPress Development",
    description:
      "I develop and customize WordPress websites with attractive layouts, flexible functionality, and easy content management to support your business goals.",
    icon: PanelsTopLeft,
    skills: ["WordPress", "Divi", "Elementor", "Custom CSS"],
  },
  {
    id: 5,
    number: "05",
    title: "Backend & API Development",
    description:
      "I develop REST APIs, integrate third-party services, and build reliable backend systems that connect applications and automate business processes.",
    icon: DatabaseZap,
    skills: ["Spring Boot", "CodeIgniter 4", "REST APIs", "MySQL"],
  },
  {
    id: 6,
    number: "06",
    title: "Website Maintenance & Optimization",
    description:
      "I help businesses keep their websites updated, responsive, and running smoothly through regular maintenance, bug fixing, and performance improvements.",
    icon: Wrench,
    skills: ["Bug Fixing", "Performance", "Technical SEO", "WordPress"],
  },
];

/* ============================================================
   SERVICES SECTION
============================================================ */

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* ==================================================
          BACKGROUND GLOW
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-80
          w-80
          rounded-full
          bg-primary/5
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-primary/5
          blur-[120px]
        "
      />

      {/* ==================================================
          SECTION CONTENT
      ================================================== */}

      <div className="container relative z-10 mx-auto px-6">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">

          {/* Small Heading */}

          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />

              <span
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                What I Offer
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
              My{" "}
              <span className="text-primary glow-text">
                Services
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
              From professional websites to powerful web
              applications, I help turn ideas into modern,
              functional, and reliable digital solutions.
            </p>
          </ScrollReveal>

        </div>

        {/* ==================================================
            SERVICES GRID
        ================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {servicesData.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={(index % 3) * 100}
              className="h-full"
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <ScrollReveal
          delay={150}
          className="mx-auto max-w-6xl"
        >
          <div
            className="
              glass
              relative
              mt-16
              overflow-hidden
              rounded-2xl
              p-7
              sm:p-10
              lg:mt-20
              lg:p-12
            "
          >
            {/* CTA Background Glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-primary/10
                blur-[90px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-start
                justify-between
                gap-8
                lg:flex-row
                lg:items-center
              "
            >
              {/* ==================================================
                  CTA CONTENT
              ================================================== */}

              <div className="max-w-2xl">

                {/* Availability */}

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-2
                    text-primary
                  "
                >
                  <span className="relative flex h-2.5 w-2.5">

                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-primary
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-primary
                      "
                    />

                  </span>

                  <span
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    Have a Project in Mind?
                  </span>

                </div>

                {/* CTA Heading */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Let's build something{" "}

                  <span className="text-primary glow-text">
                    amazing together.
                  </span>
                </h3>

                {/* CTA Description */}

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-muted-foreground
                    sm:text-base
                  "
                >
                  Have an idea, a business requirement, or an
                  existing website that needs improvement? Let's
                  discuss your project and bring your vision to life.
                </p>

              </div>

              {/* ==================================================
                  CTA BUTTON
              ================================================== */}

              <a
                href="#contact"
                className="
                  btn-hover
                  group
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-primary
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-background
                  transition-all
                  duration-300
                  hover:shadow-[0_0_30px_rgba(23,174,217,0.3)]
                "
              >
                <Send className="h-4 w-4" />

                Start a Project

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

/* ============================================================
   SERVICE CARD
============================================================ */

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
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
        p-6
        transition-all
        duration-500
        hover:border-primary/40
        hover:shadow-[0_0_30px_rgba(23,174,217,0.08)]
        sm:p-7
      "
    >

      {/* ==================================================
          TOP ACCENT LINE
      ================================================== */}

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

      {/* ==================================================
          CARD TOP
      ================================================== */}

      <div className="flex items-start justify-between gap-4">

        {/* Icon */}

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
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
          <Icon className="h-5 w-5" />
        </div>

        {/* Number */}

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
          / {service.number}
        </span>

      </div>

      {/* ==================================================
          CARD CONTENT
      ================================================== */}

      <div className="mt-7 flex-1">

        <h3
          className="
            text-xl
            font-bold
            leading-snug
            transition-colors
            duration-300
            group-hover:text-primary
            sm:text-[22px]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-muted-foreground
          "
        >
          {service.description}
        </p>

      </div>

      {/* ==================================================
          SKILLS
      ================================================== */}

      <div className="mt-7 flex flex-wrap gap-2">

        {service.skills.map((skill) => (
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

      {/* ==================================================
          CARD FOOTER
      ================================================== */}

      <div
        className="
          mt-7
          border-t
          border-border/70
          pt-5
        "
      >
        <a
          href="#contact"
          aria-label={`Discuss ${service.title}`}
          className="
            group/link
            flex
            items-center
            justify-between
            text-sm
            font-medium
            text-foreground/80
            transition-colors
            duration-300
            hover:text-primary
          "
        >
          <span>
            Let's Discuss
          </span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-surface/70
              transition-all
              duration-300
              group-hover/link:border-primary
              group-hover/link:bg-primary
              group-hover/link:text-background
            "
          >
            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
            />
          </span>
        </a>
      </div>

    </article>
  );
};

export default Services;