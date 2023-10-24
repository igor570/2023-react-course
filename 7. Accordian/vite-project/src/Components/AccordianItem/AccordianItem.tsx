import { useState } from "react";
import { AccordianItemProps } from "../../interfaces";

const AccordianItem = ({ num, title, text }: AccordianItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleVisibleHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className={`item ${isOpen ? "open" : null}`}>
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon" onClick={toggleVisibleHandler}>
        {isOpen ? "-" : "x"}
      </p>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
};

export default AccordianItem;
