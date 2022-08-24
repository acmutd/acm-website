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

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseOver = (section) => {
    setIsHovering(true);
    section.target.style.cursor = "pointer";
    section.target.style.fontWeight = "bold";
  };

  const handleMouseOut = (section) => {
    setIsHovering(false);
    section.target.style.fontWeight = "normal";
  };

  return (
    <div className="scroll-bar">
      <div className="fixed-c">
        <ul className="fixed-c-items">
          <li
            ref={props.refs.section1}
            onClick={() => scrollToSection(props.refs.section1)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {props.sectionTitle1}
          </li>
          <li
            ref={props.refs.section2}
            onClick={() => scrollToSection(props.refs.section2)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {props.sectionTitle2}
          </li>
          <li
            ref={props.refs.section3}
            onClick={() => scrollToSection(props.refs.section3)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {props.sectionTitle3}
          </li>
          <li
            ref={props.refs.section4}
            onClick={() => scrollToSection(props.refs.section4)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {props.sectionTitle4}
          </li>
        </ul>
      </div>

      <div>
        <ul>{renderBinary}</ul>
      </div>
    </div>
  );
}
