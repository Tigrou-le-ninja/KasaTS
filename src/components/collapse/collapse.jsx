import { useState, useRef } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  // return (
  //   <div className="collapse" onClick={toggleCollapse}>
  //     <h1>{title}</h1>
  //     <p>{content}</p>
  //   </div>
  // );

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggleCollapse}>
        <h1>{title}</h1>
        <span className="chevron">{!isOpen ? <img src="src\assets\chevron.png" /> : ""}</span>
      </button>

      <div
        ref={contentRef}
        className="collapse-content"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        <div className="collapse-text">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
