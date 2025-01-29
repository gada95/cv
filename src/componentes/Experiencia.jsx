import React, { useState } from "react";

function Experiencia() {
  const [modalContent, setModalContent] = useState(""); // Contenido del modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para mostrar/ocultar el modal

  // Función para abrir el modal
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <section style={{ padding: "80px" }}>
      <h2 className="experiencia-titulo">Experiencia Laboral</h2>
      <div style={{ marginTop: "20px" }}>
        {/* Botón para la experiencia en GEA */}
        <button
          onClick={() =>
            openModal(
              "En GEA (2020-2021), trabajé como Soporte Técnico, resolviendo problemas técnicos de usuarios y gestionando infraestructura tecnológica."
            )
          }
          className="experiencia-boton"
        >
          2020 - 2021: Soporte Técnico en GEA
        </button>
        <br />
        {/* Botón para la experiencia actual */}
        <button
          onClick={() =>
            openModal(
              "Desde 2021 a la fecha, soy Programador Web Full Stack, además de brindar soporte web y desempeñar funciones relacionadas con análisis funcional."
            )
          }
          className="experiencia-boton"
        >
          2021 - Presente: Programador Web Full Stack + Soporte Web + Funcional en Colegio de Farmaceuticos
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal} // Cierra el modal al hacer clic fuera
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro
          >
            <h3>Detalles de la Experiencia</h3>
            <p>{modalContent}</p>
            <button
              className="modal-close-button"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experiencia;
