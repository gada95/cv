import React from "react";

function Footer_() {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "#ecf0f1",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Acerca de mí */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3>Acerca de mí</h3>
          <p>
            Desarrollador apasionado por crear interfaces modernas y
            funcionales. ¡Hablemos sobre cómo puedo ayudarte!
          </p>
        </div>

        {/* Redes Sociales */}
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            {/*Linkedin*/}
        <a
  href="https://www.linkedin.com/in/gaston-d-angelo-010a1017a/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    width: "30px",
    height: "30px",
    margin: "0 10px",
  }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
    alt="LinkedIn"
    style={{ width: "100%", height: "100%" }}
  />
</a>


          {/* WhatsApp */}
          <a
  href="https://wa.me/543517599119?text=Hola%20Gaston,%20vi%20tu%20curr%C3%ADculum%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    width: "30px",
    height: "30px",
    margin: "0 10px",
  }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    style={{ width: "100%", height: "100%" }}
  />
</a>

        </div>
      </div>

      {/* Derechos reservados */}
      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        © 2025 Gaston D'Angelo. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer_;
