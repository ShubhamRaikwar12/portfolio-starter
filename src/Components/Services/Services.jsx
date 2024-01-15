import React, {useContext} from "react";
import "./Services.css";
import Humble from "../../img/humble.png";
import HeaderEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Resume from "./Resume.pdf"
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Services() {
  const transition = { duration: 1, type: "spring" };

  //context
  const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode ? "white": ""}}>My Awesome</span>
        <span>services</span>
        <span>
          Over 500+ professionally designed, d customize to your heart’s content
          <br />
          and customize to your heart’s content.
        </span>
        <a href={Resume}>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* right side */}
      <div className="cards">

        <motion.div 
        whileInView={{left: '14rem'}}
        initial={{left: '25rem'}}
        transition={transition}
        >
            <Card 
                emoji = {HeaderEmoji}
                heading= {'Design'}
                detail= {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
            <Card 
                emoji = {Glasses}
                heading= {'Design'}
                detail={"Html, Css, JavaScript, React, Nodejs, Express"}
            />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
        <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
