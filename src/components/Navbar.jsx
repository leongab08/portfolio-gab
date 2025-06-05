import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "section-projects",
        "section-stack",
        "services",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const handleLinkClick = () => {
    if (isMenuOpen) {
      closeMenu();
    }
  };

  // Cerrar menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Cerrar menú al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav>
      {" "}
      <a href="#" className="logo" onClick={handleLinkClick}>
        <span className="hidden md:inline lg:text-2xl xl:text-3xl">
          Gabriel Esperilla
        </span>
        <span className="md:hidden">Gabriel Esperilla</span>
      </a>
      <ul className={`lists ${isMenuOpen ? "active" : ""}`}>
        <a
          href="#home"
          onClick={handleLinkClick}
          className={activeSection === "home" ? "active" : ""}
        >
          {t("nav.home")}
        </a>
        <a
          href="#about"
          onClick={handleLinkClick}
          className={activeSection === "about" ? "active" : ""}
        >
          {t("nav.about")}
        </a>
        <a
          href="#section-projects"
          onClick={handleLinkClick}
          className={activeSection === "section-projects" ? "active" : ""}
        >
          {t("nav.projects")}
        </a>
        <a
          href="#section-stack"
          onClick={handleLinkClick}
          className={activeSection === "section-stack" ? "active" : ""}
        >
          {t("nav.stack")}
        </a>
        <a
          href="#services"
          onClick={handleLinkClick}
          className={activeSection === "services" ? "active" : ""}
        >
          {t("nav.services")}
        </a>
        <a
          href="#contact"
          onClick={handleLinkClick}
          className={activeSection === "contact" ? "active" : ""}
        >
          {t("nav.contact")}
        </a>
      </ul>
      <div className="nav-right">
        <div className="language-switcher">
          <button
            onClick={() => {
              const newLang = i18n.language === "en" ? "es" : "en";
              i18n.changeLanguage(newLang);
            }}
            className="lang-btn"
            aria-label="Change language"
          >
            {i18n.language === "en" ? "ES" : "EN"}
          </button>
        </div>

        <a
          href="#contact"
          className="btn btn-contact hidden md:inline-flex"
          onClick={handleLinkClick}
        >
          {t("nav.contactMe")}
        </a>

        <a
          href="https://drive.google.com/file/d/1ON4mJn6ObHQFAbdl7Y5b_OxwdtvoyiX1/view?usp=sharing"
          className="btn cv-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden lg:inline">{t("nav.viewCV")}</span>
          <span className="lg:hidden">{t("nav.cv")}</span>
        </a>

        <button
          className="bx bx-menu md:hidden"
          id="menu"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle menu"
        ></button>
      </div>
    </nav>
  );
}
