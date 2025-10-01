import { useState, useRef } from "react";
import "./collapse.scss";
import Chevron from "../../assets/chevron.png";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggleCollapse}>
        <span className="collapse-title">{title}</span>
        <span className="chevron">{!isOpen ? <img src={Chevron} /> : ""}</span>
      </button>

      <div className={`collapse-content ${isOpen ? "open" : ""}`} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
