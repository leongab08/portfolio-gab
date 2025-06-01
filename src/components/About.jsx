import fotoPerifl from "assets/fotoPerfil.jpeg";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="about-box">
        <div className="about-info">
          <h1>
            <span>{t("about.title")}</span>
          </h1>
          <p>{t("about.description")}</p>
        </div>

        <h2>
          <span>{t("about.skills")}</span>
        </h2>

        <div className="skills">
          <ul>
            <li>
              <span>
                <i className="bx bx-chevron-right"></i> HTML
              </span>
            </li>
            <li>
              <span>
                <i className="bx bx-chevron-right"></i> CSS
              </span>
            </li>
            <li>
              <span>
                <i className="bx bx-chevron-right"></i> JavaScript
              </span>
            </li>
          </ul>

          <ul>
            <li>
              <span>
                <i className="bx bx-chevron-right"></i> C++
              </span>
            </li>
            <li>
              <span>
                <i className="bx bx-chevron-right"></i> Python
              </span>
            </li>
            <li>
              <span>
                <i className="bx bx-chevron-right"></i> My Sql
              </span>
            </li>
          </ul>
        </div>
      </div>

      <img src={fotoPerifl} alt="Profile" />
    </section>
  );
}
