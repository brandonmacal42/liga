import "./menu.scss";
import TopBar from "../../components/topBar/topBar";
import MenuBar from "../../components/menuBar/menuBar";
import Slider from "../../components/slider/slider";
function Menu() {
  return (
    <>
      <TopBar text="Envios a toda la republica" />
      <MenuBar />
      <Slider />
      <div>
        <h1>Menu Page</h1>
        <p>This is the menu page.</p>
      </div>
    </>
  );
}

export default Menu;
