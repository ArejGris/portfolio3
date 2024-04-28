import React from "react";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Protfolio from "./pages/portfolio/Portfolio";
import ThemeColor from "./components/themeColor/themeColor.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import useStyle from "./hooks/useStyle.js";
import { motion, useAnimation } from "framer-motion";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Skills from "./pages/skills/Skills.jsx";
import { gsap } from "gsap";
import { updateNext,  updatePrev } from "../store/Actions.js";
import {useDispatch} from 'react-redux'
import Reducers from "../store/Reducers.js";
function App() {
  const pages=['Home','Portfolio','Skills','About','Contact']
  const dispatch=useDispatch(Reducers)
  const [toggle, setToggle] = useState(false);
  const [right, setRight] = useState(0);
  const { style } = useStyle(toggle);
  const control = useAnimation();
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);
  const [listening, setListening] = useState(false);
const [current,setCurrent]=useState(0)

  const touch = {
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    startTime: 0,
    dt: 0,
  };

  const tlDefaults = {
    ease: "slow.inOut",
    duration: 1.25,
  };

  const sections = sectionsRef.current;
  const images = imagesRef.current;
  const outerWrappers = outerWrappersRef.current;
  const innerWrappers = innerWrappersRef.current;
  

  function slideIn(current,next) {
    setListening(true)
    console.log("from slidein",current,next)
  gsap.set(sections[current], { zIndex: 0 });

    gsap.set(sections[next], { autoAlpha: 1, zIndex: 1 });
    gsap.set(images[next], { xPercent: 0 });

    const tl = gsap
      .timeline({
        paused: true,
        defaults: tlDefaults,
        onComplete: () => {
    setCurrent(next)
    setListening(false)
        },
      })
      .to([outerWrappers[next], innerWrappers[next]], { xPercent: 0 }, 0)
      .from(images[next], { xPercent: 15 }, 0);

    if (current !== undefined) {
      tl.add(
        gsap.to(images[current], {
          xPercent: -15,
          ...tlDefaults,
        }),
        0
      ).add(
        gsap
          .timeline()
          .set(outerWrappers[current], { xPercent: 100 })
          .set(innerWrappers[current], { xPercent: -100 })
          .set(images[current], { xPercent: 0 })
          .set(sections[current], { autoAlpha: 0, zIndex: 0 })
      );
    }
   
      tl.play(0);
   
    
  }

  // Slides a section out on scroll up
  function slideOut(current,next) {
    if(listening)return
    gsap.set(sections[current], { zIndex: 1 });
    gsap.set(sections[next], { autoAlpha: 1, zIndex: 0 });
    gsap.set([outerWrappers[next], innerWrappers[next]], { xPercent: 0 });
    gsap.set(images[next], { xPercent: 0 });

    gsap
      .timeline({
        defaults: tlDefaults,
        onComplete: () => {
          setCurrent(next)
        },
      })
      .to(outerWrappers[current], { xPercent: 100 }, 0)
      .to(innerWrappers[current], { xPercent: -100 }, 0)
      .to(images[current], { xPercent: 15 }, 0)
      .from(images[next], { xPercent: -15 }, 0)
      .set(sections[current], { xPercent: 0, zIndex: 0 })
      .set(sections[next],{zIndex:99})
      ;
  }
  function handleSlideOut() {
    setListening(false);
    let next=current-1
    if (current <= 0) next=sections.length-1;
    console.log(current,next)
    slideOut(current,next);
  if(next==0){
   dispatch(updatePrev(pages[(4)%5]))
  }else{
    dispatch(updatePrev(pages[(next-1)%5]))
   }
   dispatch(updateNext(pages[(next+1)%5]))
  }
  function handleSlideIn() {
    setListening(false);
    let next=current+1
    if (next >= sections.length) next=0;
    console.log(current,next)
    slideIn(current,next);
   
    dispatch(updateNext(pages[(next+1)%5]))
    if(next==0){
    dispatch(updatePrev(pages[(current)%5]))
  }else{
      dispatch(updatePrev(pages[(next-1)%5]))
    }
    }
  
  
 
 
  useEffect(()=>{
    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });
    gsap.set(innerWrappers[0], { xPercent: 0 });
    gsap.set(outerWrappers[0], { xPercent: 0 });
    gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
    gsap.set(images[0], { xPercent: 0 });
  },[])
  return (
    <div className="App">
      <Navbar setNext={handleSlideIn} setPrev={handleSlideOut} />
      <ThemeColor />

      <section
        className="page sec1"
        id="sec1"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="outer" ref={(el) => (outerWrappersRef.current[0] = el)}>
          <div
            className="inner"
            ref={(el) => (innerWrappersRef.current[0] = el)}
          >
            <div className="bg" ref={(el) => (imagesRef.current[0] = el)}>
              <Home />
            </div>
          </div>
        </div>
      </section>
      <section
        className="page sec2"
        id="sec2"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="outer" ref={(el) => (outerWrappersRef.current[1] = el)}>
          <div
            className="inner"
            ref={(el) => (innerWrappersRef.current[1] = el)}
          >
            <div className="bg" ref={(el) => (imagesRef.current[1] = el)}>
              <Protfolio />
            </div>
          </div>
        </div>
      </section>
      <section
        className="page sec3"
        id="sec3"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="outer" ref={(el) => (outerWrappersRef.current[2] = el)}>
          <div
            className="inner"
            ref={(el) => (innerWrappersRef.current[2] = el)}
          >
            <div className="bg" ref={(el) => (imagesRef.current[2] = el)}>
              <Skills />
            </div>
          </div>
        </div>
      </section>
      <section
        className="page sec4"
        id="sec4"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <div className="outer" ref={(el) => (outerWrappersRef.current[3] = el)}>
          <div
            className="inner"
            ref={(el) => (innerWrappersRef.current[3] = el)}
          >
            <div className="bg" ref={(el) => (imagesRef.current[3] = el)}>
              <About />
            </div>
          </div>
        </div>
      </section>
      <section
        className="page sec5"
        id="sec5"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <div className="outer" ref={(el) => (outerWrappersRef.current[4] = el)}>
          <div
            className="inner"
            ref={(el) => (innerWrappersRef.current[4] = el)}
          >
            <div className="bg" ref={(el) => (imagesRef.current[4] = el)}>
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
