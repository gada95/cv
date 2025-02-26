import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './componentes/Header';
import Experiencia from './componentes/Experiencia';
import Skills from './componentes/Skills';
import Contacto from './componentes/Contacto';
import Footer_ from './componentes/Footer_';
import JavascriptDemo from "./demos/JavascriptDemo";
import ReactDemo from "./demos/ReactDemo";
import DemoDom from "./demos/DemoDom";
import DemoEventos from "./demos/DemoEventos";
import DemoFetch from "./demos/DemoFetch";
import DemoFunciones from "./demos/DemoFunciones";
import DemoPromesas from "./demos/DemoPromesas";
import DemoTailwind from "./demos/DemoTailwind";




function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "#1f1f1f";
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div style={{ backgroundColor: darkMode ? "#121212" : "#ffffff" }}>
        {/* Botón para alternar entre temas */}
        {/*
        <button
          onClick={toggleTheme}
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            padding: "10px 20px",
            backgroundColor: darkMode ? "#2ecc71" : "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            zIndex: 1000,
          }}
        >
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
        */}

        {/* Navegación fija */}
        <nav style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#1f1f1f", color: "#fff", padding: "10px", zIndex: 999 }}>
          <a href="#header" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Inicio</a>
          <a href="#experiencia" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Experiencia</a>
          <a href="#habilidades" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Habilidades</a>
          <a href="#contacto" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Contacto</a>
          <a href="#footer_" style={{ margin: "0 15px", color: "#2ecc71", textDecoration: "none" }}>Footer</a>
        </nav>

        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <div>
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
            }
          />

          {/* Rutas para las demostraciones */}
          <Route path="/javascript" element={<JavascriptDemo />} />
          <Route path="/react" element={<ReactDemo />} />
          <Route path="/demo-dom" element={<DemoDom />} />
          <Route path="/demo-eventos" element={<DemoEventos />} />
          <Route path="/demo-fetch" element={<DemoFetch />} />
          <Route path="/demo-funciones" element={<DemoFunciones />} />
          <Route path="/demo-promesas" element={<DemoPromesas />} />
          <Route path="/tailwind" element={<DemoTailwind />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
