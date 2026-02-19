import "./laboratorio.scss";
import LabItems from "../../components/labItems/labItems";
function Laboratorio() {
  return (
    <>
      <div className="laboratorio">
        <h1 className="lab-title">Laboratorio </h1>
        <LabItems />
      </div>
    </>
  );
}

export default Laboratorio;
