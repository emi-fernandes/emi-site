import React from "react";
import { useState } from 'react';
import './App.css';

function App() {
  const PUBLIC_URL = process.env.PUBLIC_URL || "";
  const capa = process.env.PUBLIC_URL + "/fotos/emillyfotocapa.jpg"
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
      text: `Hi! My name is Emilly Fernandes, I’m 21 years old, and I’m from Brazil. I have a deep love for animals, nature, and exploring new things. Being outdoors brings me balance, and I enjoy discovering new places, learning new skills, and experiencing challenges that push me to grow. I’m naturally curious and always on the move, seeking personal growth and fresh perspectives. I also have a tiny, beautiful dog named Mel, who fills my days with joy and companionship. She’s a big part of my life and makes every moment even more special.`,
      images: [
        `${PUBLIC_URL}/emillyfoto.jpg`,
        `${PUBLIC_URL}/rio.jpg`,
        `${PUBLIC_URL}/mel.jpg`,
      ],
    },
    education: {
      text: `I’m currently in my fourth semester of Data Science and Artificial Intelligence at Ibmec, Brazil, and spending this semester at EM Normandie in Dublin. This exchange is giving me international academic experience and exposure to new perspectives. Before university, I studied at Rio International School, where I built a strong foundation in English and adaptability.`,
      images: [
        `${PUBLIC_URL}/emillyris.jpg`, 
        `${PUBLIC_URL}/envw.jpg`, 
      ],
    },
    swimming: {
      text: `I have always been passionate about movement and physical activities. I practiced competitive swimming for six years, which taught me discipline, resilience, and teamwork. Before that, I trained in ballet from the age of 3 to 14, developing flexibility, balance, and dedication. More recently, I have been passionate about surfing, which allows me to connect with nature while constantly challenging myself to improve.`,
      images: [
        `${PUBLIC_URL}/emillysurf.jpg`,
        `${PUBLIC_URL}/eminatação.jpg`,  
      ],
    },
    dataScience: {
      text: '`I worked as a web development intern for four months at Lance, a major sports media website in Brazil. During this time, I contributed to the development and maintenance of the platform, improving my skills in front-end development, problem-solving, and website optimization. This experience allowed me to work in a fast-paced environment, collaborate with a professional team, and gain hands-on knowledge in website development for a high-traffic sports platform.',
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
           <section id="projects" className="projects-section">
   <h2>Projects</h2>
   <div className="projects-grid">
     <div className="project-item">
       Web Development
       <a href="https://github.com/emi-fernandes/deswebap2" target="_blank" rel="noopener noreferrer">
         <button className="project-btn">Click Here</button>
       </a>
     </div>
     <div className="project-item">
       Front-end
       <a href="https://github.com/fseda/Nexus?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
         <button className="project-btn">Click Here</button>
       </a>
     </div>
     <div className="project-item">
       Back-end
       <a href="https://github.com/isabellavieira/2024.1_Fivel_MallDelivery" target="_blank" rel="noopener noreferrer">
         <button className="project-btn">Click Here</button>
       </a>
     </div>
     <div className="project-item">
       Graphic Design and User Experience
       <a href="https://www.figma.com/proto/j5DMOXntLNIeiu2Bzp4VpT/Untitled?node-id=1-2&starting-point-node-id=1%3A2"
          target="_blank" rel="noopener noreferrer">
         <button className="project-btn">Click Here</button>
       </a>
     </div>
   </div>
 </section> 
      <footer id="contact" className="footer">
        <h2>Contact</h2>
        <a href="https://www.linkedin.com/in/emilly-fernandes-684155261" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:emillylafernandes@gmail.com">E-mail</a>
      </footer>
    </div>
  );
}

export default App;
