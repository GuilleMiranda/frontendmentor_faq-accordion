import { useState } from "react";
import type { Entry } from "./Entry";
import iconMinus from "./assets/images/icon-minus.svg";
import iconPlus from "./assets/images/icon-plus.svg";

type Props = {
  entry: Entry;
};
const AccordionEntryComponent = ({ entry }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-entry-container">
      <button
        className="accordion-header"
        onClick={handleButton}
        aria-expanded={isActive ? "true" : "false"}
      >
        <h2>{entry.title}</h2>
        <img src={isActive ? iconMinus : iconPlus} />
      </button>
      <div className={`accordion-body ${isActive ? "active-item" : ""}`}>
        <p>{entry.body}</p>
      </div>
    </div>
  );
};
export default AccordionEntryComponent;
