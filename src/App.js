import { useState } from 'react';
import './App.css';

function App() {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const info = {
    personalfacts: "Personal facts about me, including background and interests.",
    education: "I am currently in the fourth semester of Data Science and AI at Ibmec.",
    swimming: "I was a competitive swimmer for six years, learning teamwork and discipline.",
    development: "I specialize in web development with React, HTML, CSS, and JavaScript.",
    dataScience: "I am passionate about data science, machine learning, and AI applications."
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
