import React, { useState, useEffect } from 'react';
import perfil from '../assets/perfil.png';

function Header() {
  // Estado para manejar el texto que se está escribiendo en tiempo real
  const [text, setText] = useState('');

  // Texto completo que queremos mostrar
  const fullText = '. A pasionado por crear interfaces modernas y funcionales.';

  // Velocidad de escritura (en milisegundos)
  const typingSpeed = 90;

  // useEffect para el efecto de escritura
  useEffect(() => {
    let index = 0; // Índice para recorrer el texto completo

    // Configuramos un intervalo que se ejecutará cada typingSpeed milisegundos
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        // Añadimos una letra al texto mostrado en cada iteración
        setText((prevText) => prevText + fullText[index]);
        index++; // Avanzamos al siguiente carácter
      } else {
        // Cuando terminamos de escribir todo el texto, detenemos el intervalo
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Limpiamos el intervalo si el componente se desmonta
    return () => clearInterval(typingInterval);
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente.

  return (
    <header style={{ textAlign: 'center', padding: '20px', marginTop: '80px' }}>
      {/* Contenedor de la imagen de perfil */}
      <div className="profile-container">
        <img
          src={perfil}
          alt="Foto de Perfil"
          style={{
            borderRadius: '50%', // Hace la imagen circular
            width: '150px',      // Ancho de la imagen
            height: '150px',     // Altura de la imagen
            objectFit: 'cover',  // Asegura que la imagen mantenga su proporción
          }}
        />
      </div>

      {/* Nombre y subtítulo */}
      <h1>Gaston D'Angelo</h1>
      <h2 className="gradient-text">Desarrollador Web</h2>
  

      {/* Texto animado con efecto de escritura */}
      <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
        {/* Mostramos la primera letra solo si existe */}
        {text.length > 0 && (
          <>
            <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>{text[0]}</span>
            {text.slice(1)}
          </>
        )}
      </p>

      {/* Botón para descargar el currículum */}
      <a
  href="/assets/tu-cv.pdf"
  download
  className="pulse-button" // Aplicamos la clase para el efecto
  style={{
    display: "inline-block",   // Hace que el enlace se comporte como un botón
    marginTop: "20px",         // Espacio entre el botón y el texto anterior
    padding: "10px 20px",      // Espaciado interno dentro del botón
    backgroundColor: "#2ecc71",// Color verde del fondo del botón
    color: "#fff",             // Texto blanco
    textDecoration: "none",    // Elimina el subrayado
    borderRadius: "5px",       // Bordes redondeados
    textAlign: "center",       // Centra el texto dentro del botón
  }}
>
  Descargar CV
</a>
    </header>
  );
}

export default Header;
