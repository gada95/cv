import React, { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});

  // Función para manejar cambios en los inputs con validaciones dinámicas
  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "nombre") {
      if (value.length > 2) {
        error = ""; // Válido
      } else {
        error = "Debe contener al menos 3 caracteres.";
      }
    }

    if (name === "email") {
      if (/\S+@\S+\.\S+/.test(value)) {
        error = ""; // Válido
      } else {
        error = "Debe ser un email válido.";
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrores({ ...errores, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (errores.nombre || errores.email) {
      alert("Corrige los errores antes de enviar.");
      return;
    }

    try {
      const response = await fetch("https://cv-backend-rjbm.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Correo enviado correctamente.");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Error al enviar el correo.");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un problema al enviar el correo.");
    }
  };

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2 className="experiencia-titulo">Escríbeme</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          textAlign: "left",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#2c3e50",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Campo Nombre */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="nombre" style={{ color: "#ecf0f1", fontWeight: "bold" }}>Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: `2px solid ${errores.nombre ? "#e74c3c" : formData.nombre.length > 2 ? "#2ecc71" : "#34495e"}`,
              outline: "none",
              transition: "border 0.3s ease",
              boxSizing: "border-box",
            }}
          />
          {errores.nombre && <small style={{ color: "#e74c3c" }}>{errores.nombre}</small>}
        </div>

        {/* Campo Email */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ color: "#ecf0f1", fontWeight: "bold" }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: `2px solid ${errores.email ? "#e74c3c" : formData.email.match(/\S+@\S+\.\S+/) ? "#2ecc71" : "#34495e"}`,
              outline: "none",
              transition: "border 0.3s ease",
              boxSizing: "border-box",
            }}
          />
          {errores.email && <small style={{ color: "#e74c3c" }}>{errores.email}</small>}
        </div>

        {/* Campo Mensaje */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="mensaje" style={{ color: "#ecf0f1", fontWeight: "bold" }}>Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #34495e",
              outline: "none",
              transition: "border 0.3s ease",
              resize: "none",
              boxSizing: "border-box",
            }}
          ></textarea>
        </div>

        {/* Botón Enviar */}
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#2ecc71",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}

export default Contacto;
