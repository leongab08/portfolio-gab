import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <h1 className="header">
        <span>{t("contact.title")}</span>
      </h1>

      <form action="#">
        <div className="input-box">
          <span>{t("contact.fullName")}</span>
          <input
            type="text"
            placeholder={t("contact.placeholders.fullName")}
            className="bg-white"
          />
        </div>

        <div className="input-box">
          <span>{t("contact.email")}</span>
          <input
            type="text"
            placeholder={t("contact.placeholders.email")}
            className="bg-white"
          />
        </div>

        <div className="input-box">
          <span>{t("contact.message")}</span>
          <input
            type="text"
            placeholder={t("contact.placeholders.message")}
            className="bg-white"
          />
        </div>

        <div className="btn">{t("contact.submit")}</div>
      </form>
    </section>
  );
}
