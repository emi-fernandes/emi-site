import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Emilly Fernandes</h1>
        <p>Desenvolvedor Web | Portfólio</p>
      </header>
      <div className="main">
        <section>
          <h2>Sobre Mim</h2>
          <p>Olá! Meu nome é Emilly Fernandes, tenho 20 anos e atualmente estou cursando o quarto período de Ciências de Dados e Inteligência Artificial na Ibmec. 
          Este site foi desenvolvido para demonstrar minhas habilidades como desenvolvedora web. Concluí meu ensino médio na Rio International School, onde adquiri uma sólida base em inglês, o que tem sido fundamental na minha jornada acadêmica e profissional.
          Além da área acadêmica, possuo experiência como atleta de natação, atividade que pratiquei por seis anos e onde desenvolvi habilidades importantes de trabalho em equipe. Esta experiência tem sido inestimável tanto pessoal quanto profissionalmente.</p>
        </section>
        <section className="projects">
          <h2>Projetos</h2>
          <div className="project">
            <h3>Projeto 1</h3>
            <p> Esse projeto foi desenvolvido </p>
          </div>
          <div className="project">
            <h3>Projeto 2</h3>
            <p>Descrição do Projeto 2.</p>
          </div>
        </section>
      </div>
      <footer className="footer">
        <h2>Contato</h2>
        <a href="https://www.linkedin.com/in/emilly-fernandes-684155261"
           target="_blank"
           rel="noopener noreferrer"
           className="linkedin-link">
          Visite meu perfil no LinkedIn
        </a>
        <a href="mailto:emillylafernandes@gmail.com" className="email-link">
          Envie-me um email
        </a>
      </footer>
    </div>
  );
}

export default App;
