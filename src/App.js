import { useState } from 'react';
import './App.css';

function App() {
  const data = {
    personalfacts: {
      text: `Hi! My name is Emilly Fernandes, I’m 21 years old, and I’m from Brazil. I have a deep love for animals, nature, and exploring new things. Being outdoors brings me balance, and I enjoy discovering new places, learning new skills, and experiencing challenges that push me to grow. I’m naturally curious and always on the move, seeking personal growth and fresh perspectives. I also have a tiny, beautiful dog named Mel, who fills my days with joy and companionship. She’s a big part of my life and makes every moment even more special. I believe that every experience shapes us, and I’m always ready for the next adventure!`,
      images: [
        './emillyfoto.jpg',
        './rio.jpg',
        './mel.jpg',
      ],
    },
    education: {
      text: `I’m currently in my fourth semester of Data Science and Artificial Intelligence at Ibmec, Brazil, and spending this semester at EM Normandie in Dublin. This exchange is giving me international academic experience and exposure to new perspectives. Before university, I studied at Rio International School, where I built a strong foundation in English and adaptability.`,
      images: [
        './emillyris.jpg', 
        './envw.jpg', 
        ],
    },
    swimming: {
      text: `I have always been passionate about movement and physical activities. I practiced competitive swimming for six years, which taught me discipline, resilience, and teamwork. Before that, I trained in ballet from the age of 3 to 14, developing flexibility, balance, and dedication. More recently, I have been passionate about surfing, which allows me to connect with nature while constantly challenging myself to improve.`,
      images: ['./emillysurf.jpg',
      './eminatação.jpg',  
      ],
    },
    dataScience: {
      text: `I worked as a web development intern for four months at Lance, a major sports media website in Brazil. During this time, I contributed to the development and maintenance of the platform, improving my skills in front-end development, problem-solving, and website optimization. This experience allowed me to work in a fast-paced environment, collaborate with a professional team, and gain hands-on knowledge in website development for a high-traffic sports platform.`,
      images: [],
    },
  };

  const [selectedInfo, setSelectedInfo] = useState(null); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para abrir o modal com os dados corretos
  const openModal = (infoKey) => {
    setSelectedInfo(data[infoKey]);
    setCurrentImageIndex(0); // Resetamos para a 1ª imagem sempre que abrir
  };

  // Funções do carrossel
  const handleNext = (e) => {
    e.stopPropagation(); // Evita que o clique feche o modal
    if (selectedInfo?.images?.length) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedInfo.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedInfo?.images?.length) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedInfo.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Fechar modal
  const closeModal = () => {
    setSelectedInfo(null);
  };

  return (
    <div className="App">
      {/* Cabeçalho */}
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
      {/* Seção About */}
      <main className="main">
        <section id="aboutme" className="about">
          <h2>About me</h2>
          <div className="grid">
            <div className="grid-item" onClick={() => openModal('personalfacts')}>
              <img src="icons/personal.png" alt="Personal Facts" />
              <p>Personal facts</p>
            </div>
            <div className="grid-item" onClick={() => openModal('education')}>
              <img src="icons/educacao.png" alt="Education" />
              <p>Education</p>
            </div>
            <div className="grid-item" onClick={() => openModal('swimming')}>
              <img src="icons/natacao.png" alt="Hobbies" />
              <p>Hobbies</p>
            </div>
            <div className="grid-item" onClick={() => openModal('dataScience')}>
              <img src="icons/experience.png" alt="Experience" />
              <p>Experience</p>
            </div>
          </div>
        </section>
{selectedInfo && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      
      {/* 1) Texto em cima */}
      <p>{selectedInfo.text}</p>

      {/* 2) Carrossel de imagens (abaixo do texto) */}
      {selectedInfo.images && selectedInfo.images.length > 0 && (
        <div className="carousel-container">
          <button className="arrow left-arrow" onClick={handlePrev}>
            &lt;
          </button>
          <img
            src={selectedInfo.images[currentImageIndex]}
            alt="Carousel"
            className="carousel-image"
          />
          <button className="arrow right-arrow" onClick={handleNext}>
            &gt;
          </button>
        </div>
      )}

      {/* 3) Botão de fechar */}
      <button onClick={closeModal}>Close</button>
    </div>
  </div>
)}

      </main>

      {/* Seção Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          Web Development
          <a
            href="https://github.com/emi-fernandes/deswebap2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Click Here</button>
          </a>
        </div>
        <div className="project-item">
          Front-end
          <a
            href="https://github.com/fseda/Nexus?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Click Here</button>
          </a>
        </div>
        <div className="project-item">
          Back-end
          <a
            href="https://github.com/isabellavieira/2024.1_Fivel_MallDelivery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Click Here</button>
          </a>
        </div>
        <div className="project-item">
          Graphic Design and User Experience
          <a
            href="https://www.figma.com/proto/j5DMOXntLNIeiu2Bzp4VpT/Untitled?node-id=1-2&starting-point-node-id=1%3A2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Click Here</button>
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer id="contact" className="footer">
        <h2>Contact</h2>
        <a
          href="https://www.linkedin.com/in/emilly-fernandes-684155261"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
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