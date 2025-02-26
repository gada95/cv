import React from "react";

function Footer_({ seccion }) {
  return (
    <footer style={estiloFooter}>
      {/* Si la sección es "javascript", mostramos su footer especial */}
      {seccion === "javascript" && (
        <h2 style={estiloTextoJavascript}>⚡ JAVASCRIPT ⚡</h2>
      )}

      {/* Si la sección es "tailwind", mostramos su footer especial */}
      {seccion === "tailwind" && (
        <h2 style={estiloTextoTailwind}>🌊 TAILWIND CSS 🌊</h2>
      )}

      {/* Si no hay una sección específica, mostramos el footer general */}
      {!seccion && (
        <div style={estiloGeneral}>
          <h3>Acerca de mí</h3>
          <p>
            Desarrollador apasionado por crear interfaces modernas y funcionales.
            ¡Hablemos sobre cómo puedo ayudarte!
          </p>

          {/* Redes Sociales */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gaston-d-angelo-010a1017a/"
              target="_blank"
              rel="noopener noreferrer"
              style={iconoRed}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn"
                style={estiloIcono}
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/543517599119?text=Hola%20Gaston,%20vi%20tu%20curr%C3%ADculum%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
              target="_blank"
              rel="noopener noreferrer"
              style={iconoRed}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={estiloIcono}
              />
            </a>
          </div>

          <p style={{ marginTop: "20px", fontSize: "14px" }}>
            © 2025 Gaston D'Angelo. Todos los derechos reservados.
          </p>
        </div>
      )}
    </footer>
  );
}

// 🎨 **Estilos**
const estiloFooter = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#2c3e50",
  color: "#fff",
  position: "relative",
  bottom: "0",
  width: "100%",
  fontSize: "18px",
  fontWeight: "bold",
};

const estiloTextoJavascript = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#f1c40f",
  textShadow: "2px 2px 5px rgba(255, 255, 0, 0.7)",
};

const estiloTextoTailwind = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#38bdf8",
  textShadow: "2px 2px 5px rgba(56, 189, 248, 0.7)",
};

const estiloGeneral = {
  padding: "20px",
};

const iconoRed = {
  display: "inline-block",
  width: "30px",
  height: "30px",
  margin: "0 10px",
};

const estiloIcono = {
  width: "100%",
  height: "100%",
};

export default Footer_;
