import Title from "../../components/title/Title";
import { Github, Globe } from "react-bootstrap-icons";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import useStyle from "../../hooks/useStyle";
import "./portfolio.css";

import { useEffect, useRef, useState } from "react";

const Protfolio = () => {
  const files = [
    {
      id: 1,
      title: "Embroidery by jojo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt voluptatem eveniet nam eaque nulla?",
      img: "embroidery.png",
    },
    {
      id: 2,
      title: "next project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt voluptatem eveniet nam eaque nulla?",
      img: "next-project.png",
    },
  ];

  const Single = ({ item }) => {
    
    return (
      <section >
        <div className="row" >
          <div className="image" >
            
          <img src={item.img} alt="img" />

          </div>
          <motion.div className="content"  initial={{scaleX:0}} whileInView={{ scaleX:1}}>
            <div className="head" style={{ color: color }}>
              <h2>{item.title}</h2>
            </div>
            <p>{item.description}</p>
            <div className="links">
              <a href="https://github.com/ArejGris/embroideryByJojo.git">
                <Github size={20} color={color} />
              </a>
              <a href="/">
                <Globe size={20} color={color} />
              </a>
            </div>
          </motion.div>
         
        </div>
      </section>
    );
  };
  const { color, style } = useStyle();


  return (
    <motion.div className="portfolio" style={style.styleMode}>
     <Title title='Portfolio'/>
      <div className="portfolio_contents">
        {files.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default Protfolio;
