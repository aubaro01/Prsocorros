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

  // Array com as etapas do exercício
  const steps = [
    {
      id: 0,
      title: "Vídeo Demonstrativo",
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
            ------------------------.
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
              Para o transporte de uma vítima inconsciente, há vários cuidados a serem tomados. Siga os passos abaixo:
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
                  <li className="mb-2">Verifique se a vítima está usando algo que possa colocá-la em perigo (ex.: objetos pontiagudos, acessórios).</li>
                  <li className="mb-2">Certifique-se de que o ambiente é seguro para realizar o transporte.</li>
                  <li>Verifique se há riscos adicionais, como tráfego de veículos ou incêndio.</li>
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
                  src="/assets/sbv4.png"
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

            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/sbv5.png"
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
                  src="/assets/sbv6.png"
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
            Fique em pé com os pés afastados na largura dos ombros e braços relaxados ao lado do corpo.
            Esta posição é a base para um bom agachamento e proporciona estabilidade durante o exercício.
          </p>
        </>
      ),
    },
    // Nova seção para vídeos adicionais
    {
      id: 4,
      title: "Vídeos Adicionais de Treinamento",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Assista aos vídeos adicionais para complementar seu treinamento e aprofundar seu conhecimento sobre técnicas de transporte.
            </p>
            
            {/* Primeiro vídeo adicional */}
            <div className="mb-5">
              <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Técnicas Avançadas de Transporte</h4>
              <div className="ratio ratio-16x9 mb-3">
                <iframe
                  src="--"
                  title="Técnicas avançadas de transporte"
                  allowFullScreen
                ></iframe>
              </div>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef" }}>
                Este vídeo apresenta técnicas avançadas para o transporte de vítimas em diferentes situações de emergência.
                Aprenda métodos para superar obstáculos e adaptar o transporte em condições adversas.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Nova seção para orientações adicionais
    {
      id: 5,
      title: "Transporte em Maca",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Para garantir a segurança e eficácia durante o transporte de vítimas, observe as seguintes orientações complementares:
            </p>
            
            {/* Orientações em formato de cards */}
            <div className="row mb-4">
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                  <div className="card-body text-center">
                    <img src="/assets/tm1.png" alt="Equipamentos de Proteção" className="img-fluid mb-3" style={{ borderRadius: "8px" }} />
                    <h5 className="card-title mb-3" style={{ color: "#f39c12" }}>Equipamentos de Proteção</h5>
                    <ul style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef", paddingLeft: "1.2rem", textAlign: "left" }}>
                      <li className="mb-2">Use luvas de proteção</li>
                      <li className="mb-2">Utilize óculos de segurança quando necessário</li>
                      <li>Vista coletes refletivos em ambientes com pouca visibilidade</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 mb-4">
                <div className="card h-100" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                  <div className="card-body text-center">
                    <img src="/assets/tm2.png" alt="Comunicação" className="img-fluid mb-3" style={{ borderRadius: "8px" }} />
                    <h5 className="card-title mb-3" style={{ color: "#f39c12" }}>Comunicação</h5>
                    <ul style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef", paddingLeft: "1.2rem", textAlign: "left" }}>
                      <li className="mb-2">Estabeleça comandos claros e objetivos</li>
                      <li className="mb-2">Defina um líder para coordenar a equipe</li>
                      <li>Utilize contagem regressiva para sincronizar movimentos</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 mb-4">
                <div className="card h-100" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                  <div className="card-body text-center">
                    <img src="/assets/tm3.png" alt="Cuidados Especiais" className="img-fluid mb-3" style={{ borderRadius: "8px" }} />
                    <h5 className="card-title mb-3" style={{ color: "#f39c12" }}>Cuidados Especiais</h5>
                    <ul style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef", paddingLeft: "1.2rem", textAlign: "left" }}>
                      <li className="mb-2">Monitore os sinais vitais durante o transporte</li>
                      <li className="mb-2">Verifique se a vítima está confortável e segura</li>
                      <li>Evite movimentos bruscos em caso de suspeita de lesão na coluna</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offset-md-4 mb-4 d-flex justify-content-centerr">
            <div className="card h-100" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", width: "100%" }}>
              <div className="card-body text-center">
                <img src="/assets/tm3.png" alt="Cuidados Especiais" className="img-fluid mb-3" style={{ borderRadius: "8px" }} />
                <h5 className="card-title mb-3" style={{ color: "#f39c12" }}>Cuidados Especiais</h5>
                <ul style={{ fontSize: "1rem", lineHeight: "1.6", color: "#e9ecef", paddingLeft: "1.2rem", textAlign: "left" }}>
                  <li className="mb-2">Monitore os sinais vitais durante o transporte</li>
                  <li className="mb-2">Verifique se a vítima está confortável e segura</li>
                  <li>Evite movimentos bruscos em caso de suspeita de lesão na coluna</li>
                </ul>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      ),
    },
  ] 

  return (
    <div className="exercise-page">
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
            <div className="py-1 px-3" style={{ border: "1px solid rgba(31, 26, 26, 0.3)", borderRadius: "4px" }}>
              Exercício 4
            </div>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
          Suporte Básico de vida (SBV)<br />
                 <span>- Transporte de Vítima em Maca</span>
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
            Suporte Básico de vida<br />
                     + <br />
            Transporte de Vítima em Maca
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Lições para suporte básico de vida e transporte de vítimas em Maca
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
                      5
                    </div>
                    <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                      Assistir aos vídeos adicionais
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
                      6
                    </div>
                    <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                      Revisar orientações complementares
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
                <strong>Conclusão do exercício</strong>
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
                             name="pass"
                             value={formData.pass}
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