import React, { useState } from "react";
import { EnvelopeCheck, GeoAltFill, Globe2, TelephonePlus,Github, Gitlab } from "react-bootstrap-icons";

import { motion } from "framer-motion";

import "./contact.css";
import useStyle from "../../hooks/useStyle";
import Title from "../../components/title/Title";

const Contact = () => {
  const { style, color, variantTransition } = useStyle();
  return (
    <motion.div
      variants={variantTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={style.styleMode}
      className="section-contact"
    >
      <Title title="Contact me" />

      <div className="intro">
        <h2 className="style-para" style={{color:color}}>
          Have You Any Questions ?
        </h2>
        <p className="style-span">I AM AT YOUR SERVICE</p>
      </div>
      <div className="contact-info">
        <div className="row">
          <TelephonePlus fontSize="30px" color={color} />
          <p className="style-para ">Call us on</p>
          <span className="style-span opacity-8">+963993565225</span>
        </div>
        <div className="row">
          <EnvelopeCheck fontSize="30px" color={color} />
          <p className="style-para">Office</p>
          <span className="style-span opacity-8">syria,Hama</span>
        </div>
        <div className="row">
          <GeoAltFill fontSize="30px" color={color} />
          <p className="style-para">Email</p>
          <span className="style-span opacity-8">mairygris1234@gmail.com</span>
        </div>
        <div className="row">
          <Globe2 fontSize="30px" color={color} />
          <p className="style-para">Website</p>
          <span className="style-span opacity-8">this is my website</span>
        </div>
        <div className="row">
          <Github fontSize="30px" color={color} />
          <p className="style-para">github</p>
          <span className="style-span opacity-8">https://github.com/ArejGris</span>
        </div>
        <div className="row">
          <Gitlab fontSize="30px" color={color} />
          <p className="style-para">gitlab</p>
          <span className="style-span opacity-8">https://gitlab.com/ArejGrisVitLab</span>
        </div>
      </div>
      <div className="section-sendEmail">
        <div className="intro-email">
          <h2 style={{color:color}} className="style-para">
            send me an email
          </h2>
          <p className="style-span">i'm very responsive to message</p>
        </div>
        <div className="contact">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea type="text" placeholder="Message" />
          <button style={{backgroundColor:color}} className="button">
            Send massage
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
