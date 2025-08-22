import React from "react";
import "../Perfil/Perfil.css"; 

function Perfil() {
  return (
    <div className="perfil-container">
      {/* Portada */}
      <div className="perfil-portada">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413"
          alt="Portada"
        />
      </div>

      {/* Foto de perfil */}
      <div className="perfil-info">
        <div className="perfil-foto">
          <img
            src="https://i.pravatar.cc/200"
            alt="Foto de perfil"
          />
        </div>
        <h2 className="perfil-nombre">Jose David Vargas Jimenez</h2>
        <p className="perfil-descripcion">
          Soy estudiante de desarrollo web y me gusta programar en React.
        </p>
      </div>

      {/* Personaje favorito */}
      <div className="personaje-favorito">
        <h3>🎮 Mi personaje favorito</h3>
        <div className="personaje-card">
          <img
            src="https://media.vandal.net/m/27407/god-of-war-201711112176_1.jpg"
            alt="Kratos"
          />
          <p>
            <strong>Kratos</strong> – El Dios de la Guerra, un personaje
            poderoso y con una historia épica.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;