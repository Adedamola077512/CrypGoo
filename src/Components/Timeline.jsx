import React from "react";
import "./Timeline.css";
import myImage from "../assets/timeline.png";
import plainning from "../assets/icon-planning.svg";
import refinement from "../assets/icon-refinement.svg";
import prototype from "../assets/icon-prototype.svg";
import support from "../assets/icon-support.svg";
const Timeline = () => {
  return (
    <div className="timeline py-5" id="Development">
      <div className="timeline-content" data-aos="fade-up">
        <h3>
          Developer <span>timeline</span>
        </h3>
        <h1>
          We can enter at any point or help you all the <br />
          way throung the development cycle
        </h1>
      </div>

      {/* img section  */}
      <div
        className="container "
        data-aos="zoom-in"
        id="timeline-image"
      >
        <div className="timeline-img"><img src={myImage} alt="" /></div>
        <div className="timeline-box container">
            <div className="timeline-box-content" id="content-flex">
                <div>
                    <h4>Planning</h4>
                    <p className="timeline-p">Map the project'sscope   <br />and architecture</p>
                </div>
                <div className="blockchain-around"><img src={plainning} alt="" /></div>
            </div>
            <div className="timeline-box-content">
                <div className="blockchain-around"><img src={refinement} alt="" /></div>
                <div>
                    <h4>Refinement</h4>
                    <p className="timeline-p">Refine and improve your <br /> solution</p>
                </div>
            </div>
        </div>

        {/* another section of div  */}
        <div className="timeline-box2 container">
          <div className="timeline-box-content" id="content-flex">
            <div>
              <h4>Prototype</h4>
              <p className="timeline-p">Build a working <br /> prototype to text your product</p>
            </div>
            {/* img  */}
            <div className="blockchain-around">
              <img src={prototype} alt="" />
            </div>
          </div>
          <div className="timeline-box-content">
            {/* img  */}
            <div className="blockchain-around">
              <img src={support} alt="" />
            </div>
            <div>
              <h4>Support</h4>
              <p className="timeline-p">Deploy the product <br /> and ensure full  support by us </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
