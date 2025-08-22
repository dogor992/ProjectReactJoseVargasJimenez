import React, { useState } from "react";
import "./App.css";
import Perfil from "./Components/Perfil/Perfil.jsx";
import AgendaContactos from "./Components/AgendaContactos/AgendaContactos.jsx";

function App() {
  const [pagina, setPagina] = useState("perfil");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Aplicación en React</h1>
        <nav>
          <button onClick={() => setPagina("perfil")}>Perfil</button>
          <button onClick={() => setPagina("agenda")}>Agenda de Contactos</button>
        </nav>
      </header>

      <main>
        {pagina === "perfil" ? <Perfil /> : <AgendaContactos />}
      </main>
    </div>
  );
}

export default App;
