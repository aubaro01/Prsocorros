import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ExclamationTriangleFill } from "react-bootstrap-icons";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      {/* Ícone de erro */}
      <ExclamationTriangleFill size={80} className="text-danger mb-3" />

      {/* Mensagem de erro */}
      <h1 className="fw-bold">Oops! Algo deu errado.</h1>
      <p className="text-muted">
        A página que você procura não existe ou ocorreu um erro inesperado.
      </p>

      {/* Botão para voltar */}
      <Button variant="primary" onClick={() => navigate("/")}>
        Voltar para a Página Inicial
      </Button>
    </Container>
  );
}

