import React, { useRef } from "react";

import "./Programs.css";
import "./Test.js";

import Scrollbar from "../Scrollbar/Scrollbar";
import img1 from "../../assets/projects-photo1.png";
import projectsLogo1 from "../../assets/projects-logo-words-white.png";
import quoteLeft from "../../assets/projects-quote-left.png";
import quoteRight from "../../assets/projects-quote-right.png";
import winningProjectImage1 from "../../assets/winningProjectImage1.png";
import faqImage1 from "../../assets/projectsFaqImage1.png";
import faqImage2 from "../../assets/projectsFaqImage2.png";

import ProgramComponents, {
  Directors,
  Experience,
  WinningProjects,
} from "./ProgramComponents";
import Test from "./Test.js";

import Button from "../Button/Button";

function Projects(props) {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  const refs = { section1, section2, section3, section4 };

  return (
    <div>
      <Scrollbar
        sectionTitle1="directors"
        sectionTitle2="experience"
        sectionTitle3="winning projects"
        sectionTitle4="faq"
        refs={refs}
        style={{ position: "absolute", zIndex: 10 }}
      ></Scrollbar>
      <Test></Test>
      <div
        className="header-image-container"
        style={{ position: "relative", zIndex: 2 }}
      >
        <img src={img1} className="header-image"></img>
        <div className="header-image-caption">
          <h3 className="caption-text">Projects Presentation Night</h3>
          <h3 className="caption-text">Shot Sunday, May 29, 2022 at 4:07 PM</h3>
        </div>
      </div>
      <div className="programs-format">
        <div className="logo-container">
          <img src={projectsLogo1} className="logo-styling"></img>
        </div>

        <h2 className="body1" style={{ width: "100%" }}>
          ACM Projects is a semester-long guided projects initiative for those
          new to software development, teaching collaborative tools, new
          technologies, and core development principles complimentary to
          curriculum.
        </h2>

        <Button
          color1={"#008CF1"}
          color2={"#00ECEC"}
          children={"apply today"}
          onClick={console.log("you have clicked projects apply now button")}
          size={"small"}
        ></Button>

        <h2 ref={section1} className="subheading1">
          meet the directors
        </h2>

        <Directors
          name={"Saksham Sangrula"}
          image={"officer-images/Saksham-Sangraula.png"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        ></Directors>

        <Directors
          name={"Reshmi Ranjith"}
          image={"officer-images/Reshmi-Ranjith.png"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        ></Directors>

        <h2 ref={section2} className="subheading1">
          experience
        </h2>

        <Experience
          type={"projects"}
          quote={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
          name={"Saksham Sangrula"}
          info={"freshman, projects 2019"}
        ></Experience>

        <Experience
          type={"projects"}
          quote={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
          name={"Saksham Sangrula"}
          info={"freshman, projects 2019"}
        ></Experience>

        <h2 ref={section3} className="subheading1">
          winning projects
        </h2>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "300", color: "#CACACA" }}>
          SP22 1st place
        </h2>

        <WinningProjects
          image={
            <img style={{ width: "100%" }} src={winningProjectImage1}></img>
          }
          name={"project name"}
          githubLink={"link1"}
          youtubeLink={"link2"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          }
          members={"person1, person2, person3"}
          pm={"pm1"}
        ></WinningProjects>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "300", color: "#CACACA" }}>
          F21 1st place
        </h2>

        <WinningProjects
          image={
            <img style={{ width: "100%" }} src={winningProjectImage1}></img>
          }
          name={"project name"}
          githubLink={"link1"}
          youtubeLink={"link2"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          }
          members={"person1, person2, person3"}
          pm={"pm1"}
        ></WinningProjects>

        <h2
          ref={section4}
          className="subheading1"
          style={{ paddingTop: "10%" }}
        >
          frequently asked questions
        </h2>

        <h2 className="questionText">What is the application process like?</h2>
        <h2 className="answerText" style={{ paddingBottom: "5%" }}>
          The first step is to fill out our application. Our application
          consists of general questions intended to give us insight into your
          previous development and leadership experience. From these
          applications, we select the most promising candidates for one-on-one
          interviews. The interview is the last step of the application process.
          Based on the application and interview, we select the very best
          candidates to create around 8 teams of 5 people.
        </h2>

        <h2 className="questionText">
          Do I need to have prior development experience?
        </h2>
        <h2 className="answerText" style={{ paddingBottom: "5%" }}>
          ACM Projects is designed for those new to software development.
          Although some experience is great, we're looking for passionate and
          committed candidates who have a desire to learn and grow in software
          development
        </h2>

        <div className="faqImagesContainer">
          <img className="faqImage" src={faqImage1}></img>
          <img className="faqImage" src={faqImage2}></img>
        </div>
        <h2 className="questionText" style={{ paddingTop: "5%" }}>
          How do I stand out during the application process?
        </h2>
        <h2 className="answerText" style={{ paddingBottom: "5%" }}>
          Be genuine! We want to see your passion for technology and desire to
          learn. We can only judge your experience and character based on what
          we see in the application, so fill all of the questions out! Leaving
          questions blank is a lost opportunity for us to learn more about you.
        </h2>

        <h2 className="questionText">How is ACM Projects structured?</h2>
        <h2 className="answerText" style={{ paddingBottom: "5%" }}>
          You will be placed into a team of five students with a project and a
          mentor. We will have weekly (and mandatory) build nights every
          Wednesday from 8:30 pm - 10:00 pm. This is time for you to work with
          your team, meet with your mentor and learn. Some build nights may
          include a short tech-related workshop designed to diversify your tech
          skills.{" "}
        </h2>

        <h2 className="questionText">What is the time commitment?</h2>
        <h2 className="answerText" style={{ paddingBottom: "5%" }}>
          The minimum time commitment is the 1.5 hours required for each weekly
          build night. Beyond this, you and your team may need extra time to
          complete your project so it's up to you to schedule the time amongst
          yourselves.{" "}
        </h2>
      </div>
    </div>
  );
}

export default Projects;
