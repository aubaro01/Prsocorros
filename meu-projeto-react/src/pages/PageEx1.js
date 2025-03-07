import React from 'react';
import { Link } from 'react-router-dom';

function Page1() {
  return (
    <div>
      <h1>Página 1</h1>
      <div className="image-container">
        <img src="https://via.placeholder.com/400" alt="Imagem aleatória" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem.</p>
      <video width="100%" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <Link className="link-button" to="/page2">Ir para Página 2</Link>
    </div>
  );
}

export default Page1;
