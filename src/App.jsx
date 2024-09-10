// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessagePage from './components/MessagePage';
import NotFoundPage from './components/NotFoundPage'; // Opcional, para manejar 404

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MessagePage id="1" />} /> {/* Ruta raíz para pruebas */}
        <Route path="/message/:id" element={<MessagePage />} /> {/* Ruta dinámica para mensajes */}
        <Route path="*" element={<NotFoundPage />} /> {/* Página 404 opcional */}
      </Routes>
    </Router>
  );
}

export default App;
