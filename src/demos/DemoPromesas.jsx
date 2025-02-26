import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer_ from "../componentes/Footer_";

function DemoPromesas() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("Esperando acción...");
  const [loading, setLoading] = useState(false);

  // 1️⃣ Promesa básica (Simulación de API)
  const promesaBasica = () => {
    setLoading(true);
    setMensaje("Procesando... ⏳");
    
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("✅ ¡Promesa Resuelta!");
      }, 2000);
    }).then((resultado) => {
      setLoading(false);
      setMensaje(resultado);
    });
  };

  // 2️⃣ Promesa con error
  const promesaConError = () => {
    setLoading(true);
    setMensaje("Intentando... ⏳");

    new Promise((_, reject) => {
      setTimeout(() => {
        reject("❌ Ocurrió un error inesperado.");
      }, 2000);
    })
      .then((resultado) => {
        setLoading(false);
        setMensaje(resultado);
      })
      .catch((error) => {
        setLoading(false);
        setMensaje(error);
      });
  };

  // 3️⃣ Uso de Async/Await con fetch()
  const obtenerDatos = async () => {
    setLoading(true);
    setMensaje("Obteniendo datos... 📡");

    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const datos = await respuesta.json();
      setLoading(false);
      setMensaje(`📦 Datos obtenidos: ${datos.title}`);
    } catch (error) {
      setLoading(false);
      setMensaje("❌ Error al obtener datos.");
    }
  };

  return (
    <div style={estiloPagina}>
      <div style={estiloRecuadro}>
        <h2 style={estiloTitulo}>⚡ Promesas en JavaScript</h2>
        <p style={{ color: "#ccc" }}>Haz clic en los botones para probar Promesas:</p>

        {/* Botones */}
        <div style={estiloBotonera}>
          <button onClick={promesaBasica} style={estiloBoton}>✅ Promesa Resuelta</button>
          <button onClick={promesaConError} style={estiloBotonError}>❌ Promesa con Error</button>
          <button onClick={obtenerDatos} style={estiloBoton}>🌍 Fetch API (Async/Await)</button>
        </div>

        {/* Estado de la Promesa */}
        <div style={estiloResultado}>
          {loading ? "⏳ Cargando..." : mensaje}
        </div>

        {/* Explicación */}
        <div style={estiloExplicacion}>
          <h3>💡 ¿Cómo funcionan las Promesas?</h3>
          <p>Las promesas permiten manejar procesos asincrónicos de manera eficiente.</p>
          <pre style={estiloCodigo}>
            {`// 1️⃣ Promesa Resuelta
new Promise((resolve) => {
  setTimeout(() => {
    resolve("✅ ¡Promesa Resuelta!");
  }, 2000);
}).then(console.log);

// 2️⃣ Promesa con Error
new Promise((_, reject) => {
  setTimeout(() => {
    reject("❌ Ocurrió un error.");
  }, 2000);
})
.catch(console.error);

// 3️⃣ Async/Await con Fetch
async function obtenerDatos() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("❌ Error en la API");
  }
}`}
          </pre>
        </div>

        {/* Botón de volver */}
        <button onClick={() => navigate(-1)} style={estiloBotonVolver}>
          🔙 Volver Atrás
        </button>
      </div>

      {/* Footer */}
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
  color: "#f1c40f",
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

const estiloBotonError = {
  ...estiloBoton,
  backgroundColor: "#e74c3c",
};

const estiloResultado = {
  marginTop: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#f1c40f",
};

const estiloExplicacion = {
  backgroundColor: "#22313f",
  padding: "20px",
  borderRadius: "8px",
  marginTop: "30px",
  color: "#fff",
  textAlign: "left",
};

const estiloCodigo = {
  backgroundColor: "#1a252f",
  padding: "10px",
  borderRadius: "5px",
  color: "#f1c40f",
  fontFamily: "monospace",
  textAlign: "left",
  overflowX: "auto",
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

export default DemoPromesas;
