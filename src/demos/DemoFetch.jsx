import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer_ from "../componentes/Footer_";

function DemoFetch() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener datos de la API
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Error al obtener los datos.");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Llamar a la API cuando se carga la página
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={estiloPagina}>
      <div style={estiloRecuadro}>
        <h2 style={estiloTitulo}>🌍 Fetch API - Obtener Datos</h2>
        <p style={{ color: "#ccc" }}>Haz clic en el botón para obtener datos de una API pública.</p>

        {/* Botón para actualizar datos */}
        <button onClick={fetchData} style={estiloBoton}>
          🔄 Obtener Nuevos Datos
        </button>

        {/* Mostrar estado de carga */}
        {loading && <p style={estiloCarga}>⏳ Cargando datos...</p>}

        {/* Mostrar error si ocurre */}
        {error && <p style={estiloError}>❌ Error: {error}</p>}

        {/* Mostrar datos obtenidos */}
        {data && (
          <div style={estiloLista}>
            {data.map((user) => (
              <div key={user.id} style={estiloUsuario}>
                <h3>{user.name}</h3>
                <p>📧 {user.email}</p>
                <p>📍 {user.address.city}</p>
              </div>
            ))}
          </div>
        )}

        {/* Sección de explicación de la API */}
        <div style={estiloExplicacion}>
          <h3>📡 ¿De dónde obtenemos los datos?</h3>
          <p>
            Estamos obteniendo datos de una API pública llamada{" "}
            <a
              href="https://jsonplaceholder.typicode.com/users"
              target="_blank"
              rel="noopener noreferrer"
              style={estiloEnlace}
            >
              JSONPlaceholder
            </a>.
            Esta API nos proporciona datos ficticios para pruebas y desarrollo.
          </p>

          <h4>🔍 URL de la API:</h4>
          <p style={estiloCodigo}>
            https://jsonplaceholder.typicode.com/users
          </p>

          <h4>💻 Código utilizado para la solicitud:</h4>
          <pre style={estiloCodigo}>
            {`fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`}
          </pre>
        </div>

        {/* Botón para volver */}
        <button onClick={() => navigate(-1)} style={estiloBotonVolver}>
          🔙 Volver Atrás
        </button>
      </div>

      {/* Footer personalizado */}
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
  marginBottom: "15px",
};

const estiloCarga = {
  color: "#f1c40f",
  fontSize: "18px",
  fontWeight: "bold",
};

const estiloError = {
  color: "#e74c3c",
  fontSize: "18px",
  fontWeight: "bold",
};

const estiloLista = {
  marginTop: "20px",
  textAlign: "left",
  maxHeight: "300px",
  overflowY: "auto",
  padding: "10px",
};

const estiloUsuario = {
  backgroundColor: "#34495e",
  padding: "15px",
  borderRadius: "8px",
  margin: "10px 0",
  color: "#fff",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const estiloExplicacion = {
  backgroundColor: "#22313f",
  padding: "20px",
  borderRadius: "8px",
  marginTop: "30px",
  color: "#fff",
  textAlign: "left",
};

const estiloEnlace = {
  color: "#2ecc71",
  textDecoration: "none",
  fontWeight: "bold",
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

export default DemoFetch;
