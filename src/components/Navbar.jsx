import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Exact section IDs in order
    const navItems = [
      { id: "about", hash: "about", key: "about" },
      { id: "projects", fallbackId: "work", hash: "projects", key: "projects" },
      { id: "skills", fallbackId: "tech-stack", hash: "tech-stack", key: "skills" },
      { id: "experience", hash: "experience", key: "experience" },
      { id: "education", hash: "education", key: "education" },
      { id: "certificates", fallbackId: "credentials", hash: "certificates", key: "certificates" },
      { id: "contact", hash: "contact", key: "contact" },
    ];

    const updateActiveSection = () => {
      // 1. Agar top par ho (Hero area)
      if (window.scrollY < 160) {
        setActiveSection(null);
        return;
      }

      // 2. Agar bilkul bottom par ho
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // 3. Dominant Viewport Detection
      let activeKey = null;
      let minDistance = Infinity;

      navItems.forEach((item) => {
        const el =
          document.getElementById(item.id) ||
          (item.fallbackId ? document.getElementById(item.fallbackId) : null);

        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 140) {
            activeKey = item.key;
          } else if (rect.top > 0 && rect.top < minDistance && !activeKey) {
            minDistance = rect.top;
            activeKey = item.key;
          }
        }
      });

      if (activeKey) {
        setActiveSection(activeKey);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (event, targetId, fallbackId, hashName, sectionKey) => {
    event.preventDefault();
    setActiveSection(sectionKey);

    const targetElement =
      document.getElementById(targetId) ||
      (fallbackId ? document.getElementById(fallbackId) : null);

    if (targetElement) {
      const yOffset = -82;
      const y =
        targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    window.history.replaceState(null, "", `#${hashName}`);
  };

  const navLinkClass = (sectionKey) =>
    `px-3 py-2 rounded-md transition-all duration-200 cursor-pointer ${
      activeSection === sectionKey
        ? "bg-neutral-900/70 text-white -translate-y-0.5"
        : "text-neutral-400 hover:bg-neutral-900/70 hover:text-white hover:-translate-y-0.5"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0a0a0c]/80 border-b border-neutral-900 shadow-lg shadow-black/10">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 h-[82px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection(null);
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", " ");
          }}
          className="font-mono font-bold text-base tracking-widest text-white hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-200"
        >
          VIVEK<span className="text-blue-500">.DEV</span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 text-sm font-mono uppercase tracking-wider text-neutral-400">
          <a
            href="#about"
            onClick={(event) =>
              handleNavClick(event, "about", null, "about", "about")
            }
            className={navLinkClass("about")}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(event) =>
              handleNavClick(event, "projects", "work", "projects", "projects")
            }
            className={navLinkClass("projects")}
          >
            Projects
          </a>
          <a
            href="#tech-stack"
            onClick={(event) =>
              handleNavClick(event, "tech-stack", "skills", "tech-stack", "skills")
            }
            className={navLinkClass("skills")}
          >
            Tech Stack
          </a>
          <a
            href="#experience"
            onClick={(event) =>
              handleNavClick(event, "experience", null, "experience", "experience")
            }
            className={navLinkClass("experience")}
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={(event) =>
              handleNavClick(event, "education", null, "education", "education")
            }
            className={navLinkClass("education")}
          >
            Education
          </a>
          <a
            href="#certificates"
            onClick={(event) =>
              handleNavClick(event, "certificates", "credentials", "certificates", "certificates")
            }
            className={navLinkClass("certificates")}
          >
            Certificates
          </a>
          <a
            href="#contact"
            onClick={(event) =>
              handleNavClick(event, "contact", null, "contact", "contact")
            }
            className={navLinkClass("contact")}
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button */}
        <a
          href="#contact"
          onClick={(event) =>
            handleNavClick(event, "contact", null, "contact", "contact")
          }
          className={`text-sm font-mono px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
            activeSection === "contact"
              ? "border-blue-500 bg-blue-500/20 text-white -translate-y-0.5"
              : "border-neutral-700 text-neutral-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white hover:-translate-y-0.5"
          }`}
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}