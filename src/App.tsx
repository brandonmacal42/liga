import Menu from "./pages/menu/menu";
import About from "./pages/about/about";
import Laboratorio from "./pages/laboratorio/laboratorio";
import Eventos from "./pages/eventos/eventos";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WhatsappButton from "./components/whatsappButton/whatsappButton";
import "./assets/images/image-removebg-preview.png";
import "./assets/styles/App.scss";
import LoadingScreen from "./components/loading/LoadingScreen";
import { useState } from "react";
// import { initialBlobityOptions } from "../utils/blobity.config";
// import Cursor from "./components/ui/cursor/cursor";

function App() {
  // useBlobity(initialBlobityOptions);
  const [loadingDone, setLoadingDone] = useState(false);
  return (
    <>
      {!loadingDone && <LoadingScreen onFinish={() => setLoadingDone(true)} />}

      <div>
        <Menu />
        <About />
        <Laboratorio />
        <Eventos />
        <WhatsappButton />
      </div>
    </>
  );
}

export default App;
