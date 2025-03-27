import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

export default function CombinedPage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    codigo: "",
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
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setFormData({ nome: "", codigo: "", concluido: false });
  };

  // Conteúdo do exercício DVA
  const stepsDVA = [
    {
      id: 0,
      title: "Vídeo Instrutivo",
      content: (
        <>
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="--"
              title="Vídeo demonstrativo do exercício"
              allowFullScreen
            ></iframe>
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Este vídeo demonstra a técnica correta para realizar o exercício.
            <br />
            Observe atentamente os movimentos antes de começar a praticar.
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: "Encorajar Tossir",
      content: (
        <div className="row align-items-center">
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Enquanto a vítima conseguir tossir, encoraje a tosse na tentativa de
              expelir o corpo estranho.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/dva1.png"
              alt="Encorajar Tossir"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Pancadas Interescapulares",
      content: (
        <div className="row align-items-center">
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Se a vítima não conseguir tossir, aplique cinco (5) pancadas nas costas.
            </p>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              <li className="mb-2">Mantenha a vítima longe de si</li>
              <li className="mb-2">Coloque-se em uma posição de segurança</li>
              <li className="mb-3">
                Deixe os seus pés bem firmes no chão, um pé à frente e outro atrás
              </li>
              <li className="mb-2">Joelhos alinhados com os pés</li>
              <li>Não ultrapasse a linha dos dedos com os joelhos</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/dva2.png"
              alt="Pancadas Interescapulares"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Manobra de Heimlich",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.7",
                color: "#e9ecef",
                marginBottom: "2rem",
              }}
            >
              A manobra de Heimlich é uma técnica de primeiros socorros usada para
              desobstruir as vias aéreas de uma pessoa que está engasgada. Siga os
              passos abaixo:
            </p>

            {/* Passo 1 */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/dva3.png"
                  alt="Passo 1: Posicionar-se atrás da vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 1</h4>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  Posicione-se atrás da vítima e circunde o abdômen dela com os
                  seus braços.
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/dva4.png"
                  alt="Passo 2: Posição de segurança"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 2</h4>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  Feche o punho de uma mão e posicione-o acima do umbigo da vítima,
                  com o polegar voltado contra o abdômen.
                </p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/dva5.png"
                  alt="Passo 3: Posicionar os pés"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 3</h4>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  Sobreponha o punho da 2ª mão sobre o punho da 1ª mão e aplique uma
                  compressão rápida para dentro e para cima.
                </p>
              </div>
            </div>

            {/* Passo 4 */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/dva6.png"
                  alt="Passo 4: Alinhar joelhos"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 4</h4>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  Mantenha os joelhos alinhados com os pés, sem ultrapassar a linha dos
                  dedos.
                </p>
              </div>
            </div>

            {/* Lembrete */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-12">
                <div
                  className="alert alert-warning"
                  role="alert"
                  style={{
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    border: "none",
                    padding: "1.5rem",
                    borderRadius: "8px",
                  }}
                >
                  <h5
                    className="alert-heading"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Lembre-se:
                  </h5>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.7",
                      marginBottom: "0",
                      color: "#2c3e50",
                    }}
                  >
                    Repita até 5 vezes este processo. Intercale as pancadas nas costas
                    com as compressões abdominais até a situação resolver-se ou a vítima
                    ficar inconsciente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Em caso de vítima inconsciente",
      content: (
        <div className="row align-items-center g-4">
          <div className="col-lg-6 order-lg-1 order-2">
            <div
              className="emergency-steps p-3 p-md-4 rounded-3"
              style={{
                backgroundColor: "rgba(30, 30, 30, 0.8)",
                borderLeft: "4px solid #f39c12",
              }}
            >
              <h3 className="text-warning mb-3 fw-bold">Procedimento:</h3>
              <ul
                className="step-list ps-3"
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  color: "#ffffff",
                }}
              >
                <li className="mb-2 d-flex align-items-start">
                  <span className="badge bg-warning text-dark me-2 mt-1">
                    1
                  </span>
                  <span>
                    Ligue imediatamente para o{" "}
                    <strong className="text-warning">112</strong>
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="badge bg-warning text-dark me-2 mt-1">
                    2
                  </span>
                  <span>
                    Inicie o <strong>suporte básico de vida.</strong>
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="badge bg-warning text-dark me-2 mt-1">
                    3
                  </span>
                  <span>Siga sempre as instruções das autoridades</span>
                </li>
              </ul>
              <div className="mt-4 alert alert-warning border-warning">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                <span style={{ color: "#000000" }}>
                  Não mova a vítima sem necessidade!
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-center">
            <img
              src="/assets/emerNumber.png"
              alt="Procedimento para vítima inconsciente"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "320px",
                border: "3px solid #f39c12",
                boxShadow: "0 4px 12px rgba(243, 156, 18, 0.3)",
              }}
            />
          </div>
        </div>
      ),
    },
  ];

  // Conteúdo do exercício PLS
  const stepsPLS = [
    {
      id: 0,
      title: "Vídeo introdutório",
      content: (
        <>
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="--"
              title="Vídeo demonstrativo do exercício"
              allowFullScreen
            ></iframe>
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Este vídeo demonstra a técnica correta para realizar o exercício.
            Observe atentamente os movimentos antes de começar a praticar.
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
              Dobre os joelhos e quadris, abaixando o corpo como se fosse sentar em
              uma cadeira invisível.
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
              src="/assets/pls1.png"
              alt="Ver se tem condições para socorrer"
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
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.7",
                color: "#e9ecef",
                marginBottom: "2rem",
              }}
            >
              Para o transporte de uma vítima inconsciente, há vários cuidados a serem
              tomados. Siga os passos abaixo:
            </p>
            {/* Passo 1 - Avaliar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/pls2.png"
                  alt="Passo 1: Avaliar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>
                  Passo 1 - Avaliar
                </h4>
                <ul
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  <li className="mb-2">
                    Verifique se a vítima está usando algo que possa colocá-la em
                    perigo (ex.: objetos pontiagudos, acessórios).
                  </li>
                  <li className="mb-2">
                    Certifique-se de que o ambiente é seguro para realizar o
                    transporte.
                  </li>
                  <li>
                    Verifique se há riscos adicionais, como tráfego de veículos ou
                    incêndio.
                  </li>
                </ul>
              </div>
            </div>
            {/* Passo 2 - Posicionar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/pls3.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>
                  Passo 2 - Posicionar
                </h4>
                <ul
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  <li className="mb-2">
                    Coloque a vítima em uma posição estável, de preferência deitada
                    de costas.
                  </li>
                  <li className="mb-2">
                    Certifique-se de que a cabeça, o pescoço e a coluna estão
                    alinhados.
                  </li>
                  <li>
                    Evite movimentos bruscos que possam agravar lesões.
                  </li>
                </ul>
              </div>
            </div>
            {/* Passo 3 - Transportar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/pls4.png"
                  alt="Passo 3: Transportar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>
                  Passo 3 - Transportar
                </h4>
                <ul
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  <li className="mb-2">
                    Use técnicas adequadas para levantar a vítima, como o método de
                    arrastamento ou a técnica de dois socorristas.
                  </li>
                  <li className="mb-2">
                    Mantenha a vítima estável durante o transporte, evitando
                    movimentos desnecessários.
                  </li>
                  <li>
                    Leve a vítima para um local seguro ou aguarde a chegada de
                    socorro profissional.
                  </li>
                </ul>
              </div>
            </div>
            {/* Repetição de Passos (para reforço) */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/pls5.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>
                  Passo 2 - Posicionar
                </h4>
                <ul
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  <li className="mb-2">
                    Coloque a vítima em uma posição estável, de preferência deitada
                    de costas.
                  </li>
                  <li className="mb-2">
                    Certifique-se de que a cabeça, o pescoço e a coluna estão
                    alinhados.
                  </li>
                  <li>
                    Evite movimentos bruscos que possam agravar lesões.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/pls6.png"
                  alt="Passo 3: Transportar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>
                  Passo 3 - Transportar
                </h4>
                <ul
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  <li className="mb-2">
                    Use técnicas adequadas para levantar a vítima, como o método de
                    arrastamento ou a técnica de dois socorristas.
                  </li>
                  <li className="mb-2">
                    Mantenha a vítima estável durante o transporte, evitando
                    movimentos desnecessários.
                  </li>
                  <li>
                    Leve a vítima para um local seguro ou aguarde a chegada de
                    socorro profissional.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/pls7.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>
                  Passo 2 - Posicionar
                </h4>
                <ul
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#e9ecef",
                  }}
                >
                  <li className="mb-2">
                    Coloque a vítima em uma posição estável, de preferência deitada
                    de costas.
                  </li>
                  <li className="mb-2">
                    Certifique-se de que a cabeça, o pescoço e a coluna estão
                    alinhados.
                  </li>
                  <li>
                    Evite movimentos bruscos que possam agravar lesões.
                  </li>
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
              src="/assets/pls1.png"
              alt="Posição Inicial"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Fique em pé com os pés afastados na largura dos ombros e braços relaxados
            ao lado do corpo. Esta posição é a base para um bom agachamento e
            proporciona estabilidade durante o exercício.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="exercise-page">
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Procedimentos de Emergência
          </p>
        </div>
      </header>

      <main className="container py-5">
        {/* Seção DVA */}
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
            Desobstrução de Via Aérea (DVA)
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Neste exercício, você aprenderá os princípios básicos para desobstruir a via aérea.
          </p>
        </div>

        {stepsDVA.map((step) => (
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

        {/* Seção PLS */}
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
            Posição Lateral de Segurança (PLS)
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
        </div>

        {stepsPLS.map((step) => (
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

        {/* Resumo e registro */}
        <section className="p-4 mb-5 rounded" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h4 style={{ fontSize: "1.2rem", fontWeight: "600", textAlign: "center", marginBottom: "1.5rem", color: "#ecf0f1" }}>
            Resumo do Exercício
          </h4>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                  Encorajar a tossir / Assistir ao vídeo
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                  Pancadas / Posicionar corretamente
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                  Compressões / Transportar a vítima
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  4
                </div>
                <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                  Manobra de Heimlich / Posição Inicial
                </p>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "1.5rem", textAlign: "center" }}>
            <strong>Conclusão do Exercício</strong>
          </p>
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
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="p-2"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPass">
                <Form.Label className="fw-semibold">Código de Acesso</Form.Label>
                <Form.Control
                  type="password"
                  name="codigo"
                  value={formData.codigo}
                  onChange={handleChange}
                  placeholder="Digite seu código de acesso"
                  required
                  className="p-2"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConcluido">
                <Form.Check
                  type="checkbox"
                  name="concluido"
                  checked={formData.concluido}
                  onChange={handleChange}
                  label="Exercício concluído"
                  className="fw-semibold"
                />
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
