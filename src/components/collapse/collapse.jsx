import { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse" onClick={toggleCollapse}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Collapse;
