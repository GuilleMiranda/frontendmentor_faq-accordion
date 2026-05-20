import { useState } from "react";
import AccordionEntryComponent from "./AccordionEntryComponent";
import favicon from "./assets/images/favicon-32x32.png";
import iconStar from "./assets/images/icon-star.svg";
import { entries } from "./data";

function App() {
  const [activeItems, setActiveItems] = useState<Array<number>>();

  const handleButton = (index: number) => {
    let changedList: Array<number> = [];
    let indexExists = false;

    activeItems?.map((i) => {
      if (i !== index) {
        changedList.push(i);
      } else {
        indexExists = true;
      }
    });

    if (!indexExists) {
      changedList.push(index);
    }

    setActiveItems(changedList);
  };

  return (
    <>
      <title>Frontend Mentor | FAQ accordion</title>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <div className="accordion-container">
        <div className="accordion-title">
          <img src={iconStar} />
          <h1>FAQs</h1>
        </div>
        {entries.map((entry, index) => {
          return (
            <AccordionEntryComponent
              key={index}
              entry={entry}
              handleButton={handleButton}
              index={index}
              isActive={activeItems?.includes(index) ? true : false}
            />
          );
        })}
      </div>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Guille Miranda</a>.
      </footer>
    </>
  );
}

export default App;
