import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer_ from "../componentes/Footer_"; // Footer dinámico

function DemoEventos() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("Pasa el mouse sobre el cuadro o presiona una tecla.");
  const [colorFondo, setColorFondo] = useState("#34495e");
  const [coordenadas, setCoordenadas] = useState({ x: 0, y: 0 });
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const [mostrarCuadro, setMostrarCuadro] = useState(false); // Estado para el nuevo efecto

  // Evento de clic
  const manejarClic = () => {
    setMensaje("🎯 ¡Hiciste clic en el botón!");
  };

  // Evento de mouseover
  const manejarMouseOver = () => {
    setMensaje("🐭 ¡Pasaste el mouse por encima!");
  };

  // Evento de teclado (cualquier tecla)
  const manejarTeclaPresionada = (event) => {
    setMensaje(`⌨️ Presionaste la tecla: ${event.key}`);
  };

  // Evento de doble clic para cambiar el color del fondo
  const manejarDobleClic = () => {
    const colores = ["#34495e", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"];
    setColorFondo(colores[Math.floor(Math.random() * colores.length)]);
  };

  // Evento de movimiento del mouse para mostrar coordenadas
  const manejarMouseMove = (event) => {
    setCoordenadas({ x: event.clientX, y: event.clientY });
  };

  // Evento de doble toque en dispositivos móviles para mostrar/ocultar texto
  const manejarDobleToque = () => {
    setMostrarTexto(!mostrarTexto);
  };

  // 🎉 NUEVO: Presionar "A" para mostrar/ocultar cuadro
  useEffect(() => {
    const manejarTeclaA = (event) => {
      if (event.key.toLowerCase() === "a") {
        setMostrarCuadro(!mostrarCuadro);
      }
    };

    window.addEventListener("keydown", manejarTeclaA);
    return () => window.removeEventListener("keydown", manejarTeclaA);
  }, [mostrarCuadro]);

  return (
    <div style={estiloPagina}>
      <div style={{ ...estiloRecuadro, backgroundColor: colorFondo }}>
        <h2 style={estiloTitulo}>🎯 Eventos en JavaScript</h2>
        <p style={{ color: "#ccc" }}>Aquí puedes interactuar con algunos eventos comunes.</p>

        {/* Área de interacción */}
        <div
          style={estiloCuadro}
          onMouseOver={manejarMouseOver}
          onKeyDown={manejarTeclaPresionada}
          onDoubleClick={manejarDobleClic}
          onMouseMove={manejarMouseMove}
          onTouchStart={manejarDobleToque} // Detecta el toque en móviles
          tabIndex="0"
        >
          {mensaje}
        </div>

        {/* Coordenadas del mouse */}
        <p style={estiloCoordenadas}>📍 Coordenadas: X = {coordenadas.x}, Y = {coordenadas.y}</p>

        {/* Texto ocultable en móviles */}
        {mostrarTexto && <p style={estiloTextoOcultable}>📌 Este texto puede ocultarse con doble toque en móvil.</p>}

        {/* 🎉 NUEVO: Cuadro oculto que aparece con la tecla "A" */}
        {mostrarCuadro && (
          <div style={estiloCuadroAnimado}>
            🎉 ¡Presionaste "A"! Este cuadro aparece/desaparece con la tecla.
          </div>
        )}

        {/* Botones */}
        <div style={estiloBotonera}>
          <button onClick={manejarClic} style={estiloBoton}>Hacer Clic</button>
          <button onClick={() => navigate(-1)} style={estiloBotonVolver}>🔙 Volver Atrás</button>
        </div>
      </div>

      {/* Footer dinámico */}
      <Footer_ seccion="javascript" />
    </div>
  );
}

// 🎨 **Estilos Mejorados**
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

const estiloCuadro = {
  backgroundColor: "#34495e",
  color: "#fff",
  padding: "20px",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "20px",
  maxWidth: "600px",
  margin: "auto",
  outline: "none",
  transition: "0.3s",
  cursor: "pointer",
};

const estiloCoordenadas = {
  color: "#f1c40f",
  fontSize: "16px",
  marginTop: "15px",
};

const estiloTextoOcultable = {
  color: "#e67e22",
  fontSize: "16px",
  marginTop: "15px",
};

const estiloCuadroAnimado = {
  backgroundColor: "#e74c3c",
  color: "#fff",
  padding: "15px",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "20px",
  maxWidth: "600px",
  margin: "auto",
  transition: "0.3s",
  animation: "fadeIn 0.5s ease-in-out",
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
};

export default DemoEventos;
