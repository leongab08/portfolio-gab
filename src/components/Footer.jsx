import reactIcon from "assets/icons/React.png";
import tailwindIcon from "assets/icons/Tailwind_CSS1.png";
import viteIcon from "assets/icons/Vite.js.png";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="col-left">
        <div className="col-box">
          <span>
            <i className="bx bxs-location-plus"></i>
          </span>
          <span>{t("footer.location")}</span>
        </div>

        <div className="col-box">
          <span>
            <i className="bx bxs-phone"></i>
          </span>
          <span>+52 771 349 4640</span>
        </div>

        <div className="col-box">
          <span>
            <i className="bx bxs-envelope"></i>
          </span>
          <a href="mailto:gabrielesperilla280@gmail.com">
          <span>gabrielesperilla280@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="col-right">
        <span>{t("footer.aboutServices")}</span>
        <p>{t("footer.aboutDescription")}</p>

        <div className="social-icons">
          <span>
            <a href="mailto:gabrielesperilla280@gmail.com">
              <i className="bx bx-envelope"></i>
            </a>
          </span>
          <span>
            <a
              href="https://wa.me/527713494640"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/gabriel-esperilla-34a490218/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/leongab08" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
            </a>
          </span>
        </div>
        <div>
          <h6 className="bg-gradient-to-r from-[#fc3421] to-[#3ec5ff] text-transparent bg-clip-text mb-2">
            {t("footer.portfolioStack")}
          </h6>
          <ol id="portfolio-tecnologies" className="flex gap-4">
            <img src={reactIcon} className="w-12 h-12" alt="" />
            <img src={tailwindIcon} className="w-12 h-12" alt="" />
            <img src={viteIcon} className="w-12 h-12" alt="" />
          </ol>
        </div>
      </div>
    </footer>
  );
}
