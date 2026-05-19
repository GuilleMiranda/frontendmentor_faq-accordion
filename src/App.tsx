import { useState } from "react";
import favicon from "./assets/images/favicon-32x32.png";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconStar from "./assets/images/icon-star.svg";

function App() {
  const [activeItems, setActiveItems] = useState<Array<number>>();
  const items = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      body: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "Is Frontend Mentor free?",
      body: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      body: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! How can I get help if I'm stuck on a Frontend Mentor challenge? The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

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
        {items.map((item, index) => {
          return (
            <div key={index}>
              <div className="accordion-header">
                <h2>{item.title}</h2>
                <button
                  onClick={() => {
                    handleButton(index);
                  }}
                >
                  <img
                    src={activeItems?.includes(index) ? iconMinus : iconPlus}
                    alt={
                      activeItems?.includes(index)
                        ? "Hide the content of " + item.title
                        : "Show the content of " + item.title
                    }
                  />
                </button>
              </div>
              <div
                className={`accordion-body ${activeItems?.includes(index) ? "active-item" : ""}`}
              >
                <p>{item.body}</p>
              </div>
            </div>
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
