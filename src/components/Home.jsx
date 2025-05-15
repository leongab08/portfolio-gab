import fotoPerifl from "assets/fotoPerfil.jpeg";

export default function Home() {
  return (
    <section id="home">
      <img src={fotoPerifl} alt="Picture of me" />

      <div className="info-box">
        <h1>
          <span>Hello I'm Gabriel Esperilla</span>
        </h1>
        <h3>
          <span>Web Developer </span>from Tecnologico de Monterrey
        </h3>
        <p>
          I'm a very passionated person of the web development, i think that the
          web development is fundamental in our society and i that's why i
          choose this career{" "}
        </p>
      </div>

      <div className="btn-box">
        <div className="btn">Hire</div>
        <div className="btn">Contact Me</div>
      </div>
    </section>
  );
}
