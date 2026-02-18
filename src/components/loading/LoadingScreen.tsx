import { useEffect, useState } from "react";
import "./LoadingScreen.scss";
import logo from "../../assets/images/image-removebg-preview.png";
interface Props {
  onFinish: () => void;
}

export default function LoadingScreen({ onFinish }: Props) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(onFinish, 900); // tiempo de animación
    }, 3000); // duración del loading

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`loading-container ${exit ? "exit" : ""}`}>
      <img src={logo} alt="About Logo" className="logo" />
    </div>
  );
}
