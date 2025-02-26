import React from "react";
import { Link } from "react-router-dom"; // Importa React Router para navegación

function Skills() {
  const habilidades = [
    { nombre: "JavaScript", icono: "📜", ruta: "/javascript" },
    { nombre: "React", icono: "⚛️", ruta: "/react" },
    { nombre: "HTML & CSS", icono: "🎨", ruta: "/html-css" },
    { nombre: "Redux", icono: "🔄", ruta: "/redux" },
    { nombre: "Tailwind CSS", icono: "🌟", ruta: "/tailwind" },
    { nombre: "Next.js", icono: "⏭️", ruta: "/nextjs" },
    { nombre: "Figma", icono: "🎨", ruta: "/figma" },
    { nombre: "PHP", icono: "🐘", ruta: "/php" },
    { nombre: "SQL", icono: "💾", ruta: "/sql" },
    { nombre: "Git", icono: "🔧", ruta: "/git" },
  ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2 className="experiencia-titulo">Habilidades</h2>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px" }}>
        {habilidades.map((habilidad, index) => (
          habilidad.ruta ? (
            <Link to={habilidad.ruta} key={index} style={{ textDecoration: "none" }}>
              <div className="habilidad-tarjeta">
                <i style={{ fontSize: "2rem" }}>{habilidad.icono}</i>
                <h3>{habilidad.nombre}</h3>
              </div>
            </Link>
          ) : (
            <div className="habilidad-tarjeta" key={index}>
              <i style={{ fontSize: "2rem" }}>{habilidad.icono}</i>
              <h3>{habilidad.nombre}</h3>
            </div>
          )
        ))}
      </div>
    </section>
  );
}

export default Skills;
