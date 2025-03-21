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

  // Array com as etapas do exercício
  const steps = [
    {
      id: 0,
      title: "Vídeo instrutivo",
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
            Este vídeo demonstra a técnica correta para realizar do exercício.
            Observe atentamente os movimentos antes de começar a praticar.
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: "Vítima Consciente",
      content: (
        <>
          <div className="text-center mb-4">
            <img
              src="/assets/rva.png"
              alt="vítima dentro do auditorio"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
           Avaliar, incentivar e auxiliar ao trnsporte em cadeira de rodas.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Com ajudar de outros voluntários
          </p>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              <li className="mb-2">Levante a vítima em segurança</li>
              <li className="mb-2">Coloque ela bem posicionada em relação a cadeira</li>
              <li className="mb-2">Certifiquem-se que ela está em segurança</li>
            </ul>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Após esses passsos podem transportar a vítima
              </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Vítima Inconsciente",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Para o transporte de uma vítima inconsciente, há vários cuidados a serem tomados. Siga os passos abaixo:
            </p>
    
            {/* Passo 1 - Avaliar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/rva1.png"
                  alt="Passo 1: Avaliar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 1 - Avaliar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Verifique se a vítima está usando algo que possa colocá-la em perigo (ex.: objetos pontiagudos, acessórios).</li>
                  <li className="mb-2">Certifique-se de que o ambiente é seguro para realizar o transporte.</li>
                  <li>Verifique se há riscos adicionais, como tráfego de veículos ou incêndio.</li>
                </ul>
              </div>
            </div>
    
            
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/rva2.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 2 - Posicionar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Coloque a vítima em uma posição estável, de preferência deitada de costas.</li>
                  <li className="mb-2">Certifique-se de que a cabeça, o pescoço e a coluna estão alinhados.</li>
                  <li>Evite movimentos bruscos que possam agravar lesões.</li>
                </ul>
              </div>
            </div>
    
            {/* Passo 3 - Transportar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/rva4.png"
                  alt="Passo 3: Transportar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 3 - Transportar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Use técnicas adequadas para levantar a vítima, como o método de arrastamento ou a técnica de dois socorristas.</li>
                  <li className="mb-2">Mantenha a vítima estável durante o transporte, evitando movimentos desnecessários.</li>
                  <li>Leve a vítima para um local seguro ou aguarde a chegada de socorro profissional.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Transporte de vítima inconsciente",
      content: (
        <div className="row">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/assets/rva5.png"
              alt="Salto"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              A partir da posição de agachamento, <strong>impulsione o corpo para cima</strong> em um salto explosivo,
              estendendo completamente os joelhos e quadris.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Use os braços para ajudar no impulso, movendo-os para frente e para cima.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Aterrisse suavemente, voltando para a posição de agachamento, amortecendo o impacto.
            </p>
          </div>
           
          <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/rva6.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 2 - Posicionar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Coloque a vítima em uma posição estável, de preferência deitada de costas.</li>
                  <li className="mb-2">Certifique-se de que a cabeça, o pescoço e a coluna estão alinhados.</li>
                  <li>Evite movimentos bruscos que possam agravar lesões.</li>
                </ul>
              </div>
            </div>
             {/* Passo 3 - Transportar */}
             <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/rva7.png"
                  alt="Passo 3: Transportar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 3 - Transportar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Use técnicas adequadas para levantar a vítima, como o método de arrastamento ou a técnica de dois socorristas.</li>
                  <li className="mb-2">Mantenha a vítima estável durante o transporte, evitando movimentos desnecessários.</li>
                  <li>Leve a vítima para um local seguro ou aguarde a chegada de socorro profissional.</li>
                </ul>
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
              Exercício 2
            </div>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Remoção de Vítima no Auditório<br></br>
          </p>
        </div>
      </header>

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "black",
              marginBottom: "1rem",
            }}
          >
            Remoção de Vítima no Auditório
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Retirada de vítima Consciente e inconsciente do auditório.
          </p>
        </div>

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
                      Assistir ao vídeo demonstrativo
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
                      Posicionar-se corretamente
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
                      Realizar o agachamento
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
                      Executar o salto explosivo
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
            © {new Date().getFullYear()} SAV. <br></br>Todos os direitos reservados.
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

/*

textos para usar

Texto 1: Vídeo Instrutivo
Antes: "Assista ao vídeo abaixo para aprender a técnica correta para a execução do exercício. Preste atenção nos movimentos antes de começar a prática."

Melhorado: "Assista ao vídeo abaixo para entender a técnica correta de execução do exercício. Preste atenção aos detalhes dos movimentos antes de começar a prática."

Texto 2: Vítima Consciente
Antes: "Avalie a situação da vítima, incentive-a a cooperar e ajude no transporte utilizando uma cadeira de rodas, conforme a necessidade."

Melhorado: "Avalie a situação da vítima, incentive-a a colaborar e auxilie no transporte utilizando uma cadeira de rodas, caso necessário."

Antes: "Com a ajuda de outros voluntários, siga os passos abaixo:

Levante a vítima com segurança.
Posicione a vítima adequadamente na cadeira de rodas.
Certifique-se de que ela está segura na cadeira."
Melhorado: "Com o auxílio de outros voluntários, siga as etapas abaixo:

Levante a vítima com segurança.
Coloque-a na cadeira de rodas de forma adequada.
Verifique se ela está segura na cadeira antes de iniciar o transporte."
Texto 3: Vítima Inconsciente
Antes: "Para o transporte de uma vítima inconsciente, siga os cuidados abaixo:

Passo 1 - Avaliar Verifique se a vítima não está com objetos que possam representer perigo (ex.: objetos pontiagudos, acessórios perigosos). Certifique-se de que o ambiente está seguro para realizar o transporte. Observe riscos adicionais, como tráfego de veículos ou incêndios próximos."

Melhorado: "Para o transporte de uma vítima inconsciente, siga os cuidados descritos abaixo:

Passo 1 - Avaliação:

Verifique se a vítima está com objetos que possam representar riscos (ex.: objetos pontiagudos ou acessórios perigosos).
Certifique-se de que o ambiente está seguro para realizar o transporte.
Observe riscos adicionais, como tráfego de veículos ou incêndios próximos."
Antes: "Passo 2 - Posicionar Coloque a vítima em uma posição estável, de preferência deitada de costas. Alinhe a cabeça, pescoço e coluna da vítima para evitar lesões adicionais. Evite movimentos bruscos durante o manuseio para prevenir complicações."

Melhorado: "Passo 2 - Posicionamento:

Coloque a vítima em uma posição estável, de preferência deitada de costas.
Alinhe a cabeça, o pescoço e a coluna da vítima para evitar lesões adicionais.
Evite movimentos bruscos durante o manuseio para prevenir complicações."
Antes: "Passo 3 - Transportar Utilize técnicas apropriadas para levantar a vítima, como o arrastamento ou a técnica de dois socorristas. Mantenha a vítima estável durante o transporte, evitando movimentos excessivos. Leve a vítima para um local seguro ou aguarde a chegada de profissionais de socorro."

Melhorado: "Passo 3 - Transporte:

Utilize técnicas apropriadas para levantar a vítima, como o arrastamento ou a técnica de dois socorristas.
Mantenha a vítima estável durante o transporte, evitando movimentos excessivos.
Transporte a vítima até um local seguro ou aguarde a chegada de profissionais de socorro."
Texto 4: Transporte de Vítima Inconsciente
Antes: "A partir da posição de agachamento, impulsione o corpo para cima com um salto explosivo, estendendo completamente os joelhos e quadris. Use os braços para ajudar no impulso, movendo-os para frente e para cima. Aterrisse suavemente, retornando à posição de agachamento para amortecer o impacto."

Melhorado: "A partir da posição de agachamento, impulsione o corpo para cima com um salto explosivo, estendendo completamente os joelhos e os quadris. Use os braços para auxiliar no impulso, movendo-os para frente e para cima. Aterrisse suavemente e retorne à posição de agachamento para amortecer o impacto.

 */