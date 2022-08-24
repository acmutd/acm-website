import React, { useEffect, useState } from "react";
import "./Scrollbar.css";

export default function Scrollbar(props) {
  const binaryArray = [
    "0",
    "1",
    "1",
    "0",
    "0",
    "0",
    "1",
    "0",
    "1",
    "1",
    "0",
    "0",
    "0",
    "1",
    "1",
    "0",
    "1",
    "1",
    "0",
    "1",
    "1",
    "0",
    "1",
    "0",
    "0",
    "1",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "1",
    "1",
    "1",
    "0",
    "1",
    "0",
    "1",
    "0",
    "1",
    "1",
    "1",
    "0",
    "1",
    "0",
    "0",
    "0",
    "1",
    "1",
    "0",
    "0",
    "1",
    "0",
    "0",
    "/",
  ];

  const [height, setHeight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    setHeight(document.documentElement.scrollHeight - 110);
  }, []);

  var n = Math.round(height / 8);

  let binary = new Array(n);
  for (let i = 0; i < n; i++) {
    binary[i] = binaryArray[i % 56];
  }

  const renderBinary = binary.map((number) => (
    <li className="bin-text" key={number}>
      {number}
    </li>
  ));

  const handleClick = (section, ref) => {
    setActiveSection(section);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseOver = (section) => {
    setIsHovering(true);
    section.target.style.cursor = "pointer";
    // section.target.style.fontWeight = "bold";
  };

  const handleMouseOut = (section) => {
    setIsHovering(false);
    section.target.style.fontWeight = "normal";
  };

  return (
    <div className="scroll-bar">
      <div className="fixed-c">
        <ul className="fixed-c-items">
          {props.sectionTitles.map((index) => (
            <li
              style={{
                fontWeight: activeSection === index ? "bold" : "normal",
              }}
              onClick={() => handleClick(index, index.ref)}
              onMouseOver={handleMouseOver}
              //   onMouseOut={handleMouseOut}
              key={index}
            >
              {index.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>{renderBinary}</ul>
      </div>
    </div>
  );
}
