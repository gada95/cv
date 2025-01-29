import React from "react";

function Skills() {
  const habilidades = [
    { nombre: "React", icono: "⚛️" },
    { nombre: "JavaScript", icono: "📜" },
    { nombre: "HTML & CSS", icono: "🎨" },
    { nombre: "Redux", icono: "🔄" },
    { nombre: "Tailwind CSS", icono: "🌟" },
    { nombre: "Next.js", icono: "⏭️" },
    { nombre: "Figma", icono: "🎨" },
    { nombre: "PHP", icono: "🐘" },
    { nombre: "SQL", icono: "💾" },
    { nombre: "Git", icono: "🔧" },
  ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2 className="experiencia-titulo">Habilidades</h2>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {habilidades.map((habilidad, index) => (
          <div className="habilidad-tarjeta" key={index}>
            {/* Icono de la habilidad */}
            <i>{habilidad.icono}</i>
            {/* Nombre de la habilidad */}
            <h3>{habilidad.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
