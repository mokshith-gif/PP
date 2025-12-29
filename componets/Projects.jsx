export default function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio using React.</p>
          <button>View</button>
        </div>

        <div className="project-card">
          <h3>Todo App</h3>
          <p>Task manager with CRUD features.</p>
          <button>View</button>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>Live weather using API.</p>
          <button>View</button>
        </div>
      </div>
    </section>
  );
}
