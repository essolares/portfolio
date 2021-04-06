import React from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import jsIcon from "@iconify/icons-logos/javascript";
import javaIcon from '@iconify-icons/whh/java';



const About = (props) => {
  if (props.sharedBasicInfo) {
    var profilepic = "images/" + props.sharedBasicInfo.image;
  }
  if (props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.about;
    var hello = props.resumeBasicInfo.description_header;
    var about = props.resumeBasicInfo.description;
    var about1 = props.resumeBasicInfo.description1;
  }

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "#437FC7" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="250px"
                  src={profilepic}
                  alt="Avatar placeholder"
                />
                <Icon
                  icon={javaIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%", color:"#cb2a08"}}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={jsIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                  <br />
                  {about1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;