import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaAward, FaCalendarAlt, FaLink } from "react-icons/fa";

export default function Certifications() {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <h1 className="text-5xl text-center mb-6 md:text-7xl xl:mb-8">
        <span>{t("services.title")}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {" "}
        {/* Certification Card 1 */}
        <a
          href="https://www.coursera.org/account/accomplishments/verify/NIU2JRX1LP43"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#1f1f22] h-full border-2 border-gray-border rounded-lg p-6 transition-all duration-300 hover:border-gray-400 hover:shadow-lg">
            {" "}
            {/*Card1*/}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="text-blue-600 text-2xl">
                  <FaAward />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t("services.cards.javascript.title")}
                </h3>
              </div>
              <span className="bg-gradient-to-r from-[#fc3421] to-[#3ec5ff] px-3 py-1 rounded-full text-xs text-white">
                2024
              </span>
            </div>
            <div className="mt-4">
              {/* Imagen de certificación */}
              <div className="mb-4 overflow-hidden rounded-lg border border-gray-700">
                <img
                  src="javaScript-Meta-Certification.jpeg"
                  alt="Ceritification Meta JavaScript"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {t("services.cards.javascript.description")}
              </p>
              <div className="flex items-center text-gray-400 text-xs">
                <FaCalendarAlt className="mr-1" />
                <span>{t("services.cards.javascript.date")}</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/NIU2JRX1LP43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs border border-gray-500 text-gray-300 rounded-md px-3 py-1 hover:bg-white hover:text-[#1f1f22] transition-all"
                >
                  <FaLink />{" "}
                  <span>{t("services.cards.javascript.viewCredential")}</span>
                </a>
              </div>
            </div>
          </div>{" "}
        </a>
        {/* Certification Card 2 */}
        <a
          href="https://coursera.org/share/2164f39963b50ed52f21f26d7eafba67"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#1f1f22] border-2 h-full border-gray-border rounded-lg p-6 transition-all duration-300 hover:border-gray-400 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="text-blue-600 text-2xl">
                  <FaAward />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t("services.cards.frontend.title")}
                </h3>
              </div>
              <span className="bg-gradient-to-r from-[#fc3421] to-[#3ec5ff] px-3 py-1 rounded-full text-xs text-white">
                2023
              </span>
            </div>
            <div className="mt-4">
              {/* Imagen de certificación */}
              <div className="mb-4 overflow-hidden rounded-lg border border-gray-700">
                <img
                  src="/META-introduction-1.jpeg"
                  alt="Front-End Web Development Certification Meta"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {t("services.cards.frontend.description")}
              </p>
              <div className="flex items-center text-gray-400 text-xs">
                <FaCalendarAlt className="mr-1" />
                <span>{t("services.cards.frontend.date")}</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://coursera.org/share/2164f39963b50ed52f21f26d7eafba67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs border border-gray-500 text-gray-300 rounded-md px-3 py-1 hover:bg-white hover:text-[#1f1f22] transition-all"
                >
                  <FaLink />{" "}
                  <span>{t("services.cards.frontend.viewCredential")}</span>
                </a>
              </div>
            </div>
          </div>
        </a>
        {/* Certification Card 3 */}
        <a
          href="https://freecodecamp.org/certification/fcc4fb1c212-9362-4b70-b8f1-46b1cf36868b/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#1f1f22] h-full border-2 border-gray-border rounded-lg p-6 transition-all duration-300 hover:border-gray-400 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="text-blue-500 text-2xl">
                  <FaAward />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t("services.cards.responsive.title")}
                </h3>
              </div>
              <span className="bg-gradient-to-r from-[#fc3421] to-[#3ec5ff] px-3 py-1 rounded-full text-xs text-white">
                2024
              </span>
            </div>
            <div className="mt-4">
              {/* Imagen de certificación */}
              <div className="mb-4 overflow-hidden rounded-lg border border-gray-700">
                <img
                  src="Responsive-web-certification.png"
                  alt="Responsive Web Design Certification freeCodeCamp"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {t("services.cards.responsive.description")}
              </p>
              <div className="flex items-center text-gray-400 text-xs">
                <FaCalendarAlt className="mr-1" />
                <span>{t("services.cards.responsive.date")}</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://freecodecamp.org/certification/fcc4fb1c212-9362-4b70-b8f1-46b1cf36868b/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs border border-gray-500 text-gray-300 rounded-md px-3 py-1 hover:bg-white hover:text-[#1f1f22] transition-all"
                >
                  <FaLink />{" "}
                  <span>{t("services.cards.responsive.viewCredential")}</span>
                </a>
              </div>
            </div>
          </div>{" "}
        </a>
        {/* Certification Card 4 */}
        <a
          href="https://freecodecamp.org/certification/fcc4fb1c212-9362-4b70-b8f1-46b1cf36868b/javascript-algorithms-and-data-structures-v8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#1f1f22] border-2 h-full border-gray-border rounded-lg p-6 transition-all duration-300 hover:border-gray-400 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="text-blue-500 text-2xl">
                  <FaAward />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t("services.cards.algorithms.title")}
                </h3>
              </div>
              <span className="bg-gradient-to-r from-[#fc3421] to-[#3ec5ff] px-3 py-1 rounded-full text-xs text-white">
                2024
              </span>
            </div>
            <div className="mt-4">
              {/* Imagen de certificación */}
              <div className="mb-4 overflow-hidden rounded-lg border border-gray-700">
                <img
                  src="Javascript-dataStructurers-certification.png"
                  alt="JavaScript Algorithms and Data Structures Certification freeCodeCamp"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {t("services.cards.algorithms.description")}
              </p>
              <div className="flex items-center text-gray-400 text-xs">
                <FaCalendarAlt className="mr-1" />
                <span>{t("services.cards.algorithms.date")}</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://freecodecamp.org/certification/fcc4fb1c212-9362-4b70-b8f1-46b1cf36868b/javascript-algorithms-and-data-structures-v8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs border border-gray-500 text-gray-300 rounded-md px-3 py-1 hover:bg-white hover:text-[#1f1f22] transition-all"
                >
                  <FaLink />{" "}
                  <span>{t("services.cards.algorithms.viewCredential")}</span>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
