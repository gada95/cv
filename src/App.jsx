import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './componentes/Header';
import Experiencia from './componentes/Experiencia';
import Skills from './componentes/Skills';
import Contacto from './componentes/Contacto';
import Footer_ from './componentes/Footer_';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.style.backgroundColor = "#ffffff"; // Fondo blanco en modo claro
    } else {
      document.body.style.backgroundColor = "#1f1f1f"; // Fondo oscuro
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ backgroundColor: darkMode ? "#121212" : "#ffffff" }}>
      {/* Botón para alternar entre temas */}
     {/*} <button
  onClick={toggleTheme}
  style={{
    position: "fixed", // Fijarlo en la pantalla
    top: "10px", // Posicionarlo en la parte superior
    right: "10px", // Pegarlo a la derecha
    padding: "10px 20px",
    backgroundColor: darkMode ? "#2ecc71" : "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    zIndex: 1000, // Asegurar que esté por encima de otros elementos
  }}
>
  {darkMode ? "Modo Claro" : "Modo Oscuro"}
</button> */}

      {/* Navegación fija */}
      <nav style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#1f1f1f", color: "#fff", padding: "10px", zIndex: 999 }}>
        <a href="#header" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Inicio</a>
        <a href="#experiencia" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Experiencia</a>
        <a href="#habilidades" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Habilidades</a>
        <a href="#contacto" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Contacto</a>
        <a href="#footer_" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Footer</a>
      </nav>

      {/* Contenido de las secciones */}
      <div id="header" data-aos="fade-down">
        <Header />
      </div>
      <div id="experiencia" data-aos="fade-right">
        <Experiencia />
      </div>
      <div id="habilidades" data-aos="fade-up">
        <Skills />
      </div>
      <div id="contacto" data-aos="fade-left">
        <Contacto />
      </div>
      <div id="footer_" data-aos="fade-left">
        <Footer_ />
      </div>
    </div>
  );
}

export default App;
