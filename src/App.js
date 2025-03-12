import { useState } from 'react';
import './App.css';
import capa from './fotos/emillyfotocapa.JPG';

function App() {
  const PUBLIC_URL = process.env.PUBLIC_URL || "";

  const headerStyle = {
    backgroundImage: `url(${capa})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white"
  }; 

  const data = {
    personalfacts: {
      text: `Hi! My name is Emilly Fernandes, I’m 21 years old, and I’m from Brazil. I have a deep love for animals, nature, and exploring new things. Being outdoors brings me balance, and I enjoy discovering new places, learning new skills, and experiencing challenges that push me to grow. I also have a tiny, beautiful dog named Mel, who fills my days with joy and companionship.`,
      images: [
        `${PUBLIC_URL}/fotos/emillyfoto.jpg`,
        `${PUBLIC_URL}/fotos/rio.jpg`,
        `${PUBLIC_URL}/fotos/mel.jpg`,
      ],
    },
    education: {
      text: `I’m currently in my fourth semester of Data Science and Artificial Intelligence at Ibmec, Brazil, and spending this semester at EM Normandie in Dublin.`,
      images: [
        `${PUBLIC_URL}/fotos/emillyris.jpg`, 
        `${PUBLIC_URL}/fotos/envw.jpg`, 
      ],
    },
    swimming: {
      text: `I have always been passionate about movement and physical activities. I practiced competitive swimming for six years, which taught me discipline, resilience, and teamwork.`,
      images: [
        `${PUBLIC_URL}/fotos/emillysurf.jpg`,
        `${PUBLIC_URL}/fotos/eminatação.jpg`,  
      ],
    },
    dataScience: {
      text: `I worked as a web development intern for four months at Lance, a major sports media website in Brazil.`,
      images: [],
    },
  };

  const [selectedInfo, setSelectedInfo] = useState(null); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (infoKey) => {
    setSelectedInfo(data[infoKey]);
    setCurrentImageIndex(0);
  };

  const handleNext = (e) => {
    e.stopPropagation();
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

  const closeModal = () => {
    setSelectedInfo(null);
  };

  return (
    <div className="App">
      <header style={headerStyle} className="header">
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

      <section id="aboutme" className="about-section">
        <h2>About me</h2>
        <div className="grid-container">
          <div className="grid-item" onClick={() => openModal('personalfacts')}>
              <img src={`${PUBLIC_URL}/icons/personal.png`} alt="Personal Facts" />
            <p>Personal facts</p>
          </div>
          <div className="grid-item" onClick={() => openModal('education')}>
              <img src={`${PUBLIC_URL}/icons/educacao.png`} alt="Education" />
            <p>Education</p>
          </div>
          <div className="grid-item" onClick={() => openModal('swimming')}>
              <img src={`${PUBLIC_URL}/icons/natacao.png`} alt="Hobbies" />
            <p>Hobbies</p>
          </div>
          <div className="grid-item" onClick={() => openModal('dataScience')}>
              <img src={`${PUBLIC_URL}/icons/experience.png`} alt="Experience" />
            <p>Experience</p>
          </div>
        </div>
      </section>

      {selectedInfo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>{selectedInfo.text}</p>
            {selectedInfo.images && selectedInfo.images.length > 0 && (
              <div className="carousel-container">
                <button className="arrow" onClick={handlePrev}>&lt;</button>
                <img src={selectedInfo.images[currentImageIndex]} alt="Carousel" className="carousel-image" />
                <button className="arrow" onClick={handleNext}>&gt;</button>
              </div>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <footer id="contact" className="footer">
        <h2>Contact</h2>
        <a href="https://www.linkedin.com/in/emilly-fernandes-684155261" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:emillylafernandes@gmail.com">E-mail</a>
      </footer>
    </div>
  );
}

export default App;
