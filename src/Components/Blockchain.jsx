import React from "react";
import "./Blockchain.css";
import work from "../assets/img-work-with-us.png";
import consulting from "../assets/icon-consulting.svg";
import blockchain from "../assets/icon-blockchain.svg";
import development from "../assets/icon-Services.svg";

const Blockchain = () => {
  return (
    <div className="blockchain" id="Work">
        <div className="container blockchain-flex py-5 mt-5">
            <div className="">
                <div className="blockchain-content" data-aos="fade-up">
                    <h5 className="blockchain-h5">Work with <span>us</span></h5>
                    <h2 className="blockchain-h2">Successfully launch your <br />blockchain project.</h2>
                    <div className="blockchain-content-flexs mt-4">
                        <div className="blockchain-content-flex">
                            <div className="blockchain-around"><img src={consulting} alt="" /></div>
                            <h5>Blockchain <br /> Consulting</h5>
                        </div>
                        <div className="blockchain-content-flex">
                            <div className="blockchain-around"><img src={blockchain} alt="" /></div>
                            <h5>Blockchain <br /> Development</h5>
                        </div>
                    </div>
                    <div className="blockchain-content-flex mt-3">
                        <div className="blockchain-around"><img src={development} alt="" /></div>
                        <h5>Blockchain <br /> Integration</h5>
                    </div>
                </div>
            </div>
            {/* img section  */}
            <div data-aos="fade-down">
                <img src={work} alt="" className="blockchain-img"/>
            </div>
        </div>
    </div>
  );
};

export default Blockchain;
