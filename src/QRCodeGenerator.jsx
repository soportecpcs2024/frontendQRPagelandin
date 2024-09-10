// src/QRCodeGenerator.jsx
import React, { useState } from 'react';
import * as QRCode from 'qrcode.react'; // Alternativa de importación

const messages = [
  "¡Felicidades! Has alcanzado una meta importante.",
  "¡Enhorabuena! Sigue así y lograrás más éxitos.",
  "¡Bien hecho! Tu esfuerzo está dando frutos.",
  "¡Excelente trabajo! Tu dedicación es admirable.",
  "¡Genial! Estás haciendo un gran trabajo."
];

const QRCodeGenerator = () => {
  const [message, setMessage] = useState('');

  const generateRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div>
      <h1>Generador de QR de Felicitaciones</h1>
      <button onClick={generateRandomMessage}>Generar Mensaje</button>
      {message && (
        <div>
          <QRCode value={message} />
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
