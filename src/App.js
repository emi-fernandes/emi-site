import { useState } from 'react';
import './App.css';

function App() {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const info = {
    personalfacts: "Hi! My name is Emilly Fernandes, I’m 21 years old, and I’m from Brazil. I have a deep love for animals, nature, and exploring new things. Being outdoors brings me balance, and I enjoy discovering new places, learning new skills, and experiencing challenges that push me to grow. I’m naturally curious and always on the move, seeking personal growth and fresh perspectives. I also have a tiny, beautiful dog named Mel, who fills my days with joy and companionship. She’s a big part of my life and makes every moment even more special. I believe that every experience shapes us, and I’m always ready for the next adventure!",
    education: "I’m currently in my fourth semester of Data Science and Artificial Intelligence at Ibmec, Brazil, and spending this semester at EM Normandie in Dublin. This exchange is giving me international academic experience and exposure to new perspectives. Before university, I studied at Rio International School, where I built a strong foundation in English and adaptability.",
    swimming: "I have always been passionate about movement and physical activities. I practiced competitive swimming for six years, which taught me discipline, resilience, and teamwork. Before that, I trained in ballet from the age of 3 to 14, developing flexibility, balance, and dedication. More recently, I have been passionate about surfing, which allows me to connect with nature while constantly challenging myself to improve. ",
    dataScience: "I worked as a web development intern for four months at Lance, a major sports media website in Brazil. During this time, I contributed to the development and maintenance of the platform, improving my skills in front-end development, problem-solving, and website optimization. This experience allowed me to work in a fast-paced environment, collaborate with a professional team, and gain hands-on knowledge in website development for a high-traffic sports platform."
  };

  return (
    <div className="App">
      <header className="header">
        <div className="overlay">
          <h1>Emilly Fernandes</h1>
          <p>Data Science Student</p>
          <nav className="nav">
            <ul>
              <li><a href="#aboutme">About me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main"> 
        <section className="about">
          <h2>About me</h2>
          <div className="grid">
            <div className="grid-item" onClick={() => setSelectedInfo(info.personalfacts)}>
            <img src="icons/personal.png" alt="Personal Facts" />
              <p>Personal facts</p>
            </div>
            <div className="grid-item" onClick={() => setSelectedInfo(info.education)}>
            <img src="icons/educacao.png" alt="Education" />
             <p>Education</p>
           </div>
            <div className="grid-item" onClick={() => setSelectedInfo(info.swimming)}>
            <img src="/icons/natacao.png" alt="Hobbies" />
              <p>Hobbies</p>
            </div>
            <div className="grid-item" onClick={() => setSelectedInfo(info.dataScience)}>
            <img src="/icons/experience.png" alt="Experience" />
              <p>Experience</p>
            </div>
          </div>
        </section>
        {selectedInfo && (
          <div className="overlay" onClick={() => setSelectedInfo(null)}>
            <div className="modal">
              <p>{selectedInfo}</p>
              <button onClick={() => setSelectedInfo(null)}>Close</button>
            </div>
          </div>
        )}
      </main>
<section class="projects">
  <h2>Projects</h2>
  <div class="projects-grid">
    <div class="project-item">Web Development<button>Click Here</button></div>
    <div class="project-item">Front-end<button>Click Here</button></div>
    <div class="project-item">Back-end<button>Click Here</button></div>
    <div class="project-item">Agile Methods<button>Click Here</button></div>
    <div class="project-item full-width">Graphic Design and User Experience<button>Click Here</button></div>
  </div>
</section>

      <footer id="contact" className="footer">
        <h2>Contato</h2>
        <a href="https://www.linkedin.com/in/emilly-fernandes-684155261" target="_blank" rel="noopener noreferrer" className="linkedin-link">
          LinkedIn
        </a>
        <a href="mailto:emillylafernandes@gmail.com" className="email-link">
          E-mail
        </a>
      </footer>
    </div>
  );
}

export default App;
