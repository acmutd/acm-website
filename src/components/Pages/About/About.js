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
import Button from "../../Button/Button";
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
            <div className="buttonContainer">
              <div className="button">
                <Button
                  color1={"#9900E1"}
                  color2={"#0C09FD"}
                  children={"acm portal"}
                  onClick={console.log("you have clicked acm portal button")}
                  size={"small"}
                ></Button>
              </div>

              <div className="button">
                <Button
                  color1={"#9900E1"}
                  color2={"#0C09FD"}
                  children={"hackportal"}
                  onClick={console.log("you have clicked hackportal button")}
                  size={"small"}
                ></Button>
              </div>

              <div className="button">
                <Button
                  color1={"#9900E1"}
                  color2={"#0C09FD"}
                  children={"utdgrades"}
                  onClick={console.log("you have clicked utdgrades button")}
                  size={"small"}
                ></Button>
              </div>

              <div className="button">
                <Button
                  color1={"#9900E1"}
                  color2={"#0C09FD"}
                  children={"github"}
                  onClick={console.log("you have clicked github button")}
                  size={"small"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divisionContainer">
        <img className="divisionPhoto" src={aboutImage2}></img>

        <div className="textContainer">
          <div className="headingContainer">
            <img className="divisionLogo" src={research}></img>
          </div>

          <div className="divisionSubheadingContainer">
            <h2 className="subheading-three">
              ACM Research is a semester-long, research-based initiative for
              students who want to explore various subfields in computer
              science. You will be guided by a research lead and faculty advisor
              throughout the semester to successfully create a tangible research
              project.
            </h2>
            <div className="buttonContainer">
              <div className="button">
                <Button
                  color1={"#EA5400"}
                  color2={"#FDBE00"}
                  children={"apply today"}
                  onClick={console.log(
                    "you have clicked research apply button"
                  )}
                  size={"small"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divisionContainer">
        <img className="divisionPhoto" src={aboutImage2}></img>

        <div className="textContainer">
          <div className="headingContainer">
            <img className="divisionLogo" src={education}></img>
          </div>

          <div className="divisionSubheadingContainer">
            <h2 className="subheading-three">
              ACM Education helps give students valuable skills needed for the
              workforce. While college degrees may be more theory based, we aim
              to give students knowledge not typically attained in the
              classroom. We run the Technical Interview Prep Program and the
              Mentor Program.
            </h2>
            <div className="buttonContainer">
              <div className="button">
                <Button
                  color1={"#54E103"}
                  color2={"#01E9BD"}
                  children={"TIP"}
                  onClick={console.log("you have clicked TIP button")}
                  size={"small"}
                ></Button>
              </div>

              <div className="button">
                <Button
                  color1={"#54E103"}
                  color2={"#01E9BD"}
                  children={"mentor program"}
                  onClick={console.log(
                    "you have clicked mentor program button"
                  )}
                  size={"small"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divisionContainer">
        <img className="divisionPhoto" src={aboutImage2}></img>

        <div className="textContainer">
          <div className="headingContainer">
            <img className="divisionLogo" src={media}></img>
          </div>

          <div className="divisionSubheadingContainer">
            <h2 className="subheading-three">
              ACM Media is our newest creative team behind all the marketing and
              design responsibilities that encompass ACM at UTD. We're comprised
              of talented designers, and marketing specialists who help conduct
              marketing campaigns and maximize attendance.
            </h2>
            <div className="buttonContainer">
              <div className="button">
                <Button
                  color1={"#E10087"}
                  color2={"#F48831"}
                  children={"instagram"}
                  onClick={console.log("you have clicked instagram button")}
                  size={"small"}
                ></Button>
              </div>

              <div className="button">
                <Button
                  color1={"#E10087"}
                  color2={"#F48831"}
                  children={"medium"}
                  onClick={console.log("you have clicked medium button")}
                  size={"small"}
                ></Button>
              </div>

              <div className="button">
                <Button
                  color1={"#E10087"}
                  color2={"#F48831"}
                  children={"newsletter"}
                  onClick={console.log("you have clicked newsletter button")}
                  size={"small"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divisionContainer">
        <img className="divisionPhoto" src={aboutImage2}></img>

        <div className="textContainer">
          <div className="headingContainer">
            <img className="divisionLogo" src={projects}></img>
          </div>

          <div className="divisionSubheadingContainer">
            <h2 className="subheading-three">
              ACM Projects is a semester-long guided projects initiative for
              those new to software development, teaching collaborative tools,
              new technologies, and core development principles complimentary to
              curriculum.
            </h2>
            <div className="buttonContainer">
              <div className="button">
                <Button
                  color1={"#018CF1"}
                  color2={"#00DFEC"}
                  children={"apply today"}
                  onClick={console.log(
                    "you have clicked projects apply today button"
                  )}
                  size={"small"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divisionContainer">
        <img className="divisionPhoto" src={aboutImage2}></img>

        <div className="textContainer">
          <div className="headingContainer">
            <img className="divisionLogo" src={hackutd}></img>
          </div>

          <div className="divisionSubheadingContainer">
            <h2 className="subheading-three">
              ACM hosts HackUTD, North Texas' largest university hackathon.
              HackUTD VII brought over 800 students together for 24 hours of
              ideas, code, and design.
            </h2>
            <div className="buttonContainer">
              <div className="button">
                <Button
                  color1={"#FE012E"}
                  color2={"#BE01D4"}
                  children={"website"}
                  onClick={console.log(
                    "you have clicked hackutd website button"
                  )}
                  size={"small"}
                ></Button>
              </div>
              <div className="button">
                <Button
                  color1={"#FE012E"}
                  color2={"#BE01D4"}
                  children={"instagram"}
                  onClick={console.log(
                    "you have clicked hackutd instagram button"
                  )}
                  size={"small"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divisionContainer">
        <img className="divisionPhoto" src={aboutImage2}></img>

        <div className="textContainer">
          <div className="headingContainer">
            <img className="divisionLogo" src={industry}></img>
          </div>

          <div className="divisionSubheadingContainer">
            <h2 className="subheading-three">
              ACM hosts HackUTD, North Texas' largest university hackathon.
              HackUTD VII brought over 800 students together for 24 hours of
              ideas, code, and design.
            </h2>
            <div className="buttonContainer">
              <div className="button">
                <Button
                  color1={"#6F6F6F"}
                  color2={"#C4C4C4"}
                  children={"events"}
                  onClick={console.log(
                    "you have clicked industry events button"
                  )}
                  size={"small"}
                ></Button>
              </div>
              <div className="button">
                <Button
                  color1={"#6F6F6F"}
                  color2={"#C4C4C4"}
                  children={"meet the team"}
                  onClick={console.log(
                    "you have clicked industry meet the team button"
                  )}
                  size={"small"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
