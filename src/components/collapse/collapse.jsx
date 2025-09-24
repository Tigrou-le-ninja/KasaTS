import { useState, useRef } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggleCollapse}>
        <span className="collapse-title">{title}</span>
        <span className="chevron">{!isOpen ? <img src="src\assets\chevron.png" /> : ""}</span>
      </button>

      <div
        className="collapse-content"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        <div ref={contentRef} className="collapse-text">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
