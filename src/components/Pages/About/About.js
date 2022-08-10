import React from "react";
import aboutImage1 from "../../../assets/aboutImage1.png";
import aboutImage2 from "../../../assets/aboutImage2.png";
import projects from "../../../assets/projects.png";
import dev from "../../../assets/dev.png";
import diversity from "../../../assets/diversity.png";
import education from "../../../assets/education.png";
import hackutd from "../../../assets/hackutd.png";
import community from "../../../assets/community.png";
import industry from "../../../assets/industry.png";
import media from "../../../assets/media.png";
import research from "../../../assets/research.png";
import "../About/About.css";
import "../Style.css";
import projectLogoWords from "../../../assets/projects-logo-words-white.png";

function About(props) {
  return (
    <div>
      <div className="headerContainer">
        <img className="headerPhoto" src={aboutImage1}></img>

        <div className="textContainer">
          <div className="headingContainer">
            <h1 className="header" style={{ lineHeight: "1.2" }}>
              we're just a group of people
            </h1>
          </div>

          <div className="subheadingContainer">
            <h2 className="subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </h2>
          </div>
        </div>
      </div>

      <div className="divisionText">
        <h1
          className="header-two"
          style={{ textAlign: "center", marginTop: "12%", fontSize: 35 }}
        >
          Divisions
        </h1>

        <h2
          className="subheading-two"
          style={{ textAlign: "center", marginTop: "-2%", width: "60%" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </h2>
      </div>

      <div className="divisionGrid">
        <div className="item1">
          <img className="pic" src={projects}></img>
        </div>
        <div className="item1">
          <img className="pic" src={research}></img>
        </div>
        <div className="item1">
          <img className="pic" src={education}></img>
        </div>
        <div className="item1">
          <img className="pic" src={media}></img>
        </div>
        <div className="item1">
          <img className="pic" src={hackutd}></img>
        </div>
        <div className="item1">
          <img className="pic" src={industry}></img>
        </div>
        <div className="item1">
          <img className="pic" src={community}></img>
        </div>
        <div className="item1">
          <img className="pic" src={dev} style={{ marginLeft: "20%" }}></img>
        </div>
      </div>

      <div className="divisionContainer">
        <img className="divisionPhoto" src={aboutImage2}></img>

        <div className="textContainer">
          <div className="headingContainer">
            <img className="divisionLogo" src={dev}></img>
          </div>

          <div className="divisionSubheadingContainer">
            <h2 className="subheading-three">
              ACM Development is the group responsible for building maintainable
              open-source software. It provides students a platform to apply
              their computer science knowledge by building production-ready
              applications such as HackPortal and our Member Portal. The Dev
              team exists to simplify and accelerate student growth and
              engagement within ACM.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
