import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect } from "react";

export default function Contact() {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        fetch("https://formspree.io/f/xldndkbz", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              alert("Mensaje enviado con éxito. Gracias por contactarme! \n" +
                "En breve recibiras un correo de mi parte.");
              form.reset();
            } else {
              alert("Ocurrió un error al enviar el mensaje");
            }
          })
          .catch((error) => {
            alert("Error al enviar: " + error.message);
          });
      });
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <h1 className="header">
        <span>{t("contact.title")}</span>
      </h1>

      <form id="contact-form">
        <div className="input-box">
          <span>{t("contact.fullName")}</span>
          <input
            type="text"
            name="fullName"
            required
            placeholder={t("contact.placeholders.fullName")}
            className="bg-white"
          />
        </div>

        <div className="input-box">
          <span>{t("contact.email")}</span>
          <input
            type="text"
            name="email"
            required
            placeholder={t("contact.placeholders.email")}
            className="bg-white"
          />
        </div>

        <div className="input-box">
          <span>{t("contact.message")}</span>
          <input
            type="text"
            name="message"
            required={false}
            placeholder={t("contact.placeholders.message")}
            className="bg-white"
          />
        </div>

        <button type="submit" className="btn">
          {t("contact.submit")}
        </button>
      </form>
    </section>
  );
}
