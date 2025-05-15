import { FaAsterisk } from "react-icons/fa";

import javaScriptIcon from "assets/icons/javascript-js.svg";
import htmlIcon from "assets/icons/file-type-html.svg";
import cssIcon from "assets/icons/file-type-css.svg";
import reactIcon from "assets/icons/react.svg";
import bootstrapIcon from "assets/icons/bootstrap.svg";
import tailwindIcon from "assets/icons/tailwind-css.svg";
import sassIcon from "assets/icons/file-type-sass.svg";
import expressIcon from "assets/icons/express-original.svg";
import nodeIcon from "assets/icons/nodejs.svg";
import mySqlIcon from "assets/icons/mysql-original.svg";
import mongodbIcon from "assets/icons/file-type-mongo.svg";
import gitIcon from "assets/icons/git.svg";

export default function Stack() {
  // console.log(javaScriptIcon);
  return (
    <div className="text-white min-h-screen bg-primary-background py-[10%] md:py-[5%] px-[4%] lg:px-[14%] " id="section-stack">
      <h4 className="w-fit mb-9 lg:mb-17 flex items-center text-5xl lg:text-[52px] mx-auto">
        MY TECH STACK
      </h4>
      <div className="flex flex-col gap-[70px]">
        <div className="xmd:flex xmd:gap-27 lg:gap-57">
          <h5 className="text-4xl lg:text-5xl mb-6">FrontEnd</h5>
          <div
            className="flex w-full flex-wrap gap-x-13 gap-y-9"
            id="stack-div"
          >
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={javaScriptIcon} alt="" className="w-10 " />
              <p>JavaScript</p>
            </div>
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={htmlIcon} alt="" className="w-10 " />
              <p>HTML5</p>
            </div>
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={cssIcon} alt="" className="w-10 " />
              <p>CSS3</p>
            </div>
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={reactIcon} alt="" className="w-10 " />
              <p>React</p>
            </div>
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={bootstrapIcon} alt="" className="w-10 " />
              <p>Bootstrap</p>
            </div>
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={tailwindIcon} alt="" className="w-10 " />
              <p>Tailwind CSS</p>
            </div>
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={sassIcon} alt="" className="w-10 " />
              <p>SASS </p>
            </div>
          </div>
        </div>
        <div className="xmd:flex xmd:gap-28 lg:gap-58">
          <h5 className="text-4xl lg:text-5xl mb-6">BackEnd</h5>
          <div
            className="flex w-full flex-wrap gap-x-13 gap-y-9"
            id="stack-div"
          >
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img
                src={expressIcon}
                alt=""
                className="w-11 bg-white p-1 rounded-xl"
              />
              <p>Express.js</p>
            </div>
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={nodeIcon} alt="" className="w-11 " />
              <p>Node.js</p>
            </div>
          </div>
        </div>
        <div className="xmd:flex xmd:gap-24 lg:gap-54">
          <h5 className="text-4xl lg:text-5xl mb-6">DataBase</h5>
          <div
            className="flex w-full flex-wrap gap-x-13 gap-y-9"
            id="stack-div"
          >
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={mySqlIcon} alt="" className="w-10" />
              <p>MySql</p>
            </div>
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={mongodbIcon} alt="" className="w-11 " />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <div className="xmd:flex xmd:gap-48 lg:gap-80">
          <h5 className="text-4xl lg:text-5xl mb-6">Tools</h5>
          <div
            className="flex w-full flex-wrap gap-x-13 gap-y-9 "
            id="stack-div"
          >
            <div className="flex gap-4 text-2xl items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {" "}
              <img src={gitIcon} alt="" className="w-10" />
              <p>Versions with Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
