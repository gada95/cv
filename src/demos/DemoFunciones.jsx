import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer_ from "../componentes/Footer_";

function DemoFunciones() {
  const navigate = useNavigate();
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  // 1️⃣ Función tradicional
  function sumar(a, b) {
    return a + b;
  }

  // 2️⃣ Función de flecha
  const multiplicar = (a, b) => a * b;

  // 3️⃣ Función con retorno de string
  const compararNumeros = (a, b) => {
    if (a > b) return "El primer número es mayor";
    if (a < b) return "El segundo número es mayor";
    return "Los números son iguales";
  };

  // 📌 Función para manejar la ejecución de los cálculos
  const calcular = (tipo) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("❌ Ingresa valores numéricos válidos.");
      return;
    }

    if (tipo === "sumar") setResultado(`🧮 Suma: ${sumar(n1, n2)}`);
    if (tipo === "multiplicar") setResultado(`✖️ Multiplicación: ${multiplicar(n1, n2)}`);
    if (tipo === "comparar") setResultado(`🔍 Comparación: ${compararNumeros(n1, n2)}`);
  };

  return (
    <div style={estiloPagina}>
      <div style={estiloRecuadro}>
        <h2 style={estiloTitulo}>🧩 Funciones en JavaScript</h2>
        <p style={{ color: "#ccc" }}>Ingresa dos números y selecciona una operación:</p>

        {/* Entrada de números */}
        <div style={estiloInputs}>
          <input
            type="number"
            placeholder="Número 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={estiloInput}
          />
          <input
            type="number"
            placeholder="Número 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={estiloInput}
          />
        </div>

        {/* Botones de funciones */}
        <div style={estiloBotonera}>
          <button onClick={() => calcular("sumar")} style={estiloBoton}>➕ Sumar</button>
          <button onClick={() => calcular("multiplicar")} style={estiloBoton}>✖️ Multiplicar</button>
          <button onClick={() => calcular("comparar")} style={estiloBoton}>🔍 Comparar</button>
        </div>

        {/* Resultado de la operación */}
        <div style={estiloResultado}>{resultado}</div>

        {/* Explicación del código */}
        <div style={estiloExplicacion}>
          <h3>💡 ¿Cómo funcionan estas funciones?</h3>
          <p>
            En este ejemplo, usamos tres tipos de funciones en JavaScript:
          </p>
          <pre style={estiloCodigo}>
            {`// 1️⃣ Función tradicional
function sumar(a, b) {
  return a + b;
}

// 2️⃣ Función de flecha
const multiplicar = (a, b) => a * b;

// 3️⃣ Función con retorno de string
const compararNumeros = (a, b) => {
  if (a > b) return "El primer número es mayor";
  if (a < b) return "El segundo número es mayor";
  return "Los números son iguales";
};`}
          </pre>
        </div>

        {/* Botón de volver */}
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

const estiloInputs = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "15px",
};

const estiloInput = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  textAlign: "center",
  fontSize: "16px",
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

export default DemoFunciones;
