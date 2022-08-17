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

  return (
    <div className="scroll-bar">
      <div className="fixed-c">
        <ul className="fixed-c-items">
          <li
            ref={props.refs.directors}
            onClick={() => scrollToSection(props.refs.directors)}
          >
            directors
          </li>
          <li
            ref={props.refs.experience}
            onClick={() => scrollToSection(props.refs.experience)}
          >
            experience
          </li>
          <li
            ref={props.refs.projects}
            onClick={() => scrollToSection(props.refs.projects)}
          >
            winning projects
          </li>
          <li
            ref={props.refs.faq}
            onClick={() => scrollToSection(props.refs.faq)}
          >
            faq
          </li>
        </ul>
      </div>

      <div>
        <ul>{renderBinary}</ul>
      </div>
    </div>

    /*} <div className='wrapper'>

            <div className='main'></div>

            <div class="fixed-content">
                <ul className='fixed-content-items'>
                    <li>directors</li>
                    <li>experience</li>
                    <li>winning projects</li>
                    <li>faq</li>
                </ul>
            </div>

            <div className='binary-text'>
                01100001011000110110110100100000011101010111010001100100/01100001011000110110110100100000011101010111010001100100
            </div>


    </div>*/
  );
}
