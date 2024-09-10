// src/components/MessagePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MessagePage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/message/${id}`);
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Error al cargar el mensaje');
      }
    };
    
    fetchMessage();
  }, [id]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h4>Mensaje:</h4>
      <p>{message}</p>
    </div>
  );
};

export default MessagePage;
