import React from 'react';
import { Link } from 'react-router-dom';

function Page4() {
  return (
    <div>
      <h1>Página 4</h1>
      <img src="https://picsum.photos/400/200?random=3" alt="Imagem aleatória" />
      <p>Última página! Texto aleatório para a página 4. Praesent suscipit lorem nec.</p>
      <video width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <br />
      <Link to="/">Voltar para Página 1</Link>
    </div>
  );
}

export default Page4;
