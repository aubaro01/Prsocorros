import React from 'react';
import { Link } from 'react-router-dom';

function Page2() {
  return (
    <div>
      <h1>Página 2</h1>
      <img src="https://picsum.photos/400/200?random=1" alt="Imagem aleatória" />
      <p>Texto aleatório para a página 2. Curabitur convallis magna nec ipsum varius.</p>
      <video width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <br />
      <Link to="/page3">Ir para Página 3</Link>
    </div>
  );
}

export default Page2;
