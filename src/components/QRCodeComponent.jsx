// QRCodeComponent.jsx
import React from 'react';
import QRCode from 'qrcode.react'; // Cambia a import { QRCode } si es necesario

const QRCodeComponent = () => {
  const qrMessage = "hola desde qr";

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Generador de QR</h2>
      <QRCode value={qrMessage} size={256} level={'H'} />
      <p>Escanea el código QR para ver el mensaje.</p>
    </div>
  );
};

export default QRCodeComponent;
