import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer_ from "../componentes/Footer_"; // Importamos el footer

function JavascriptDemo() {
  const [contenido, setContenido] = useState({ texto: "", ruta: "" });
  const navigate = useNavigate(); // Hook para navegar

  // Funciones de demostración
  const mostrarDomManipulation = () => {
    setContenido({ 
      texto: "📌 Manipulación del DOM: Podemos cambiar el contenido, estilos y estructura de la página con JavaScript.",
      ruta: "/demo-dom"
    });
  };

  const mostrarEventos = () => {
    setContenido({ 
      texto: "🎯 Eventos en JavaScript: Podemos detectar y manejar clics, teclas y otros eventos.",
      ruta: "/demo-eventos"
    });
  };

  const mostrarFetchAPI = () => {
    setContenido({ 
      texto: "🌍 Fetch API: Permite obtener datos de servidores externos de manera sencilla.",
      ruta: "/demo-fetch"
    });
  };

  const mostrarFunciones = () => {
    setContenido({ 
      texto: "🧩 Funciones y Callbacks: JavaScript permite funciones de primera clase y la programación asíncrona.",
      ruta: "/demo-funciones"
    });
  };

  const mostrarPromesas = () => {
    setContenido({ 
      texto: "⚡ Promesas y Async/Await: Nos permite manejar procesos asíncronos de forma eficiente.",
      ruta: "/demo-promesas"
    });
  };

  return (
    <div style={estiloPagina}>
      <div style={estiloRecuadro}>
        <h2 style={estiloTitulo}>🎯 Experiencia con JavaScript</h2>
        <p style={{ color: "#ccc" }}>Haz clic en un botón para ver una demostración de cada concepto:</p>

        {/* Botones del menú */}
        <div style={estiloBotonera}>
          <button onClick={mostrarDomManipulation} style={estiloBoton}>DOM</button>
          <button onClick={mostrarEventos} style={estiloBoton}>Eventos</button>
          <button onClick={mostrarFetchAPI} style={estiloBoton}>Fetch API</button>
          <button onClick={mostrarFunciones} style={estiloBoton}>Funciones</button>
          <button onClick={mostrarPromesas} style={estiloBoton}>Promesas</button>
        </div>

        {/* Área de contenido con animación */}
        <div style={estiloContenido}>
          {contenido.texto || "Selecciona un tema para ver la demostración"}

          {/* Botón para ir a la demostración */}
          {contenido.ruta && (
            <button 
              onClick={() => navigate(contenido.ruta)} 
              style={estiloBotonDemo}
            >
              Ir a Demostración
            </button>
          )}
        </div>

        {/* Botón de Volver Atrás */}
        <button onClick={() => navigate(-1)} style={estiloBotonVolver}>
          🔙 Volver
        </button>
      </div>

      {/* Footer dinámico para JavaScript */}
      <Footer_ seccion="javascript" />
    </div>
  );
}

// 🎨 **Estilos Mejorados**
const estiloPagina = {
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#1f1f1f", // Fondo oscuro
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const estiloRecuadro = {
  backgroundColor: "#2c3e50",
  padding: "50px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  maxWidth: "800px",
  margin: "50px auto",
  textAlign: "center",
};

const estiloTitulo = {
  color: "#2ecc71",
  fontSize: "24px",
};

const estiloBotonera = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "20px",
  flexWrap: "wrap",
};

const estiloBoton = {
  padding: "12px 18px",
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
  fontSize: "16px",
};

const estiloBotonDemo = {
  display: "block",
  margin: "15px auto 0",
  padding: "10px 15px",
  backgroundColor: "#e67e22",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
  fontSize: "16px",
};

const estiloContenido = {
  backgroundColor: "#34495e",
  color: "#fff",
  padding: "20px",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "20px",
  maxWidth: "600px",
  margin: "auto",
};

const estiloBotonVolver = {
  display: "block",
  margin: "30px auto",
  padding: "10px 15px",
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
  fontSize: "16px",
};

export default JavascriptDemo;
