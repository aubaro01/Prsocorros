import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const imageUrl = "/assets/sav1.jpg";

export default function LandingPage() {
  const [loading, setLoading] = useState(false);

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
              Sector A: Excepteur sint occaecat cupidatat non proident <br />
              Sector B: Excepteur sint occaecat cupidatat non proident<br />
              Sector C: Excepteur sint occaecat cupidatat non proident <br />
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
    </div>
  );
}