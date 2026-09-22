import React, { useEffect, useRef, useState } from "react";

import {
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  MapPin,
  CalendarDays,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";


/* ============================================================
   TIMELINE DATA
============================================================ */

const timelineData = [
  {
    id: 1,
    type: "education",
    date: "Aug 2020 – May 2023",
    title: "B.Sc. Computer Science",
    organization:
      "Thiruvalluvar University – Govt. Arts and Science College",
    location: "Tirupattur, Tamil Nadu",
    description:
      "Completed a Bachelor of Science in Computer Science with a strong foundation in programming, object-oriented programming, databases, and computer science fundamentals.",
    skills: [
      "Computer Science",
      "OOP",
      "DBMS",
      "Programming",
    ],
    icon: GraduationCap,
  },

  {
    id: 2,
    type: "training",
    date: "Jan 2024 – Sept 2024",
    title: "Full Stack Java Developer Training",
    organization: "JSpiders",
    location: "Hebbal, Bengaluru",
    description:
      "Completed a 9-month Full Stack Java Developer training program covering Core Java, OOP, Collections, Multithreading, JDBC, Hibernate, Spring, Spring Boot, MySQL, Servlet/JSP, JavaScript, and React.js.",
    skills: [
      "Core Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "React.js",
    ],
    icon: BookOpen,
  },

  {
    id: 3,
    type: "work",
    date: "Sept 2024 – Apr 2026",
    title: "Web Developer",
    organization: "GigHz IT Solutions",
    location: "Krishnagiri, India",
    description:
      "Developed production web applications using PHP, CodeIgniter 4, MySQL, JavaScript, jQuery, and AJAX. Worked on HRMS, biometric integration, payroll, multi-tenant applications, responsive websites, and WordPress projects.",
    skills: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "JavaScript",
      "jQuery",
    ],
    icon: BriefcaseBusiness,
  },
];


/* ============================================================
   EXPERIENCE
============================================================ */

const Experience = () => {
  const timelineRef = useRef(null);

  const [activeItems, setActiveItems] = useState([]);
  const [sparkActive, setSparkActive] = useState(false);


  /* ============================================================
     TIMELINE SCROLL LOGIC
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;

      const nodes = timeline.querySelectorAll(
        "[data-timeline-node]"
      );

      /*
       * Fixed center position of viewport
       */
      const screenCenter = window.innerHeight / 2;

      const active = [];

      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();

        /*
         * Distance between timeline node
         * and center spark
         */
        const distance = Math.abs(
          rect.top + rect.height / 2 - screenCenter
        );

        /*
         * Activate when node reaches center
         */
        if (distance < 45) {
          active.push(index);
        }

        /*
         * Keep passed nodes active
         */
        if (
          rect.top + rect.height / 2 <
          screenCenter
        ) {
          active.push(index);
        }
      });

      setActiveItems([...new Set(active)]);


      /*
       * Show center spark only while
       * timeline is visible
       */

      const timelineRect =
        timeline.getBoundingClientRect();

      const timelineVisible =
        timelineRect.top < window.innerHeight &&
        timelineRect.bottom > 0;

      setSparkActive(timelineVisible);
    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);


  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
    >

      {/* ==================================================
          FIXED CENTER SPARK
      ================================================== */}

      <div
        className={`
          pointer-events-none
          fixed
          left-1/2
          top-1/2
          z-50
          hidden
          -translate-x-1/2
          -translate-y-1/2
          transition-all
          duration-500
          md:block

          ${
            sparkActive
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >

        {/* Large Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/20
            blur-2xl
            animate-pulse
          "
        />


        {/* Middle Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-10
            w-10
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/30
            blur-md
          "
        />


        {/* Core */}

        <div
          className="
            relative
            h-4
            w-4
            rounded-full
            bg-primary
            shadow-[0_0_25px_8px_rgba(23,174,217,0.55)]
          "
        />


        {/* Vertical Light */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-20
            w-px
            -translate-x-1/2
            -translate-y-1/2
            bg-gradient-to-b
            from-transparent
            via-primary
            to-transparent
            opacity-80
          "
        />

      </div>


      {/* ==================================================
          SECTION CONTENT
      ================================================== */}

      <div className="container relative z-10 mx-auto px-6">


        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mx-auto mb-20 max-w-2xl text-center">


          {/* Small Heading */}

          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-2">

              <BriefcaseBusiness
                className="h-5 w-5 text-primary"
              />

              <span
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                My Journey
              </span>

            </div>
          </ScrollReveal>


          {/* Main Heading */}

          <ScrollReveal delay={100}>

            <h2
              className="
                font-bold
                text-3xl
                sm:text-4xl
                md:text-5xl
              "
            >
              Education{" "}

              <span className="text-primary glow-text">
                & Experience
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
              From computer science fundamentals to professional
              web development, here's how my journey has evolved.
            </p>

          </ScrollReveal>

        </div>


        {/* ==================================================
            TIMELINE
        ================================================== */}

        <div
          ref={timelineRef}
          className="relative mx-auto max-w-5xl"
        >

          {/* ==================================================
              CENTER BASE LINE
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-5
              top-0
              w-px
              bg-border

              md:left-1/2
              md:-translate-x-1/2
            "
          />


          {/* ==================================================
              TIMELINE ITEMS
          ================================================== */}

          <div className="space-y-24 md:space-y-32">

            {timelineData.map((item, index) => {
              const Icon = item.icon;

              const isActive =
                activeItems.includes(index);

              return (
                <TimelineItem
                  key={item.id}
                  item={item}
                  Icon={Icon}
                  index={index}
                  isActive={isActive}
                />
              );
            })}

          </div>

        </div>


        {/* ==================================================
            END STATUS
        ================================================== */}

        <ScrollReveal delay={100}>

          <div className="mt-20 flex justify-center">

            <div className="glass rounded-full px-5 py-2.5">

              <div className="flex items-center gap-3">

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

                <span className="text-xs text-muted-foreground">
                  Currently growing & building
                </span>

              </div>

            </div>

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
};


/* ============================================================
   TIMELINE ITEM
============================================================ */

const TimelineItem = ({
  item,
  Icon,
  index,
  isActive,
}) => {

  const isLeft = index % 2 === 0;


  return (
    <div
      className="
        relative
        grid
        min-h-[260px]
        grid-cols-[40px_1fr]

        md:grid-cols-2
        md:gap-20
      "
    >

      {/* ==================================================
          MOBILE CARD
      ================================================== */}

      <div className="col-start-2 md:hidden">

        <ScrollReveal
          direction="right"
          delay={100}
        >

          <ExperienceCard
            item={item}
            Icon={Icon}
            isActive={isActive}
            align="left"
          />

        </ScrollReveal>

      </div>


      {/* ==================================================
          DESKTOP LEFT
      ================================================== */}

      <div className="hidden md:flex md:justify-end">

        {isLeft && (

          <ScrollReveal
            direction="right"
            delay={100}
            className="w-full max-w-[430px]"
          >

            <ExperienceCard
              item={item}
              Icon={Icon}
              isActive={isActive}
              align="right"
            />

          </ScrollReveal>

        )}

      </div>


      {/* ==================================================
          DESKTOP RIGHT
      ================================================== */}

      <div className="hidden md:flex md:justify-start">

        {!isLeft && (

          <ScrollReveal
            direction="left"
            delay={100}
            className="w-full max-w-[430px]"
          >

            <ExperienceCard
              item={item}
              Icon={Icon}
              isActive={isActive}
              align="left"
            />

          </ScrollReveal>

        )}

      </div>


      {/* ==================================================
          TIMELINE NODE
      ================================================== */}

      <div
        data-timeline-node
        className="
          absolute
          left-5
          top-8
          z-20
          -translate-x-1/2

          md:left-1/2
        "
      >

        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-500

            ${
              isActive
                ? `
                  border-primary
                  bg-primary
                  shadow-[0_0_30px_rgba(23,174,217,0.6)]
                `
                : `
                  border-border
                  bg-background
                `
            }
          `}
        >

          <div
            className={`
              h-2.5
              w-2.5
              rounded-full
              transition-all
              duration-500

              ${
                isActive
                  ? "bg-background"
                  : "bg-border"
              }
            `}
          />

        </div>

      </div>

    </div>
  );
};


/* ============================================================
   EXPERIENCE CARD
============================================================ */

const ExperienceCard = ({
  item,
  Icon,
  isActive,
  align,
}) => {

  return (
    <article
      className={`
        group
        relative
        w-full
        max-w-[430px]
        overflow-hidden
        rounded-2xl
        glass
        box-shadow
        p-6
        transition-all
        duration-500

        ${
          isActive
            ? `
              border-primary/40
              shadow-[0_0_30px_rgba(23,174,217,0.08)]
            `
            : `
              border-border
            `
        }
      `}
    >

      {/* ==================================================
          HOVER TOP BORDER
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
          TOP
      ================================================== */}

      <div className="relative flex items-start justify-between gap-4">

        {/* Icon */}

        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            transition-all
            duration-500

            ${
              isActive
                ? `
                  bg-primary
                  text-background
                `
                : `
                  bg-primary/10
                  text-primary
                `
            }
          `}
        >

          <Icon className="h-5 w-5" />

        </div>


        {/* Date */}

        <div
          className={`
            flex
            items-center
            gap-2
            text-xs
            text-muted-foreground

            ${
              align === "right"
                ? "flex-row-reverse"
                : ""
            }
          `}
        >

          <CalendarDays className="h-3.5 w-3.5 text-primary" />

          <span>
            {item.date}
          </span>

        </div>

      </div>


      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
        className={`
          relative
          mt-6

          ${
            align === "right"
              ? "text-right"
              : "text-left"
          }
        `}
      >

        <p className="text-xs font-medium uppercase tracking-wider text-primary">

          {item.type === "work"
            ? "Professional Experience"
            : item.type === "training"
              ? "Professional Training"
              : "Education"}

        </p>


        <h3
          className="
            mt-2
            text-xl
            font-bold
            transition-colors
            duration-300
            group-hover:text-primary
            sm:text-2xl
          "
        >
          {item.title}
        </h3>


        <p className="mt-1 text-sm font-medium text-foreground/80">
          {item.organization}
        </p>

      </div>


      {/* ==================================================
          LOCATION
      ================================================== */}

      <div
        className={`
          relative
          mt-4
          flex
          items-center
          gap-2
          text-xs
          text-muted-foreground

          ${
            align === "right"
              ? "justify-end"
              : ""
          }
        `}
      >

        <MapPin className="h-3.5 w-3.5 text-primary" />

        <span>
          {item.location}
        </span>

      </div>


      {/* ==================================================
          DESCRIPTION
      ================================================== */}

      <p
        className={`
          relative
          mt-5
          text-sm
          leading-7
          text-muted-foreground

          ${
            align === "right"
              ? "text-right"
              : "text-left"
          }
        `}
      >
        {item.description}
      </p>


      {/* ==================================================
          SKILLS
      ================================================== */}

      <div
        className={`
          relative
          mt-5
          flex
          flex-wrap
          gap-2

          ${
            align === "right"
              ? "justify-end"
              : "justify-start"
          }
        `}
      >

        {item.skills.map((skill) => (

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

    </article>
  );
};


export default Experience;