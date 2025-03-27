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
      title: "Vídeo introdutório",
      content: (
        <>
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://drive.google.com/file/d/1TG6jena9SlWF0byWXfnc-EtKMJ_1-wK6/preview"
              title="Vídeo demonstrativo do exercício"
              allowFullScreen
              allow="autoplay"
             
            ></iframe>
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Assista ao vídeo abaixo para entender a técnica correta de execução do exercício. Preste atenção aos detalhes dos movimentos antes de começar a prática.
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: "Transporte de vítima dentro do auditório",
      content: (
        <div className="row">
          <div className="col-md-12">
            
            {/* Passo 1 */}
            <div className="step-card mb-4 p-3 rounded" style={{  borderLeft: "4px solid #f39c12" }}>              <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/tm.png"
                  alt="Passo 1: Fixar a cabeça da vítima"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <div className="col-md-6">
                <div className="step-header d-flex align-items-center mb-3">
                  <div className="step-number me-3" style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f39c12",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem"
                  }}>
                    1
                  </div>
                  <h4 style={{ color: "#f39c12", margin: 0 }}>Fixar a cabeça da vítima</h4>
                </div>
                <ul className="step-list" style={{  color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Verificar objetos que possam representar riscos (objetos pontiagudos, acessórios perigosos)</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Certificar-se que o ambiente está seguro para o transporte</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Observar riscos adicionais (tráfego de veículos, incêndios próximos)</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>

            {/* Passo 2 */}
            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)",  borderLeft: "4px solid #f39c12" }}>              <div className="row align-items-center">

              <div className="col-md-6 order-md-2 text-center">
                <img
                  src="/assets/tm7.png"
                  alt="Passo 2: Alinhar o corpo da vítima"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <div className="step-header d-flex align-items-center mb-3">
                  <div className="step-number me-3" style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f39c12",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem"
                  }}>
                    2
                  </div>
                  <h4 style={{ color: "#f39c12", margin: 0 }}>Alinhar o corpo da vítima</h4>
                </div>
                <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Posicionar a vítima deitada de costas em posição estável</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Alinhar cabeça, pescoço e coluna para evitar lesões</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Evitar movimentos bruscos durante o manuseio</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>

            {/* Passo 3 */}
            <div className="step-card mb-4 p-3 rounded" style={{ borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm1.png"
                    alt="Passo 3: Posicionamento dos socorristas"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      3
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Posicionamento dos 3 socorristas</h4>
                  </div>
                  <ul className="step-list" style={{  color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Socorrista 1: Responsável pela cabeça (comando)</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Socorrista 2: Responsável pelo tronco</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Socorrista 3: Responsável pelos membros inferiores</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Passo 4 */}
            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)",  borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm3.png"
                    alt="Passo 4: Levantamento em bloco"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      4
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Levantamento em bloco</h4>
                  </div>
                  <ul className="step-list" style={{  color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Manter alinhamento cabeça-pescoço-coluna durante todo o movimento</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Levantar simultaneamente ao comando do socorrista 1</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Manter a vítima estável durante todo o procedimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Passo 5 */}
            <div className="step-card mb-4 p-3 rounded" style={{ borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm2.png"
                    alt="Passo 5: Introdução da maca"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      5
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Introdução da maca</h4>
                  </div>
                  <ul className="step-list" style={{  color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Posicionar a maca paralelamente à vítima</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Deslizar a maca suavemente por baixo da vítima</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Garantir que a maca esteja centralizada sob o corpo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Passo 6 */}
            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)",  borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm8.png"
                    alt="Passo 6: Abaixar em bloco"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      6
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Abaixar em bloco</h4>
                  </div>
                  <ul className="step-list" style={{  color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Manter alinhamento durante toda a descida</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Flexionar joelhos para amortecer o impacto</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Coordenar movimento com os demais socorristas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Passo 7 */}
            <div className="step-card mb-4 p-3 rounded" style={{  borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm4.png"
                    alt="Passo 7: Colar cintas"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      7
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Colar cintas de segurança</h4>
                  </div>
                  <ul className="step-list" style={{  color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Verificar o correto posicionamento das cintas</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Ajustar conforme o biótipo da vítima</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Garantir fixação sem comprometer a circulação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Passo 8 */}
            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)",  borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm9.png"
                    alt="Passo 8: Emparelhar socorristas"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      8
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Emparelhar socorristas</h4>
                  </div>
                  <ul className="step-list" style={{  color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Posicionar socorristas de altura similar</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Distribuir peso igualmente entre a equipe</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Manter postura ergonômica durante o transporte</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Passo 9 */}
            <div className="step-card mb-4 p-3 rounded" style={{  borderLeft: "4px solid #f39c12" }}>          
              <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/tm5.png"
                  alt="Passo 9: Levantamento com flexão"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <div className="col-md-6">
                <div className="step-header d-flex align-items-center mb-3">
                  <div className="step-number me-3" style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f39c12",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem"
                  }}>
                    9
                  </div>
                  <h4 style={{ color: "#f39c12", margin: 0 }}>Levantamento com flexão</h4>
                </div>
                <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Manter coluna vertebral alinhada</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Utilizar força das pernas para levantar</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Evitar torções ou movimentos bruscos</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>

            {/* Passo 10 */}
            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)",  borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm10.png"
                    alt="Passo 10: Preparar avanço"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      10
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Preparar para avançar</h4>
                  </div>
                  <div className="alert alert-warning mt-3">
                    <strong>Comando final:</strong> À ordem do socorrista responsável pela cabeça
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-warning mt-4">
              <strong>Nota:</strong> Todos os movimentos devem ser coordenados e sincronizados entre os socorristas, seguindo os comandos do responsável pela cabeça.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Transporte de vítima em escadas",
      content: (
        <div className="row">
          <div className="col-md-12">
            
            {/* Passo 1 */}
            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(243, 156, 18, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/rva5.png"
                    alt="Posicionamento inicial"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{ 
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      1
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Preparação para subida</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Posicionar a maca paralelamente aos degraus</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Verificar estabilidade da estrutura</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Distribuir equipe anterior e posterior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            {/* Passo 2 */}
            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(243, 156, 18, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm9.png"
                    alt="Movimento de subida"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{ 
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      2
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Técnica de subida</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Manter a maca sempre nivelada</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Sincronizar movimentos com comandos verbais</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Utilizar força das pernas para impulso</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            {/* Passo 3 */}
            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(243, 156, 18, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/rva5.png"
                    alt="Controle de descida"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{ 
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      3
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Controle na descida</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Manter centro de gravidade baixo</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Descer degrau por degrau com segurança</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Aterrissar suavemente em cada passo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div className="alert alert-warning mt-4">
              <strong>Nota:</strong> Priorizar sempre a segurança da equipe e da vítima, utilizando equipamentos de proteção individual quando necessário.
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
              Exercício 4
            </div>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Transporte vítima em Maca<br />
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
            Transporte em Maca
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Transporte de vítimas em diversas situações
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
                <Form.Label className="fw-semibold">Nome</Form.Label>
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
                <Form.Label className="fw-semibold">Password</Form.Label>
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
