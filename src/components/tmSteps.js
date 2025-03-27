import React from "react";

const steps = [
  {
    step: "Passo 1",
    title: "Fixar a cabeça da vítima",
    img: "/assets/tm1.png",
    description: [
      "Verifique se a vítima está com objetos que possam representar riscos (ex.: objetos pontiagudos ou acessórios perigosos).",
      "Certifique-se de que o ambiente está seguro para realizar o transporte.",
      "Observe riscos adicionais, como tráfego de veículos ou incêndios próximos."
    ]
  },
  {
    step: "Passo 2",
    title: "Alinhar o corpo da vítima",
    img: "/assets/rva2.png",
    description: [
      "Coloque a vítima em uma posição estável, de preferência deitada de costas.",
      "Alinhe a cabeça, o pescoço e a coluna da vítima para evitar lesões adicionais.",
      "Evite movimentos bruscos durante o manuseio para prevenir complicações."
    ],
    reverse: true
  },
  {
    step: "Passo 3",
    title: "Posicionamento dos 3 socorristas",
    img: "/assets/rva4.png",
    description: [
      "Utilize técnicas apropriadas para levantar a vítima, como o arrastamento ou a técnica de dois socorristas.",
      "Mantenha a vítima estável durante o transporte, evitando movimentos excessivos.",
      "Transporte a vítima até um local seguro ou aguarde a chegada de profissionais de socorro."
    ]
  },
  {
    step: "Passo 4",
    title: "Levantamento em bloco da vítima",
    img: "/assets/rva2.png",
    description: [
      "Coloque a vítima em uma posição estável, de preferência deitada de costas.",
      "Alinhe a cabeça, o pescoço e a coluna da vítima para evitar lesões adicionais.",
      "Evite movimentos bruscos durante o manuseio para prevenir complicações."
    ],
    reverse: true
  },
  {
    step: "Passo 5",
    title: "Introdução da maca por baixo da vítima",
    img: "/assets/rva4.png",
    description: [
      "Utilize técnicas apropriadas para levantar a vítima, como o arrastamento ou a técnica de dois socorristas.",
      "Mantenha a vítima estável durante o transporte, evitando movimentos excessivos.",
      "Transporte a vítima até um local seguro ou aguarde a chegada de profissionais de socorro."
    ]
  },
  {
    step: "Passo 6",
    title: "Abaixar em bloco a vítima",
    img: "/assets/rva2.png",
    description: [
      "Coloque a vítima em uma posição estável, de preferência deitada de costas.",
      "Alinhe a cabeça, o pescoço e a coluna da vítima para evitar lesões adicionais.",
      "Evite movimentos bruscos durante o manuseio para prevenir complicações."
    ],
    reverse: true
  },
  {
    step: "Passo 7",
    title: "Colar cintas de segurança",
    img: "/assets/rva4.png",
    description: [
      "Utilize técnicas apropriadas para levantar a vítima, como o arrastamento ou a técnica de dois socorristas.",
      "Mantenha a vítima estável durante o transporte, evitando movimentos excessivos.",
      "Transporte a vítima até um local seguro ou aguarde a chegada de profissionais de socorro."
    ]
  },
  {
    step: "Passo 8",
    title: "Emparelhar socorristas com alturas semelhantes",
    img: "/assets/rva2.png",
    description: [
      "Coloque a vítima em uma posição estável, de preferência deitada de costas.",
      "Alinhe a cabeça, o pescoço e a coluna da vítima para evitar lesões adicionais.",
      "Evite movimentos bruscos durante o manuseio para prevenir complicações."
    ],
    reverse: true
  },
  {
    step: "Passo 9",
    title: "Levantar a maca com flexão dos membros inferiores",
    img: "/assets/rva4.png",
    description: [
      "Utilize técnicas apropriadas para levantar a vítima, como o arrastamento ou a técnica de dois socorristas.",
      "Mantenha a vítima estável durante o transporte, evitando movimentos excessivos.",
      "Transporte a vítima até um local seguro ou aguarde a chegada de profissionais de socorro."
    ]
  },
  {
    step: "Passo 10",
    title: "Preparar para avançar",
    img: "/assets/rva2.png",
    description: ["À ordem do socorrista a cabeça."]
  }
];

const Step = ({ step, title, img, description, reverse }) => (
  <div className={`row mb-4 align-items-center ${reverse ? "flex-row-reverse" : ""}`}>
    <div className="col-md-6 text-center">
      <img
        src={img}
        alt={title}
        className="img-fluid rounded"
        style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
      />
    </div>
    <div className="col-md-6">
      <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>{step} - {title}</h4>
      <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#fff" }}>
        {description.map((item, idx) => (
          <li key={idx} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const TransporteVitima = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#fff", marginBottom: "2rem" }}>
            Para o transporte de uma vítima inconsciente, siga os cuidados descritos abaixo:
          </p>
          {steps.map((stepData, index) => (
            <Step key={index} {...stepData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransporteVitima;
