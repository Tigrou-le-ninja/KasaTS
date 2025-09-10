import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";
import { useEffect, useState } from "react";
import "./about.scss";

const About = () => {
  const [collapses, setCollapses] = useState([]);
  const getCollapses = async () => {
    const response = await fetch("/data/about.json");
    const data = await response.json();
    setCollapses(data);
  };

  useEffect(() => {
    getCollapses();
  }, []);

  return (
    <>
      <Banner page="about" />
      {collapses.map((collapse) => (
        <Collapse key={collapse.id} title={collapse.title} content={collapse.content} />
      ))}
    </>
  );
};

export default About;
