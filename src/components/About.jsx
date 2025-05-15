
import fotoPerifl from "assets/fotoPerfil.jpeg";

export default function About(){
    return (
         <section id="about">
            <div className="about-box">
        
              <div className="about-info">
                <h1><span>About me</span></h1>
                <p>Me considero una persona reisiliente, simpre trato de dar lo mejor de mi para cumplir con mis objetivos y a pesar de los problemas, me esforzare haste cumplir todos mis objetivos y metas en esta vida.
                </p>
              </div>
        
              <h2><span>Skills</span></h2>
        
              <div className="skills">
        
                <ul>
                  <li>
                    <span><i className='bx bx-chevron-right'></i> HTML</span>
                  </li>
                  <li>
                    <span><i className='bx bx-chevron-right'></i> CSS</span>
                  </li>
                  <li>
                    <span><i className='bx bx-chevron-right'></i> JavaScript</span>
                  </li>
                </ul>
        
                <ul>
                  <li>
                    <span><i className='bx bx-chevron-right'></i> C++</span>
                  </li>
                  <li>
                    <span><i className='bx bx-chevron-right'></i> Python</span>
                  </li>
                  <li>
                    <span><i className='bx bx-chevron-right'></i> My Sql</span>
                  </li>
                </ul>
        
              </div>
            </div>
        
            <img src={fotoPerifl} />
          </section>
    )
}