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
        </div>
      </footer>
    )
}