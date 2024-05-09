import React, { useState } from "react";
import { askMe, bannerImg, faqs, logo, sparkle } from "../../constants/CommonConstants";
import { GoPlus } from "react-icons/go";
import { RxMinus } from "react-icons/rx";
import { MdArrowRightAlt } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import "./Home.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <img src={logo} className="logoImg" />

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/register">
            <button className="btn--secondary">Get Projects</button>
          </Link>
          <button className="btn--primary">Onboard Talents</button>
        </div>
      </div>
    </div>
  );
};
export const HeroSection = () => {
  return (
    <div className="hero">
      <p className="heroHeading">Success stories</p>

      <p className="heroSubHeading">
        Every success journey <br /> we’ve encountered.
      </p>

      <div className="heroContent">
        <div style={{ position: "relative" }}>
          <img src={bannerImg} className="bannerImg" />
          <div className="box1">
            <img src={sparkle} style={{ position: "absolute", left: "-2rem", top: "0rem" }} />
            <p className="box1Text">40%</p>
            <p className="box1Text2"> Achieved reduction in project execution time by optimising team availability</p>
          </div>
          <div className="box2">
            <BsFillRocketTakeoffFill color="#2da950" />
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <p style={{ margin: "0" }}>10 days</p>
              <p style={{ margin: "0" }}>Staff Deployment</p>
            </div>
          </div>
          <div className="box3">
            <div className="box3TextContainer">
              <p className="box3Text1">$0.5</p>
              <p className="box3Text2">million</p>
            </div>
            <p className="box1Text2"> Reduced client expenses by saving on hiring and employee costs.</p>
          </div>
        </div>
        <div className="heroRightSection">
          <div className="bodyContainer">
            <p className="heroBody">
              {" "}
              Enhance fortune 50 <br />
              company’s insights teams research capabilities
            </p>
            <div className="dots">
              <div className="activeDot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <button className="btn--primary heroBtn">
            Explore more <MdArrowRightAlt fontSize={"1.5rem"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="faqContainer">
      <p className="faqHeading">What’s on your mind</p>
      <div style={{ display: "flex" }}>
        <div className="faqleftContainer">
          <p className="faqSubHeading">Ask Questions</p>
          <img src={askMe} />
        </div>
        <div className="faqRightContainer">
          {faqs.map((faq, index) => (
            <SingleFAQ faq={faq} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SingleFAQ = (props) => {
  const { faq, index } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => setShowAnswer(!showAnswer);
  return (
    <div key={index}>
      <div className="singleFAQ" onClick={handleClick}>
        <p className="faqQues">{faq.ques}</p>
        {showAnswer ? <RxMinus style={{ fontSize: "1.5rem" }} /> : <GoPlus style={{ fontSize: "1.5rem" }} />}
      </div>

      {showAnswer ? <p className="faqAns">{faq.ans}</p> : null}
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footerContainer">
      <p>Talup 2023. All rights reserved</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Header;
