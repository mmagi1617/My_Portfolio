
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import logo from "../assets/images/magi-logo.png";
import { Menu, X } from "lucide-react";

/* ==================================================
   NAVIGATION LINKS
================================================== */

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skill", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenu, setISMobileMenu] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);

  // Active navigation section
  const [activeSection, setActiveSection] = useState("home");

  /* ==================================================
     SCROLL DETECTION & ACTIVE NAVIGATION
  ================================================== */

  useEffect(() => {
    let frameId = null;

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        // Existing navbar background effect
        setisScrolled(window.scrollY > 50);

        // Position used to detect the active section
        const activationPoint =
          window.scrollY + window.innerHeight * 0.35;

        let currentSection = "home";

        // Check each section
        navLinks.forEach((link) => {
          const sectionId = link.href.replace("#", "");

          const section = document.getElementById(sectionId);

          if (!section) return;

          const sectionTop =
            section.getBoundingClientRect().top +
            window.scrollY;

          if (sectionTop <= activationPoint) {
            currentSection = sectionId;
          }
        });

        // Activate Contact at the bottom of the page
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 5;

        if (isAtBottom) {
          currentSection = "contact";
        }

        setActiveSection(currentSection);

        frameId = null;
      });
    };

    // Detect active section on initial page load
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  /* ==================================================
     HANDLE NAVIGATION CLICK
  ================================================== */

  const handleNavClick = (href) => {
    const sectionId = href.replace("#", "");

    setActiveSection(sectionId);

    // Close mobile menu after clicking a link
    setISMobileMenu(false);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        border-none
        transition-all
        duration-500
        ${
          isScrolled
            ? "glass-strong py-3"
            : "bg-transparent py-5"
        }
      `}
    >
      {/* ================= NAVBAR ================= */}

      <nav className="container mx-auto px-6 flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
        >
          <img
            src={logo}
            alt="Magi Portfolio"
            className="
              size-[45px]
              sm:size-[35px]
              md:size-[45px]
              lg:size-[50px]
              object-contain
            "
          />
        </a>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="hidden md:flex items-center gap-1">

          <div
            className="
              glass
              flex
              items-center
              justify-end
              gap-1
              rounded-full
              px-2
              py-1
            "
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");

              const isActive = activeSection === sectionId;

              return (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-primary text-surface"
                        : "text-muted-foreground hover:bg-surface hover:text-primary"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* ================= CTA BUTTON ================= */}

        <div className="hidden md:block">

          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
          >
            <Button
              className="cursor-pointer"
              size="sm"
            >
              Contact Me
            </Button>
          </a>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          aria-label={
            isMobileMenu ? "Close menu" : "Open menu"
          }
          aria-expanded={isMobileMenu}
          aria-controls="mobile-navigation"
          className="
            md:hidden
            p-2
            text-foreground
            cursor-pointer
            animate-fade-in
          "
          onClick={() =>
            setISMobileMenu((prev) => !prev)
          }
        >
          {isMobileMenu ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </nav>

      {/* ================= MOBILE MENU ================= */}

      {isMobileMenu && (
        <div
          id="mobile-navigation"
          className="
            md:hidden
            glass-strong
            animate-fade-in
          "
        >
          <div
            className="
              container
              mx-auto
              px-6
              py-6
              flex
              flex-col
              gap-2
            "
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");

              const isActive = activeSection === sectionId;

              return (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-base
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-surface-light text-primary"
                        : "text-muted-foreground hover:bg-surface hover:text-primary"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Mobile CTA */}

            <a
              href="#contact"
              onClick={() =>
                handleNavClick("#contact")
              }
              className="mt-3"
            >
              <Button
                className="w-full cursor-pointer py-3"
              >
                Contact Me
              </Button>
            </a>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;