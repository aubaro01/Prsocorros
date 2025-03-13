import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

export default function PageEx4() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    circuito: "",
    concluido: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados enviados:", formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setFormData({ nome: "", circuito: "", concluido: false });
  };

  // Array de etapas para facilitar a navegação
  const steps = [
    { id: 1, title: "Vídeo Demonstrativo" },
    { id: 2, title: "Posição Inicial" },
    { id: 3, title: "Agachamento" },
    { id: 4, title: "Salto" },
    { id: 5, title: "Conclusão" }
  ];

  return (
    <div style={{ fontFamily: 'Georgia, serif' }}>
      {/* Header com estilo Medium */}
      <header className="py-3 border-bottom" style={{ backgroundColor: "#FFF" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>SAV</h1>
          </div>
          <div>
            <p className="mb-0" style={{ fontSize: "0.9rem", color: "#757575" }}>
              Exercício 4 - Remoção de Vitima no auditório
            </p>
          </div>
        </div>
      </header>

      <main className="container my-4">
        {/* Título do artigo estilo Medium */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="mb-3" style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "-0.03em" }}>
              Agachamento com Salto
            </h2>
            
            {/* Barra de progresso do estilo Medium */}
            <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="mb-0" style={{ fontSize: "0.9rem", color: "#757575" }}>Progresso</p>
                <p className="mb-0" style={{ fontSize: "0.9rem", color: "#757575" }}>
                  Etapa {activeStep} de {steps.length}
                </p>
              </div>
              <div className="progress" style={{ height: "4px" }}>
                <div 
                  className="progress-bar" 
                  style={{ 
                    width: `${(activeStep / steps.length) * 100}%`, 
                    backgroundColor: "#03a87c" 
                  }}
                ></div>
              </div>
            </div>
            
            {/* Navegação de etapas estilo Medium */}
            <div className="mb-5">
              <div className="d-flex flex-wrap mb-4">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="me-3 mb-2"
                    style={{
                      border: "none",
                      background: "none",
                      padding: "0.25rem 0",
                      color: activeStep === step.id ? "#03a87c" : "#757575",
                      borderBottom: activeStep === step.id ? "2px solid #03a87c" : "none",
                      fontWeight: activeStep === step.id ? "bold" : "normal",
                      fontSize: "1rem",
                      cursor: "pointer"
                    }}
                  >
                    {step.id}. {step.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Conteúdo das etapas */}
            <div className="step-content mb-5">
              {/* Etapa 1 - Vídeo */}
              {activeStep === 1 && (
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>
                    Vídeo Demonstrativo
                  </h3>
                  <div className="ratio ratio-16x9 mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/CMKw77fbkOs"
                      title="Vídeo demonstrativo do exercício"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#292929" }}>
                    Este vídeo demonstra a técnica correta para realizar o agachamento com salto.
                    Observe atentamente os movimentos antes de começar a praticar.
                  </p>
                </div>
              )}
              
              {/* Etapa 2 - Posição Inicial */}
              {activeStep === 2 && (
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>
                    Etapa 1: Posição Inicial
                  </h3>
                  <div className="mb-4 text-center">
                    <img
                      src="/imag.jpg"
                      alt="Posição Inicial"
                      className="img-fluid"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#292929" }}>
                    Fique em pé com os pés afastados na largura dos ombros e braços relaxados ao lado do corpo.
                    Esta posição é a base para um bom agachamento e proporciona estabilidade durante o exercício.
                  </p>
                </div>
              )}
              
              {/* Etapa 3 - Agachamento */}
              {activeStep === 3 && (
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>
                    Etapa 2: Agachamento
                  </h3>
                  <div className="mb-4 text-center">
                    <img
                      src="/imag.jpg"
                      alt="Agachamento"
                      className="img-fluid"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#292929" }}>
                    Dobre os joelhos e quadris, abaixando o corpo como se fosse sentar em uma cadeira invisível.
                    Mantenha o peito erguido e a coluna em posição neutra. Os joelhos devem estar alinhados com
                    os pés, sem ultrapassar a linha dos dedos.
                  </p>
                </div>
              )}
              
              {/* Etapa 4 - Salto */}
              {activeStep === 4 && (
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>
                    Etapa 3: Salto
                  </h3>
                  <div className="mb-4 text-center">
                    <img
                      src="/imag.jpg"
                      alt="Salto"
                      className="img-fluid"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#292929" }}>
                    A partir da posição de agachamento, impulsione o corpo para cima em um salto explosivo,
                    estendendo completamente os joelhos e quadris. Use os braços para ajudar no impulso,
                    movendo-os para frente e para cima. Aterrisse suavemente, voltando para a posição de agachamento,
                    amortecendo o impacto.
                  </p>
                </div>
              )}
              
              {/* Etapa 5 - Conclusão */}
              {activeStep === 5 && (
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>
                    Conclusão do Exercício
                  </h3>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#292929", marginBottom: "2rem" }}>
                    Parabéns! Você completou todas as etapas do exercício de Agachamento com Salto.
                    Este exercício é excelente para fortalecer as pernas e melhorar a explosão muscular.
                    Agora, registre sua conclusão para continuar seu progresso.
                  </p>
                  <div className="text-center">
                    <Button 
                      onClick={() => setShowModal(true)}
                      style={{ 
                        backgroundColor: "#03a87c", 
                        border: "none", 
                        borderRadius: "4px",
                        padding: "0.5rem 2rem",
                        fontSize: "1.1rem"
                      }}
                    >
                      Registrar Conclusão
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Navegação inferior */}
            <div className="d-flex justify-content-between py-3 border-top mt-5">
              <Button
                variant="link"
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                style={{ 
                  color: "#03a87c", 
                  textDecoration: "none",
                  visibility: activeStep === 1 ? "hidden" : "visible"
                }}
              >
                ← Etapa Anterior
              </Button>
              
              {activeStep < steps.length ? (
                <Button
                  variant="link"
                  onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                  style={{ color: "#03a87c", textDecoration: "none" }}
                >
                  Próxima Etapa →
                </Button>
              ) : (
                <Button
                  variant="link"
                  onClick={() => setShowModal(true)}
                  style={{ color: "#03a87c", textDecoration: "none" }}
                >
                  Concluir →
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer simples estilo Medium */}
      <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.9rem", color: "#757575" }}>
            © {new Date().getFullYear()} SAV. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Modal de Registro */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            Registrar Exercício
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                  style={{ fontSize: "1rem", padding: "0.75rem" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCircuito">
                <Form.Label>Número do Circuito</Form.Label>
                <Form.Control
                  type="number"
                  name="circuito"
                  value={formData.circuito}
                  onChange={handleChange}
                  placeholder="Digite o número do circuito"
                  min="1"
                  required
                  style={{ fontSize: "1rem", padding: "0.75rem" }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formConcluido">
                <Form.Check
                  type="checkbox"
                  name="concluido"
                  checked={formData.concluido}
                  onChange={handleChange}
                  label="Exercício concluído"
                />
              </Form.Group>
              <Button 
                type="submit" 
                style={{ 
                  backgroundColor: "#03a87c", 
                  border: "none", 
                  width: "100%",
                  padding: "0.75rem",
                  fontSize: "1rem"
                }}
              >
                Enviar
              </Button>
            </Form>
          ) : (
            <div className="text-center py-3">
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
              <h4 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
                Registro Concluído!
              </h4>
              <p className="mb-4" style={{ fontSize: "1.1rem", color: "#292929" }}>
                Seu exercício foi registrado com sucesso.
              </p>
              <Button 
                onClick={handleModalClose}
                style={{ 
                  backgroundColor: "#03a87c", 
                  border: "none", 
                  padding: "0.75rem 2rem",
                  fontSize: "1rem"
                }}
              >
                Fechar
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}