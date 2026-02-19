import "./eventos.scss";
import EventsItems from "../../components/eventsItems/eventsItems";
function Laboratorio() {
  return (
    <>
      <div className="eventos">
        <h1 className="eventos-title">Eventos </h1>
        <EventsItems />
      </div>
    </>
  );
}

export default Laboratorio;
