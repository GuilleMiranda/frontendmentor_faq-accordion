import { Fragment } from "react";
import AccordionEntryComponent from "./AccordionEntryComponent";
import favicon from "./assets/images/favicon-32x32.png";
import iconStar from "./assets/images/icon-star.svg";
import { entries } from "./data";

function App() {
  return (
    <>
      <title>Frontend Mentor | FAQ accordion</title>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <div className="accordion-container">
        <header>
          <div className="accordion-title">
            <img src={iconStar} alt="Star icon before the title" />
            <h1 aria-label="Frequently Asked Questions">FAQs</h1>
          </div>
        </header>
        <main>
          {entries.map((entry, index) => {
            let lastEntryIndex = entries.length - 1;
            return (
              <Fragment key={index}>
                <AccordionEntryComponent entry={entry} />

                {lastEntryIndex !== index && <hr />}
              </Fragment>
            );
          })}
        </main>
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
