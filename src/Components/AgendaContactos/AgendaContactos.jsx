import React, { useState } from "react";
import "./AgendaContactos.css";

function AgendaContactos() {
  const [contactos, setContactos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [nuevo, setNuevo] = useState({ nombre: "", correo: "", telefono: "", direccion: "" });

  const agregarContacto = () => {
    if (!nuevo.nombre || !nuevo.correo || !nuevo.telefono || !nuevo.direccion) {
      alert("Todos los campos son obligatorios");
      return;
    }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(nuevo.correo)) {
    alert("Por favor ingrese un email válido");
    return;
  }
    setContactos([...contactos, nuevo]);
    setNuevo({ nombre: "", correo: "", telefono: "", direccion: "" });
  };

  const eliminarContacto = (index) => {
    setContactos(contactos.filter((_, i) => i !== index));
  };

  const contactosFiltrados = contactos.filter((c) =>
    c.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="agenda-container">
      <h2 className="agenda-title">📒 Contactos Importantes</h2>

      <input
        type="text"
        className="agenda-search"
        placeholder="🔍 Buscar por nombre..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <div className="formulario">
        <h3>Agregar nuevo contacto</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Número"
          value={nuevo.telefono}
          onChange={(e) => setNuevo({ ...nuevo, telefono: e.target.value })}
        />
        <input
          type="text"
          placeholder="Dirección"
          value={nuevo.direccion}
          onChange={(e) => setNuevo({ ...nuevo, direccion: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={nuevo.correo}
          onChange={(e) => setNuevo({ ...nuevo, correo: e.target.value })}
        />
        <button className="btn-agregar" onClick={agregarContacto}>
          ➕ Agregar
        </button>
      </div>

      <div className="lista-contactos">
        {contactosFiltrados.length === 0 ? (
          <p className="vacio">No hay contactos registrados 📭</p>
        ) : (
          contactosFiltrados.map((c, i) => (
            <div className="contacto-card" key={i}>
              <div className="contacto-info">
                <p><span className="label nombre">NOMBRE:</span> {c.nombre}</p>
                <p><span className="label numero">NUMERO:</span> {c.telefono}</p>
                <p><span className="label direccion">DIRECCIÓN:</span> {c.direccion}</p>
                <p><span className="label email">EMAIL:</span> {c.correo}</p>
              </div>
              <button className="btn-eliminar" onClick={() => eliminarContacto(i)}>
                ❌ Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AgendaContactos;