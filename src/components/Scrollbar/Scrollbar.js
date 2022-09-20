import React, { useEffect, useState, useCallback } from "react";
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

  // TODO: figure out how to find offsetBottom
  const getDimensions = (ref) => {
    const { windowHeight } = ref.getBoundingClientRect();
    const offsetTop = ref.offsetTop;
    const offsetBottom = offsetTop + windowHeight;

    return {
      offsetTop,
      offsetBottom,
    };
  };

  const [height, setHeight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState();
  const [scroll, setPosition] = useState();

  useEffect(() => {
    const { offsetTop: headerHeight } = getDimensions(props.headerRef.current);
    setHeight(document.documentElement.scrollHeight - headerHeight);
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      const { offsetTop: headerHeight } = getDimensions(
        props.headerRef.current
      );
      const scrollPosition = window.scrollY;

      const selected = props.sections.find(({ title, ref }) => {
        const section = ref.current;
        if (section) {
          const { offsetTop, offsetBottom } = getDimensions(section);
          setPosition(offsetTop);
          return (
            scrollPosition > offsetTop + headerHeight * 2 &&
            scrollPosition < offsetTop + headerHeight * 5
          );
        }
      });

      if (selected && selected.title !== activeSection) {
        setActiveSection(selected.title);
      } else if (!selected && activeSection) {
        setActiveSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

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
    ref.current.scrollIntoView({ behavior: "smooth" });
    // setActiveSection(section);
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
          {props.sections.map((index) => (
            <li
              style={{
                fontWeight: activeSection === index.title ? "bold" : "normal",
              }}
              onClick={() => handleClick(index.title, index.ref)}
              onMouseOver={handleMouseOver}
              // onMouseOut={handleMouseOut}
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
