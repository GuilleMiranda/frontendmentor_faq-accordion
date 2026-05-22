import type { Entry } from "./Entry";
import iconMinus from "./assets/images/icon-minus.svg";
import iconPlus from "./assets/images/icon-plus.svg";

type Props = {
  index: number;
  entry: Entry;
  isActive: boolean;
  handleButton: (index: number) => void;
};
const AccordionEntryComponent = ({
  index,
  entry,
  isActive,
  handleButton,
}: Props) => {
  return (
    <div className="accordion-entry-container" key={index}>
      <button
        className="accordion-header"
        onClick={() => {
          handleButton(index);
        }}
      >
        <h2>{entry.title}</h2>
        <img
          src={isActive ? iconMinus : iconPlus}
          alt={
            isActive
              ? "Hide the content of " + entry.title
              : "Show the content of " + entry.title
          }
        />
      </button>
      <div className={`accordion-body ${isActive ? "active-item" : ""}`}>
        <p>{entry.body}</p>
      </div>
    </div>
  );
};
export default AccordionEntryComponent;
