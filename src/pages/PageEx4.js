import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

export default function PageSBV() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    pass: "",
    concluido: false,
  });
  const [submitted, setSubmitted] = useState(false);

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
    setFormData({ nome: "", pass: "", concluido: false });
  };

  // Array com as etapas do SBV (excluindo Transporte em Maca)
  const steps = [
    {
      id: 0,
      title: "Vídeo introdutório",
      content: (
        <>
          <div className="ratio ratio-16x9 mb-4">
            <iframe src="--" title="Vídeo demonstrativo do exercício" allowFullScreen></iframe>
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Assista ao vídeo para conhecer a técnica correta.
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: "Condições de Segurança",
      content: (
        <div className="row">
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Dobre os joelhos e quadris, abaixando o corpo como se fosse sentar em uma cadeira invisível.
            </p>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              <li className="mb-2">Mantenha o peito erguido</li>
              <li className="mb-2">Coluna em posição neutra</li>
              <li className="mb-2">Joelhos alinhados com os pés</li>
              <li>Não ultrapasse a linha dos dedos com os joelhos</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/sbv1.png"
              alt="Agachamento"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Avaliar Consciência",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Para o transporte de uma vítima inconsciente, siga os passos:
            </p>

            {/* Passo 1 - Avaliar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/sbv2.png"
                  alt="Passo 1: Avaliar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 1 - Avaliar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">
                    Verifique se a vítima está usando algo que possa colocá-la em perigo.
                  </li>
                  <li className="mb-2">
                    Certifique-se de que o ambiente é seguro para o transporte.
                  </li>
                  <li>
                    Observe riscos como tráfego ou incêndio.
                  </li>
                </ul>
              </div>
            </div>

            {/* Passo 2 - Posicionar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/sbv3.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 2 - Posicionar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Coloque a vítima em uma posição estável, deitada de costas.</li>
                  <li className="mb-2">Certifique-se do alinhamento da cabeça, pescoço e coluna.</li>
                  <li>Evite movimentos bruscos.</li>
                </ul>
              </div>
            </div>

            {/* Passo 3 - Transportar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/sbv4.png"
                  alt="Passo 3: Transportar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 3 - Transportar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Utilize técnicas adequadas, como o arrastamento ou dois socorristas.</li>
                  <li className="mb-2">Mantenha a vítima estável durante o transporte.</li>
                  <li>Leve a vítima para um local seguro ou aguarde socorro profissional.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Posição Inicial",
      content: (
        <>
          <div className="text-center mb-4">
            <img
              src="/assets/sbv7.png"
              alt="Posição Inicial"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Fique em pé com os pés afastados na largura dos ombros e braços relaxados. Essa é a base para um bom agachamento e estabilidade.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Vídeos Adicionais de Treinamento",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Assista aos vídeos adicionais para complementar seu treinamento.
            </p>
            <div className="mb-5">
              <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Técnicas Avançadas de Transporte</h4>
              <div className="ratio ratio-16x9 mb-3">
                <iframe src="--" title="Técnicas avançadas de transporte" allowFullScreen></iframe>
              </div>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef" }}>
                Este vídeo apresenta técnicas avançadas para o transporte de vítimas em diversas situações.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="exercise-page">
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
            <div className="py-1 px-3" style={{ border: "1px solid rgba(31, 26, 26, 0.3)", borderRadius: "4px" }}>
              Exercício SBV
            </div>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Suporte Básico de Vida (SBV)
          </p>
        </div>
      </header>

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
            Suporte Básico de Vida
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Lições para avaliar e transportar vítimas com segurança.
          </p>
        </div>

        {steps.map((step) => (
          <section key={step.id} className="mb-5 p-4 rounded" style={{ backgroundColor: "#343a40" }}>
            <div className="d-flex align-items-center mb-4">
              <div
                style={{
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#f39c12",
                  color: "#343a40",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginRight: "15px",
                }}
              >
                {step.id}
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  margin: 0,
                  color: "#ecf0f1",
                  borderLeft: "3px solid #f39c12",
                  paddingLeft: "15px",
                }}
              >
                {step.title}
              </h3>
            </div>
            {step.content}
          </section>
        ))}

        <section className="p-4 mb-5 rounded" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h4 style={{ fontSize: "1.2rem", fontWeight: "600", textAlign: "center", marginBottom: "1.5rem", color: "#ecf0f1" }}>
            Resumo do Exercício
          </h4>
          {/* Resumo resumido – ajuste conforme necessário */}
          <div className="text-center">
            <Button
              onClick={() => setShowModal(true)}
              style={{
                backgroundColor: "#f39c12",
                border: "none",
                borderRadius: "4px",
                padding: "0.75rem 2.5rem",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Registrar Conclusão
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.9rem", color: "#757575" }}>
            © {new Date().getFullYear()} SAV. <br />Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold text-dark">Registrar Exercício</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label className="fw-semibold">Nome Completo</Form.Label>
                <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome completo" required className="p-2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPass">
                <Form.Label className="fw-semibold">Código de Acesso</Form.Label>
                <Form.Control type="password" name="pass" value={formData.pass} onChange={handleChange} placeholder="Digite seu código de acesso" required className="p-2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConcluido">
                <Form.Check type="checkbox" name="concluido" checked={formData.concluido} onChange={handleChange} label="Exercício concluído" className="fw-semibold" />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn btn-success fw-bold px-4 py-2">
                  Enviar
                </Button>
              </div>
            </Form>
          ) : (
            <div className="text-center">
              <h5 className="text-success fw-bold">Registro concluído com sucesso!</h5>
              <Button onClick={handleModalClose} className="btn btn-secondary mt-3 px-4">
                Fechar
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
