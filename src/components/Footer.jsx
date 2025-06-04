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
          <span>gabrielesperilla280@gmail.com</span>
        </div>
      </div>

      <div className="col-right">
        <span>{t("footer.aboutServices")}</span>
        <p>{t("footer.aboutDescription")}</p>

        <div className="social-icons">
          <span>
            <i className="bx bxl-facebook-square"></i>
          </span>
          <span>
            <i className="bx bxl-instagram-alt"></i>
          </span>
          <span>
            <i className="bx bxl-linkedin-square"></i>
          </span>
          <span>
            <i className="bx bxl-github"></i>
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
