import AwaqImg from "assets/awaq-project.png";
import GptImg from "assets/GPT-project.png";
import scikitlearnImg from "assets/scikit-learn-project.png";
import iotImage from "assets/project-IOT.png";
import { GoDotFill } from "react-icons/go";
import { useState, useEffect } from "react";

export default function Projects() {
  const [isXl, setIsXl] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="section-projects"
      className="text-white min-h-screen xl:relative bg-primary-background xl:gap-[300px] xl:flex pt-[120px] py-[10%] px-[6%] xl:px-[2%]"
    >
      <div className="xl:sticky xl:top-30 h-fit">
        <h4 className="text-5xl mb-4 text-center whitespace-nowrap xl:mb-5">
          <span>My projects</span>
        </h4>
      </div>

      <div
        className="flex flex-col gap-y-3 xl:flex xl:flex-col xl:gap-3 md:grid md:grid-rows-[repeat(3,auto)] md:grid-cols-2 md:gap-y-2 md:gap-x-3"
        id="projects-div"
      >
        <div
          className="border-[3px] xl:w-full border-gray-border rounded-md py-[1rem] xl:py-1 px-[0.7rem] transition-all duration-300 hover:shadow-sm shadow-gray-800 xl:flex hover:bg-[#1f1f22] gap-3 xl:relative"
          id="card-project"
        >
          <img
            src={AwaqImg}
            className="xl:object-contain xl:w-4/10 xl:h-[200px] "
            alt=""
          />
          <div className="flex flex-col xl:w-full">
            <p className="text-sm text-zinc-400 mt-3 items-center flex gap-0.5 2xl:mt-2 xl:relative xl:top-2 ">
              2025 <GoDotFill className="inline mb-[2px]" /> AWAQ ONGD{" "}
              <GoDotFill className="inline mb-[2px]" /> TeamWork{" "}
              <GoDotFill className="inline mb-[2px]" /> Scrum
            </p>
            <h5 className="text-2xl font-semibold text-white 2xl:mt-2 mt-1 xl:mt-5">
              AWAQ EcoGuardians Home Page
            </h5>
            <div
              className="flex gap-2 w-full xl:text-sm mt-2"
              id="project-stack"
            >
              {isXl && (
                <a href="" target="blank">
                  <p className="py-1 px-2 border-2 hidden xl:block border-white rounded-2xl hover:bg-white hover:text-primary-background transition-all duration-300 cursor-pointer">
                    View on Github
                  </p>
                </a>
              )}

              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl ">
                React
              </span>
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl ">
                Tailwind
              </span>
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl ">
                Flask (Python)
              </span>
            </div>
            <p id="project-description" className="mt-3 xl:text-sm">
              Sitio web desarrollado en colaboración con la ONG colombiana AWAQ,
              quienes nos pidieron integrar su videojuego en WebGL. El proyecto
              combina diseño responsivo con tecnologías modernas como React y
              Tailwind CSS.
            </p>

            <div
              id="view project"
              className="flex justify-between mt-4 xl:absolute top-0 right-1"
            >
              <button className="bg-white text-primary-background py-1 px-2 rounded-md hover:bg-transparent border-2 border-white hover:text-white transition-all duration-300 cursor-pointer xl:mr-3">
                {" "}
                view live
              </button>
              <button className=" xl:hidden border-2 py-1 px-2 rounded-md hover:bg-white hover:text-primary-background transition-all duration-300 cursor-pointer">
                {" "}
                view code{" "}
              </button>
            </div>
          </div>
        </div>
        <div
          className="border-[3px] xl:w-full border-gray-border rounded-md py-[1rem] xl:py-1 px-[0.7rem] transition-all duration-300 hover:shadow-sm shadow-gray-800 xl:flex hover:bg-[#1f1f22] gap-3 xl:relative"
          id="card-project"
        >
          <img
            src={GptImg}
            className="xl:object-contain xl:w-4/10 xl:h-[200px] "
            alt=""
          />
          <div className="flex flex-col xl:w-full">
            <p className="text-sm text-zinc-400 mt-3 items-center flex gap-0.5 2xl:mt-2 xl:relative xl:top-2 ">
              2024 <GoDotFill className="inline mb-[2px]" /> OpenAi API
            </p>
            <h5 className="text-2xl font-semibold text-white 2xl:mt-2 mt-1 xl:mt-5">
              GPT Clone
            </h5>
            <div
              className="flex gap-2 w-full xl:text-sm mt-2"
              id="project-stack"
            >
              {isXl && (
                <a href="" target="blank">
                  <p className="py-1 px-2 border-2 hidden xl:block border-white rounded-2xl hover:bg-white hover:text-primary-background transition-all duration-300 cursor-pointer">
                    View on Github
                  </p>
                </a>
              )}

              
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl ">
                React
              </span>
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl ">
                Tailwind
              </span>
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl ">
                JavaScript
              </span>
            </div>
            <p id="project-description" className="mt-3 xl:text-sm">
            Clon de ChatGPT desarrollado con React y Tailwind CSS, que utiliza la API de OpenAI para generar respuestas en tiempo real, integrando una interfaz responsiva y moderna. Ideal para integrar el uso de LLMs en aplicaciones web
            </p>

            <div
              id="view project"
              className="flex justify-between mt-4 xl:absolute top-0 right-1"
            >
              <button className="bg-white text-primary-background py-1 px-2 rounded-md hover:bg-transparent border-2 border-white hover:text-white transition-all duration-300 cursor-pointer xl:mr-3">
                {" "}
                view live
              </button>
              <button className=" xl:hidden border-2 py-1 px-2 rounded-md hover:bg-white hover:text-primary-background transition-all duration-300 cursor-pointer">
                {" "}
                view code{" "}
              </button>
            </div>
          </div>
        </div>
        <div
          className="border-[3px] xl:w-full border-gray-border rounded-md py-[1rem] xl:py-1 px-[0.7rem] transition-all duration-300 hover:shadow-sm shadow-gray-800 xl:flex hover:bg-[#1f1f22] gap-3 xl:relative"
          id="card-project"
        >
          <img
            src={scikitlearnImg}
            className="xl:object-contain xl:w-4/10 xl:relative xl:top-2 xl:h-[200px] "
            alt=""
          />
          <div className="flex flex-col xl:w-full">
            <p className="text-sm text-zinc-400 mt-3 items-center flex gap-0.5 2xl:mt-2 xl:relative xl:top-2 ">
              2023 <GoDotFill className="inline mb-[2px]" /> Scikit-Learn <GoDotFill className="inline mb-[2px]" /> Python
            </p>
            <h5 className="text-2xl font-semibold text-white 2xl:mt-2 mt-1 xl:mt-5">
              Predictor de Gastos scikit-learn
            </h5>
            <div
              className="flex gap-2 w-full xl:text-sm mt-2"
              id="project-stack"
            >
              {isXl && (
                <a href="" target="blank">
                  <p className="py-1 px-2 border-2 hidden xl:block border-white rounded-2xl hover:bg-white hover:text-primary-background transition-all duration-300 cursor-pointer">
                    View on Github
                  </p>
                </a>
              )}

              
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl lg:text-base md:text-sm md:whitespace-nowrap ">
                Machine Learning
              </span>
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl lg:text-base md:text-sm md:whitespace-nowrap">
                scikit-learn
              </span>
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl lg:text-base md:text-sm">
                Pandas
              </span>
              
            </div>
            <p id="project-description" className="mt-3 xl:text-sm lg:mb-2">
              Script de Python desarrollado con scikit-learn que permite predecir gastos futuros a partir de un archivo Excel con formato predefinido. El usuario puede subir su archivo .xlsx y el modelo realiza un análisis de regresión lineal para estimar el comportamiento de sus gastos. Incluye visualizaciones usando matplotlib.
            </p>

            <div
              id="view project"
              className="flex justify-between mt-4 xl:absolute top-0 right-1"
            >
              <button className="bg-white text-primary-background py-1 px-2 rounded-md hover:bg-transparent border-2 border-white hover:text-white transition-all duration-300 cursor-pointer xl:mr-3">
                {" "}
                view live
              </button>
              <button className=" xl:hidden border-2 py-1 px-2 rounded-md hover:bg-white hover:text-primary-background transition-all duration-300 cursor-pointer">
                {" "}
                view code{" "}
              </button>
            </div>
          </div>
        </div>
        <div
          className="border-[3px] xl:w-full border-gray-border rounded-md py-[1rem] xl:py-1 px-[0.7rem] transition-all duration-300 hover:shadow-sm shadow-gray-800 xl:flex hover:bg-[#1f1f22] gap-3 xl:relative"
          id="card-project"
        >
          <img
            src={iotImage}
            className="xl:object-contain xl:w-4/10 xl:h-[200px] xl:relative xl:top-2 "
            alt=""
          />
          <div className="flex flex-col xl:w-full">
            <p className="text-sm text-zinc-400 mt-3 items-center flex gap-0.5 2xl:mt-2 xl:relative xl:top-2 ">
              2024 <GoDotFill className="inline mb-[2px]" /> Azure <GoDotFill className="inline mb-[2px]" /> IoT
            </p>
            <h5 className="text-2xl font-semibold text-white 2xl:mt-2 mt-1 xl:mt-5">
              Huerto IOT
            </h5>
            <div
              className="flex gap-2 w-full xl:text-sm mt-2"
              id="project-stack"
            >
              {isXl && (
                <a href="" target="blank">
                  <p className="py-1 px-2 border-2 hidden xl:block border-white rounded-2xl hover:bg-white hover:text-primary-background transition-all duration-300 cursor-pointer">
                    View on Github
                  </p>
                </a>
              )}

              
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl lg:text-base md:text-sm md:whitespace-nowrap ">
                Arduino 
              </span>
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl lg:text-base md:text-sm md:whitespace-nowrap">
                Azure
              </span>
              <span className="py-1 px-2 border-2 border-amber-50 rounded-2xl lg:text-base md:text-sm">
                IoT
              </span>
              
            </div>
            <p id="project-description" className="mt-3 xl:text-sm xl:mb-[9px]">
              Programa embebido en Arduino con ESP32 que mide temperatura, humedad y luz. Los datos se envían vía WiFi a Azure y se visualizan en un dashboard en tiempo real. Según valores predefinidos, se activan actuadores de riego, ventilación y sombreado automático para controlar las condiciones del huerto.
            </p>

            <div
              id="view project"
              className="flex justify-between mt-4 xl:absolute top-0 right-1"
            >
              <button className="bg-white text-primary-background py-1 px-2 rounded-md hover:bg-transparent border-2 border-white hover:text-white transition-all duration-300 cursor-pointer xl:mr-3">
                {" "}
                view live
              </button>
              <button className=" xl:hidden border-2 py-1 px-2 rounded-md hover:bg-white hover:text-primary-background transition-all duration-300 cursor-pointer">
                {" "}
                view code{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
