export default function Navbar() {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <h2>Portfolio</h2>
      <ul>
        <li><button onClick={() => handleNavClick("home")}>Home</button></li>
        <li><button onClick={() => handleNavClick("about")}>About</button></li>
        <li><button onClick={() => handleNavClick("skills")}>Skills</button></li>
        <li><button onClick={() => handleNavClick("projects")}>Projects</button></li>
        <li><button onClick={() => handleNavClick("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
}
