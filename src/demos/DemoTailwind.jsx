import React from "react";
import { useNavigate } from "react-router-dom";

function DemoTailwind() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white pt-20">
      {/* Contenedor principal con borde resaltado */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-3xl text-center border border-cyan-400">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          🌊 Experiencia con Tailwind CSS
        </h2>
        <p className="text-gray-300 mb-6">
          Aprende a utilizar Tailwind CSS con ejemplos interactivos.
        </p>

        {/* Secciones de ejemplos */}
        <div className="space-y-6">
          {/* Botón Estilizado */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              🎨 Botones Estilizados
            </h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all">
              ¡Haz clic aquí!
            </button>
          </div>

          {/* Tarjeta de Presentación */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              📝 Tarjeta de Presentación
            </h3>
            <div className="bg-gray-600 p-4 rounded shadow-md text-white">
              ¡Soy una tarjeta con Tailwind!
            </div>
          </div>

          {/* Sistema de Grid */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              🏗️ Sistema de Grid
            </h3>
            <div className="grid grid-cols-3 gap-4 p-2 bg-gray-600 rounded-lg text-center">
              <div className="bg-gray-500 p-2 rounded">1</div>
              <div className="bg-gray-500 p-2 rounded">2</div>
              <div className="bg-gray-500 p-2 rounded">3</div>
            </div>
          </div>

          {/* Animaciones */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              🎭 Animaciones
            </h3>
            <p className="animate-bounce bg-purple-500 p-3 rounded-md text-white inline-block">
              ¡Estoy rebotando!
            </p>
          </div>
        </div>

        {/* Botón de Volver */}
        <button
          onClick={() => navigate(-1)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-6 transition-all"
        >
          🔙 Volver Atrás
        </button>
      </div>

      {/* Footer Específico de Tailwind */}
      <footer className="mt-10 w-full bg-gray-800 py-4 text-center">
        <h2 className="text-cyan-400 text-xl font-bold">🌊 TAILWIND CSS 🌊</h2>
      </footer>
    </div>
  );
}

export default DemoTailwind;
