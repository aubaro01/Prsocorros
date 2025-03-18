import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

export default function PageEx4() {
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

  const steps = [
    {
      id: 0,
      title: "Vídeo Instrutivo",
      content: (
        <>
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://youtu.be/wTG1cdgiarw?si=a9HNCD-pTxOjNRH5"
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
      title: "Encorajar Tossir",
      content: (
        <div className="row">
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Enquanto a vítima conseguir tossir, encoraje a tosse na tentativa de expelir o corpo estranho
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/dva1.png"
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
      title: "Pancadas Interescapulares",
      content: (
        <div className="row">
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Se a vítima não conseguir tossir, aplique cinco (5) pancadas nas costas.
            </p>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              <li className="mb-2">Mantenha a vítima longe de si</li>
              <li className="mb-2">Coloque-se em uma posição de segurança</li>
              <li className="mb-3">Deixe os seus pés bem firmes no chão, um pé a frente e outro a atrás</li>
              <li className="mb-2">Joelhos alinhados com os pés</li>
              <li>Não ultrapasse a linha dos dedos com os joelhos</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/dva2.png"
              alt="Agachamento"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
        </div>
      ),
    },
    
      { //Pedir op sobre design
        id: 3,
        title: "Manobra de Heimlich",
        content: (
          <div className="row">
            <div className="col-md-12">
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
                A manobra de Heimlich é uma técnica de primeiros socorros usada para desobstruir as vias aéreas de uma pessoa que está engasgada. Siga os passos abaixo:
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
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                    Posicione-se atrás da vítima e circunde o abdômen dela com os seus braços.
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
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                    Certifique-se de que você está em uma posição estável e segura, com os pés firmes no chão.
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
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                    Deixe os pés firmes no chão, com um pé ligeiramente à frente do outro para manter o equilíbrio.
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
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                    Mantenha os joelhos alinhados com os pés, sem ultrapassar a linha dos dedos.
                  </p>
                </div>
              </div>
      
              {/* Passo 5 
              <div className="row mb-4 align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/passo5.jpg"
                    alt="Passo 5: Executar a compressão"
                    className="img-fluid rounded"
                    style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                  />
                </div>
                <div className="col-md-6">
                  <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 5</h4>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                    Comprima o abdômen da vítima com movimentos firmes e rápidos para cima, até que o objeto seja expelido.
                  </p>
                </div>
              </div>
              */}
            </div>
          </div>
             
        ),
      }
  ];

  return (
    <div className="exercise-page">
      {/* Header com design escuro simplificado */}
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
            <div className="py-1 px-3" style={{ border: "1px solid rgba(31, 26, 26, 0.3)", borderRadius: "4px" }}>
              Exercício 1
            </div>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Desebstrução Via Aérea (DVA)<br></br>
          </p>
        </div>
      </header>

      <main className="container py-5">
        {/* Título do exercício com design escuro simplificado */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "black",
              marginBottom: "1rem",
            }}
          >
            Desebstrução de Via Aérea
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Neste exercício vai aprender os principios basicos para desebstrução da via aérea
          </p>
        </div>

        {/* Todas as etapas são mostradas em sequência com o mesmo estilo escuro */}
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {steps.map((step) => (
              <section
                key={step.id}
                className="mb-5 p-4 rounded"
                style={{ backgroundColor: "#343a40" }}
              >
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

            {/* Seção combinada de Resumo e Conclusão */}
            <section className="p-4 mb-5 rounded" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "1.5rem",
                  color: "#ecf0f1",
                }}
              >
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
                      Encorajar a tossir
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
                      5 pancadas nas costas
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
                      5 compressões abdóminais
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
                      Executar a manobra de HEIMLICH
                    </p>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#e9ecef",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
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
          </div>
        </div>
      </main>

      {/* Footer simples estilo Medium */}
      <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.9rem", color: "#757575" }}>
            © {new Date().getFullYear()} SAV. <br></br> Todos os direitos reservados.
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
                  fontSize: "1rem",
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
                  fontSize: "1rem",
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