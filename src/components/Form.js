import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const FinalP = "/assets/form.png";
const modal = "/assets/form1.png";

const FormInstructionsModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      scrollable
      className="instruction-modal"
    >
      <Modal.Header closeButton className="border-black border-bottom-2">
        <Modal.Title className="fw-bold">
          <i className="bi bi-info-circle me-2"></i>
          Instruções para os Exercícios
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="alert alert-dark mb-4">
          <i className="bi bi-lightbulb me-2"></i>
          Siga estes passos cuidadosamente para garantir que seu exercício seja registrado corretamente.
        </div>

        <div className="instruction-step mb-4 p-3 border border-1 rounded-0">
          <div className="step-header d-flex align-items-center mb-2">
            <span className="step-badge bg-dark text-white rounded-0 me-3" style={{ width: '28px', height: '28px', lineHeight: '28px', textAlign: 'center' }}>1</span>
            <h5 className="mb-0 fw-bold">Concluir o Exercício</h5>
          </div>
          <div className="ps-5">
            <p>
              Ao finalizar cada exercício, aparecerá um resumo com as informações principais
              e um botão para acessar o formulário de envio.
            </p>
            <div className="mt-3">
              <img
                src={FinalP}
                alt="Tela de conclusão do exercício"
                className="img-fluid border border-1 border-dark"
                style={{ maxHeight: '200px' }}
              />
              <p className="text-center small mt-1 mb-0">Exemplo da tela de conclusão</p>
            </div>
          </div>
        </div>

        <div className="instruction-step mb-4 p-3 border border-1 rounded-0">
          <div className="step-header d-flex align-items-center mb-2">
            <span className="step-badge bg-dark text-white rounded-0 me-3" style={{ width: '28px', height: '28px', lineHeight: '28px', textAlign: 'center' }}>2</span>
            <h5 className="mb-0 fw-bold">Preencher o Formulário</h5>
          </div>
          <div className="ps-5">
            <p>No formulário que será aberto, insira:</p>
            <ul className="mb-3">
              <li>O nome que colocou no formulário da inscrição</li>
              <li>A senha que criou</li>
              <li>Marque a confirmação de conclusão</li>
            </ul>
            <div className="mt-2">
              <img
                src={modal}
                alt="Formulário de envio"
                className="img-fluid border border-1 border-dark"
                style={{ maxHeight: '250px' }}
              />
              <p className="text-center small mt-1 mb-0">Modelo do formulário</p>
            </div>
          </div>
        </div>

        <div className="instruction-step mb-4 p-3 border border-1 rounded-0">
          <div className="step-header d-flex align-items-center mb-2">
            <span className="step-badge bg-dark text-white rounded-0 me-3" style={{ width: '28px', height: '28px', lineHeight: '28px', textAlign: 'center' }}>3</span>
            <h5 className="mb-0 fw-bold">Finalizar Envio</h5>
          </div>
          <div className="ps-5">
            <p>
              Clique no botão <strong>"Enviar"</strong> para confirmar sua participação
              e registrar a conclusão do exercício.
            </p>
            <div className="alert alert-dark mt-3 rounded-0">
              <i className="bi bi-exclamation-triangle me-2"></i>
              Certifique-se de que todos os dados estão corretos antes de enviar.
            </div>
          </div>
        </div>

        <div className="support-note mt-4 p-3 border border-1">
          <h6 className="d-flex align-items-center fw-bold">
            <i className="bi bi-question-circle me-2"></i>
            Precisa de ajuda?
          </h6>
          <p className="mb-0">
            -----1.
          </p>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-black border-top-2">
        <Button
          variant="outline-dark"
          onClick={onHide}
          className="rounded-0 border-2 fw-bold d-flex align-items-center"
        >
          <i className="bi bi-check2 me-2"></i>
          Entendi as instruções
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Mostrar Instruções</button>
      <FormInstructionsModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
      />   
    </div>
  );
};

export default Form;