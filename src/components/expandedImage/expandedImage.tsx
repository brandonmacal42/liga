import "./expandedImage.scss";
import image1 from "../../assets/images/Screenshot 2026-02-19 at 10-26-32 Instagram.png";

function ExpandedImage() {
  return (
    <div className="expanded-image-container">
      <img src={image1} alt="Imagen destacada" />
      {/* <div className="overlay" /> */}
    </div>
  );
}

export default ExpandedImage;
