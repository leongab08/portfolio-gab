import aiImage from "assets/ai-engineer.jpg";
import webDesign from "assets/web-design.jpg";
import webDevelop from "assets/web-development.jpg";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <h1 className="header">
        <span>{t("services.title")}</span>
      </h1>

      <div className="services-container">
        <div className="box">
          <h1>
            <span>{t("services.webDev.title")}</span>
          </h1>

          <p>{t("services.webDev.description")}</p>

          <img
            height="200px"
            width="200"
            src={webDevelop}
            alt="Web Development"
          />
        </div>

        <div className="box">
          <h1>
            <span>{t("services.webDesign.title")}</span>
          </h1>

          <p>{t("services.webDesign.description")}</p>

          <img width="200" src={webDesign} alt="Web Design" />
        </div>

        <div className="box">
          <h1>
            <span>{t("services.ai.title")}</span>
          </h1>

          <p>{t("services.ai.description")}</p>

          <img width="200" src={aiImage} alt="AI Engineering" />
        </div>
      </div>
    </section>
  );
}
