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

  return (
    <div className="details">
      <h1>Details Page</h1>
      <Slider />
      <Apart />
      <Host />
      <Rating />
      <Tag />
      <Collapse title={title} content={content} />
    </div>
  );
};

export default Details;
