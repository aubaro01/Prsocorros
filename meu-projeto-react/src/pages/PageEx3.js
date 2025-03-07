import React from 'react';
import { Link } from 'react-router-dom';

function Page3() {
  return (
    <div>
      <h1>Página 3</h1>
      <img src="https://picsum.photos/400/200?random=2" alt="Imagem aleatória" />
      <p>Mais um texto aleatório para a página 3. Nam vel dui sit amet elit fermentum.</p>
      <video width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <br />
      <Link to="/page4">Ir para Página 4</Link>
    </div>
  );
}

export default Page3;
