import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import Slider from "../../components/slider/slider";
import Rating from "../../components/rating/rating";
import Tag from "../../components/tag/tag";
import Apart from "../../components/apart/apart";
import Host from "../../components/host/host";
import Collapse from "../../components/collapse/collapse";

import "./details.scss";

const Details = () => {
  const title = "test";
  const content = "test content";
  const { logement, setLogement } = useState(null);
  // Récupérer l'ID du logement depuis les paramètres de l'URL
  const { id } = useParams();
  const getLogements = async () => {
    const response = await fetch("/data/logements.json");
    const data = await response.json();
    const temp = data.find((logt) => logt.id === id);
    setLogement(temp);

    if (!logement) {
      return <Navigate to="/error" />;
    }
  };
  // Le useEffect affiche le composant puis le remplit avec les données récupérées par getLogements
  useEffect(() => {
    getLogements();
  }, []);

  return (
    <div className="details">
      <h1>{logement?.description}</h1>
      <Slider />
      <Apart />
      <Host />
      <Rating />
      <Tag />
      <Collapse title={logement?.title} content={content} />
    </div>
  );
};

export default Details;
