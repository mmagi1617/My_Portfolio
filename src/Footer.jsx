import React from "react";
import {
   
    Mail,
    ArrowUp,
    Heart,
    Code2,
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navigation = [
        {
            name: "Home",
            href: "#home",
        },
        {
            name: "About",
            href: "#about",
        },
        {
            name: "Skills",
            href: "#skill",
        },
        {
            name: "Experience",
            href: "#experience",
        },
        {
            name: "Projects",
            href: "#projects",
        },
        {
            name: "Contact",
            href: "#contact",
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-border">

            {/* ==================================================
          TOP GLOW
      ================================================== */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(23,174,217,0.6)]" />

            {/* Background Glow */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

            <div className="container relative z-10 mx-auto px-6">

                {/* ==================================================
            MAIN FOOTER
        ================================================== */}

                <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_0.8fr]">

                    {/* ================= BRAND ================= */}

                    <div>

                        <a
                            href="#home"
                            className="group inline-flex items-center gap-3"
                        >

                            <div
                                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-background
                  group-hover:shadow-[0_0_20px_rgba(23,174,217,0.35)]
                "
                            >
                                <Code2 className="h-5 w-5" />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold">
                                    Magendiran<span className="text-primary">.</span>
                                </h3>

                                <p className="text-xs text-muted-foreground">
                                    Full Stack Developer
                                </p>
                            </div>

                        </a>

                        <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
                            I build practical, scalable web applications that solve
                            real-world business problems using Java, Spring Boot, PHP,
                            React.js, and MySQL.
                        </p>

                        {/* Social Links */}

                        <div className="mt-6 flex items-center gap-3">

                            <a
                                href="https://github.com/mmagi1617"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="
                  glass
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:bg-primary
                  hover:text-background
                  hover:-translate-y-1
                "
                            >
                                <i className="bxl bx-github"></i>
                            </a>

                            <a
                                href="linkedin.com/in/magendiran-m-48b8a0274"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="
                  glass
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:bg-primary
                  hover:text-background
                  hover:-translate-y-1
                "
                            >
                                <i className="bxl bx-linkedin"></i>
                            </a>

                            <a
                                href="mailto:mmagi1617@gmail.com"
                                aria-label="Email"
                                className="
                  glass
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:bg-primary
                  hover:text-background
                  hover:-translate-y-1
                "
                            >
                                <Mail className="h-4 w-4" />
                            </a>

                        </div>

                    </div>

                    {/* ================= NAVIGATION ================= */}

                    <div>

                        <h4 className="text-sm font-semibold">
                            Navigation
                        </h4>

                        <div className="mt-5 flex flex-col gap-3">

                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-muted-foreground
                    transition-colors
                    hover:text-primary
                  "
                                >
                                    <span
                                        className="
                      h-px
                      w-0
                      bg-primary
                      transition-all
                      duration-300
                      group-hover:w-4
                    "
                                    />

                                    {item.name}
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* ================= CONTACT ================= */}

                    <div>

                        <h4 className="text-sm font-semibold">
                            Let's Connect
                        </h4>

                        <p className="mt-5 text-sm leading-6 text-muted-foreground">
                            Have a project or opportunity in mind?
                            Let's build something useful together.
                        </p>

                        <a
                            href="mailto:mmagi1617@gmail.com"
                            className="
                mt-5
                flex
                items-center
                gap-3
                text-sm
                text-muted-foreground
                transition-colors
                hover:text-primary
              "
                        >
                            <Mail className="h-4 w-4 text-primary" />

                            <span className="break-all">
                                mmagi1617@gmail.com
                            </span>
                        </a>

                        {/* Availability */}

                        <div className="mt-5 flex items-center gap-3">

                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />

                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                            </span>

                            <span className="text-xs text-muted-foreground">
                                Open to opportunities
                            </span>

                        </div>

                    </div>

                </div>

                {/* ==================================================
            BOTTOM
        ================================================== */}

                <div className="border-t border-border">

                    <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

                        {/* Copyright */}

                        <p className="text-xs text-muted-foreground">
                            © {currentYear} Magendiran M. All rights reserved.
                        </p>

                        {/* Made With */}

                        

                        {/* Back To Top */}

                        <button
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="
                group
                flex
                items-center
                gap-2
                text-xs
                text-muted-foreground
                transition-colors
                hover:text-primary
              "
                        >
                            Back to top

                            <span
                                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border
                  transition-all
                  duration-300
                  group-hover:border-primary
                  group-hover:bg-primary
                  group-hover:text-background
                "
                            >
                                <ArrowUp className="h-4 w-4" />
                            </span>

                        </button>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;