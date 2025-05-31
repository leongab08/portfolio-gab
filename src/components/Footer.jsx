import reactIcon from "assets/icons/React.png";
import tailwindIcon from "assets/icons/Tailwind Css.png";
import viteIcon from "assets/icons/Vite.js.png";

export default function Footer(){
    return(
        <footer>
        <div className="col-left">
          <div className="col-box">
            <span>
              <i className="bx bxs-location-plus"></i>
            </span>
            <span>Apaxco Estado de Mexico Mexico</span>
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
            <span>gabochu280@gmail.com</span>
          </div>
        </div>

        <div className="col-right">
          <span>About My Services</span>
          <p>
            Estoy disponible en cualquier momento a cualquier hora, no dudes en
            solicitar informacion o contactarte conmigo
          </p>

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
            <h6 className="bg-gradient-to-r from-[#fc3421] to-[#3ec5ff] text-transparent bg-clip-text mb-2">Porfolio Stack</h6>
            <ol id="portfolio-tecnologies" className="flex gap-4">
              <img src={reactIcon} className="w-12 h-12" alt="" />
              <img src={tailwindIcon}  className="w-12 h-12" alt="" />
              <img src={viteIcon}   className="w-12 h-12" alt="" />

            </ol>
          </div>
        </div>
      </footer>
    )
}