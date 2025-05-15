export default function Contact() {
  return (
    <section id="contact">
      <h1 className="header">
        <span>Contact</span>
      </h1>

      <form action="#">
        <div className="input-box">
          <span>Full Name</span>
          <input type="text" placeholder="Full Name" className="bg-white"/>
        </div>

        <div className="input-box">
          <span>Email</span>
          <input type="text" placeholder="example@email.com" className="bg-white" />
        </div>

        <div className="input-box">
          <span>Message</span>
          <input type="text" placeholder="Leave a Message" className="bg-white"/>
        </div>

        <div className="btn">Submit</div>
      </form>
    </section>
  );
}
