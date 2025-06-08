import fotoPerifl from "assets/fotoPerfil.jpeg";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Home() {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="home"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <img src={fotoPerifl} alt="Picture of me" />

      <div className="info-box">
        <h1>
          <span>{t("home.hello")}</span>
        </h1>
        <h3>
          <span>{t("home.role")} </span>
          {t("home.from")}
        </h3>
        <p>{t("home.description")}</p>
      </div>

      <div className="btn-box">
        <a href="#contact">
        <div className="btn">{t("home.hire")}</div>
        </a>
        <a href="#contact">
          {" "}
          <div className="btn">{t("home.contactMe")}</div>
        </a>
      </div>
    </section>
  );
}
