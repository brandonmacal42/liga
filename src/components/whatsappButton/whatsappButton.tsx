import whatsappSvg from "../../assets/images/whatsapp-color-svgrepo-com.svg";
import ligaImg from "../../assets/images/488708239_1031884088816238_7043763627587634907_n.jpg";
import "./WhatsappButton.scss";

const WhatsappButton = () => {
  const whatsappLink = "https://wa.me/521234567890";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      {/* Imagen base */}
      <img src={ligaImg} alt="Fondo" className="whatsapp-bg" />

      {/* SVG encima */}
      <img src={whatsappSvg} alt="WhatsApp Icon" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappButton;
