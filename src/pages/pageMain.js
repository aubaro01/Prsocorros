import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from 'react-bootstrap'; // Importando os componentes Modal e Button do Bootstrap

const imageUrl = "/assets/sav1.jpg";
const FinalP = "/assets/form.png";
const modal = "/assets/form1.png";

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      nome: event.target.nome.value,
      circuito: event.target.circuito.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch("https://testedashpro.rf.gd/backend/createUser.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Inscrição enviada com sucesso!");
      } else {
        alert("Erro ao enviar inscrição.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar inscrição.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="bg-dark text-white py-4 text-center">
        <div className="container">
          <h1 className="fw-bold">SAV</h1>
          <p className="fs-1">Formação para os primeiros socorros</p>
        </div>
      </header>

      <main className="flex-grow-1">
        <section className="container text-center py-5">
          <h2 className="fw-bold">
            Bem-vindo(a) à <strong>Formação para Primeiros Socorros</strong>
          </h2>
          <h3 className="fw-bold alert alert-secondary">
            <strong>Instruções!</strong>
          </h3>
          <p className="text-muted">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-muted">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <figcaption class="blockquote-footer">
            Talvez um <cite title="Source Title">Sal 4:1</cite>
          </figcaption>
          <Button variant="btn btn-dark" onClick={() => setShowModal(true)}>
            Ver Instruções Detalhadas
          </Button>
        </section>

        {/* Image Section */}
        <section className="bg-light py-5">
          <div className="container text-center">
            <img
              src={imageUrl}
              alt="Imagem do local"
              className="img-fluid w-75 mx-auto d-block"
            />
            <p className="text-muted mt-3">
              Mapa dos pontos de exercícios<br />
              Sector A: <strong>Exercícios 1 & 2,</strong> perto dos perdidos e achados  <br />
              Sector B: <strong>Exercícios 3,</strong> perto das casas de banho<br />
              Sector C: <strong>Exercícios 4,</strong> entrada do auditório<br />
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="container py-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Inscreva-se</h2>
            <p className="text-muted">
              Preencha o formulário abaixo para criar o seu perfil para os exercícios ao longo do dia...
            </p>
          </div>

          <form className="mx-auto" style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
            {/* Nome Field */}
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input
                type="text"
                id="nome"
                className="form-control"
                placeholder="Digite o seu primeiro e último nome"
                minLength="5"
                maxLength="30"
                required
              />
            </div>

            {/* Circuito Field */}
            <div className="mb-3">
              <label htmlFor="circuito" className="form-label">Circuito</label>
              <input
                type="text"
                id="circuito"
                className="form-control"
                placeholder="Digite o seu circuito *"
                minLength="1"
                maxLength="3"
                required
              />
              <div className="form-text"><em>*</em> Números e letra.</div>
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Digite uma password"
                minLength="1"
                maxLength="10"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
              {loading ? "A Submeter..." : "Submeter Dados"}
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>
          © {new Date().getFullYear()} SAV. <br />
          Todos os direitos reservados.
        </p>
      </footer>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Instruções Detalhadas para os Exercícios</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <h4>Passos para completar os exercícios:</h4>

    <div className="mb-4">
      <br />
      <h5>1. Concluir o Exercício</h5>
      <p>
        Quando terminar cada exercício, você verá um resumo com as informações
        do exercício e um botão. Ao clicar no botão, você abrirá um formulário
        importante.
      </p>
      <img
        src={FinalP}
        alt="Exemplo de conclusão do exercício"
        className="img-fluid w-100 mt-3"
      />
    </div>

    <div className="mb-4">
      <br />
      <h5>2. Preencher o Formulário</h5>
      <p>
        No formulário, insira seu nome e a senha que você criou. Não se
        esqueça de marcar a caixa de verificação abaixo para confirmar que
        completou o exercício.
      </p>
      <img
        src={modal}
        alt="Exemplo de formulário"
        className="img-fluid w-100 mt-3"
      />
    </div>

    <div className="mb-4">
      <h5>3. Finalizar</h5>
      <p>
        Após preencher o formulário, clique em "Enviar" para concluir sua
        participação. Isso confirma que você completou todas as etapas.
      </p>
    </div>

    <div className="mt-3">
      <p>
        Se tiver dúvidas, consulte as <strong>Perguntas Frequentes</strong> ou
        entre em contato com nossa equipe de suporte.
      </p>
    </div>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModal(false)}>
      Fechar
    </Button>
  </Modal.Footer>
</Modal>



    </div>
  );
}
