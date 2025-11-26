// DownloadCV.tsx
import { useState } from "react";
import { Modal, Input, message, Button } from "antd";
import emailjs from '@emailjs/browser'
import "../styles/DownloadCV.css";

interface DownloadCVProps {
  className?: string;
}

const DownloadCV = ({ className }: DownloadCVProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSendCV = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      message.error("Por favor, introduce un correo válido.");
      return;
    }

    emailjs.send(
      "service_kc4d5nr",
      "template_cefs8td",
      { user_email: email },
      "mYRhInMQrTkQiSumR"
    )
    .then(() => {
      setIsModalOpen(false);
      message.success(
        "En breve recibirás el CV en tu correo electrónico. Gracias."
      );
      setEmail("");
    })
    .catch(() => {
      message.error("Error al enviar el correo. Por favor, inténtalo de nuevo.");
    });
  };

  return (
    <>
      <div className="cta-buttons">
        <Button 
          type="default"
          className={className || "btn-secondary"}
          onClick={openModal}
          style={{ width: "100%", maxWidth: "200px" }}
        >
          Descargar CV
        </Button>
      </div>
      
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        className="download-cv-modal"
        style={{ maxWidth: "400px", margin: "auto" }}
        bodyStyle={{ padding: "24px" }}
      >
        <div className="download-cv-content">
          <h2 className="download-cv-title"> Introduce tu email para recibirlo</h2>
          <Input
            placeholder="tuemail@dominio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="download-cv-input"
          />
          <div className="download-cv-buttons">
            <button
              type="button"
              className="download-cv-button download-cv-button-primary"
              onClick={handleSendCV}
            >
              Enviar
            </button>
            <button
              type="button"
              className="download-cv-button download-cv-button-secondary"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DownloadCV;