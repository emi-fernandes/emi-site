import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
  <div className="overlay">
    <h1>Emilly Fernandes</h1>
    <p>Data Science Student</p>
    <nav className="nav">
      <ul>
        <li><a href="#sobre">About Me</a></li>
        <li><a href="#projetos">Projects</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contato">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
<main className="main"> 
<section id="sobre" className="section about">
  <div className="about-container">
    <h2>About me</h2>
    <p>Hello!</p>
    <p>
      My name is Emilly Fernandes, I am 21 years old, and I am currently in the fourth semester of 
      Data Science and Artificial Intelligence at Ibmec. This website was created to showcase my 
      skills as a web developer. I completed high school at Rio International School, where I built a 
      strong foundation in English—an essential skill in my academic and professional journey.
    </p>
    <p>
      Beyond academics, I was a competitive swimmer for six years, an experience that taught me 
      discipline, resilience, and teamwork skills that I apply both personally and professionally.
    </p>
  </div>
</section>
  <section id="projetos" className="section projects">
          <h2>Projetos</h2>
          <div className="project-grid">
            <div className="project">
              <h3>Projeto 1</h3>
              <p>Descrição breve do projeto...</p>
              <button>Ver mais</button>
            </div>
            <div className="project">
              <h3>Projeto 2</h3>
              <p>Descrição breve do projeto...</p>
              <button>Ver mais</button>
            </div>
          </div>
        </section>
      </main>
      <footer id="contato" className="footer">
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
