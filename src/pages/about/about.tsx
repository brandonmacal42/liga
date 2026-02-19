import "./about.scss";
import Items from "../../components/items/items";
import ExpandedImage from "../../components/expandedImage/expandedImage";

function About() {
  return (
    <>
      <div className="about">
        <h1 className="about-title">Primitive - Back 2 back</h1>
        <Items />
      </div>
      <ExpandedImage />
    </>
  );
}

export default About;
