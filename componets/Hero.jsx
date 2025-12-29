export default function Hero() {
  const resumeLink = "https://drive.google.com/file/d/YOUR_FILE_ID/view"; // Replace YOUR_FILE_ID with your Google Drive file ID

  const handleDownloadResume = () => {
    window.open(resumeLink, "_blank");
  };

  return (
    <section className="hero">
      <h1>Hi, I'm <span>John Doe</span></h1>
      <p>Frontend Developer | React Learner</p>
      <button onClick={handleDownloadResume}>Download Resume</button>
    </section>
  );
}
