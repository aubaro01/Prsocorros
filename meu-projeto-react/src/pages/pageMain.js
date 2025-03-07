import React from 'react';
import { Link } from 'react-router-dom';

function pageMain() {
  return (
    <div>
      <h1>Página 1</h1>
      <img src="https://via.placeholder.com/400" alt="Imagem aleatória" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem.</p>
      <video width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <br />
      <Link to="/page2">Ir para Página 2</Link>
    </div>
  );
}

export default pageMain;
