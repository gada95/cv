import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer_ from "../componentes/Footer_"; // Importamos el footer

function DemoDom() {
  const navigate = useNavigate();
  const [texto, setTexto] = useState("Haz clic en los botones para cambiar el DOM.");
  const [color, setColor] = useState("#3498db");
  const [visible, setVisible] = useState(true);

  // Cambiar Texto
  const cambiarTexto = () => {
    setTexto("¡El DOM ha sido manipulado con JavaScript!");
  };

  // Cambiar Color
  const cambiarColor = () => {
    const colores = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"];
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    setColor(nuevoColor);
  };

  // Ocultar/Mostrar
  const toggleVisibilidad = () => {
    setVisible(!visible);
  };

  return (
    <div style={estiloPagina}>
      <div style={estiloRecuadro}>
        <h2 style={estiloTitulo}>🖥️ Manipulación del DOM</h2>
        <p style={{ color: "#ccc" }}>Haz clic en los botones para ver la manipulación del DOM en acción.</p>

        {/* Elemento Manipulado */}
        <div style={{ ...estiloCaja, backgroundColor: color, display: visible ? "block" : "none" }}>
          {texto}
        </div>

        {/* Botonera */}
        <div style={estiloBotonera}>
          <button onClick={cambiarTexto} style={estiloBoton}>Cambiar Texto</button>
          <button onClick={cambiarColor} style={estiloBoton}>Cambiar Color</button>
          <button onClick={toggleVisibilidad} style={estiloBoton}>
            {visible ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        {/* Botón de Volver */}
        <button onClick={() => navigate(-1)} style={estiloBotonVolver}>
          🔙 Volver Atrás
        </button>
      </div>

      {/* Footer dinámico para JavaScript */}
      <Footer_ seccion="javascript" />
    </div>
  );
}

// 🎨 **Estilos**
const estiloPagina = {
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#1f1f1f",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const estiloRecuadro = {
  backgroundColor: "#2c3e50",
  padding: "30px",
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

const estiloCaja = {
  color: "#fff",
  padding: "20px",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "20px",
  maxWidth: "600px",
  margin: "auto",
  transition: "0.3s",
};

const estiloBotonera = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "20px",
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

const estiloBotonVolver = {
  padding: "10px 15px",
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
  fontSize: "16px",
  marginTop: "20px",
};

export default DemoDom;