import React, { Component } from "react";
import { Icon } from "@iconify/react";
import nextjsIcon from "@iconify/icons-logos/nextjs";
import typeScriptIcon from "@iconify/icons-logos/typescript";
import mongoIcon from "@iconify/icons-logos/mongodb";
// import angularIcon from "@iconify/icons-logos/angular-icon";
// import reactIcon from "@iconify/icons-logos/react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
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
                    icon={nextjsIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={mongoIcon}
                    style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={typeScriptIcon}
                    style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
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
                      paddingBottom: 50
                    }}
                  >
                    <br />
                    <span className="wave">{hello} <span role="img" aria-label="hello emoji">👋</span> </span>
                    <br />
                    <br />
                    {about}
                    <span key="github" className="m-1">
                      To see even more projects, check out&nbsp;
                      <a href="https://github.com/ericnjuki" target="_blank" rel="noopener noreferrer">
                          my GitHub <i className="fab fa-github"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
