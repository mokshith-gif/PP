export default function Contact() {
  return (
    <section className="section contact">
      <h2>Contact Me</h2>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}
