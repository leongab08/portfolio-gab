import aiImage from "assets/ai-engineer.jpg";
import webDesign from "assets/web-design.jpg";
import webDevelop from "assets/web-development.jpg";

export default function Services() {
  return (
    <section id="services">
      <h1 className="header">
        <span>Sevices</span>
      </h1>

      <div className="services-container">
        <div className="box">
          <h1>
            <span>Web development</span>
          </h1>

          <p>
            Soy capaz de desarrollar sitios web para negocios y empresas, tengo
            experiencia con negocios independientes, potenciando sus ventas y
            ayudandoles a llegar a mas clientes
          </p>

          <img height="200px" width="200" src={webDevelop} />
        </div>

        <div className="box">
          <h1>
            <span>Web design</span>
          </h1>

          <p>
            Soy capaz de diseñar paginas web para negocios y empresas, tengo
            experiencia con negocios independientes, potenciando sus ventas y
            ayudandoles a llegar a mas clientes
          </p>

          <img width="200" src={webDesign} />
        </div>

        <div className="box">
          <h1>
            <span>AI enginering</span>
          </h1>

          <p>
            Puedo desarrolar algoritmos de aprendizaje automatico y
            automatizaciones para negocios o empresas
          </p>

          <img width="200" src={aiImage} />
        </div>
      </div>
    </section>
  );
}
