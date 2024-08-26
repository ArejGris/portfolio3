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
      title: "lavana store Project",
      description:
        "technological website using Next.js fastify , supabase",
      img: "lavana.png",
      demo:'https://areej-repo.vercel.app/en',
      github:' https://gitlab.com/ArejGrisVitLab/lavana-store.git'
    },
    {
      id: 2,
      title: "Embroidery by jojo",
      description:
        "E-commerce project using vue.js bootstrap ",
      img: "embroidery.png",
      demo:'https://embroidary-by-jojo.netlify.app',
      github:'https://github.com/ArejGris/embroideryByJojo.git'
    },
    {
      id: 3,
      title: "Medical Project",
      description:
        "medical website using react.js native swiper and more",
      img: "medical.png",
      demo:'https://medical-project-chi.vercel.app/',
      github:'https://github.com/ArejGris/MedicalProject.git'
    },
    {
      id: 4,
      title: "Bold Project",
      description:
        "technological website using javascript css html",
      img: "bold.png",
      demo:'https://blog1234blog.netlify.app/',
      github:'https://github.com/ArejGris/blog2.git'
    },
    {
      id: 5,
      title: "touristical Project",
      description:
        "touristical website using react ",
      img: "project.png",
      demo:'reactproject-lilac.vercel.app',
      github:'https://github.com/ArejGris/reactproject.git'
    },
   
    {
      id: 6,
      title: "next project",
      description:
        "Next.js project contain sign in sign up pages and more",
      img: "next-project.png",
      demo:'',
      github:'https://github.com/ArejGris/NextApp.git'
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
              <a href={item.github}>
                <Github size={20} color={color} />
              </a>
              <a href={item.demo}>
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
