import Title from "../../components/title/Title";
import "./about.css";
import { motion } from "framer-motion";
import useStyle from "../../hooks/useStyle";
const About = () => {
  const { style ,color} = useStyle();
  const variantProgress = {
    hidden: {
      width: 0,
    },
    visible: (i) => ({
      width: i,
      backgroundColor: i >= "70%" ? "green" : "red",
      transition: { duration: 10, type: "spring", delay: 0.3 },
    }),
  };
  const variants={
    out:{
     y:-100
    },
    in:{
   y:0,
   transition:{type:'spring',stiffness:200,dumping:30}
    }
  }
  return (
    <div className="about" style={style.styleMode}>
      <Title title="About" />
      <ul className="about-content">
        <div className="brief"></div>
        <h1 style={{color:color}}>Brief</h1>
        <motion.ul className="card-identifier" variants={variants} initial='out' whileInView='in'>
          <li style={{borderColor:color}}>
            <p className="bold">Name</p>
            <p>Areej</p>
          </li>
          <li style={{borderColor:color}}>
            <p className="bold">Age</p>
            <p>29</p>
          </li>
          <li style={{borderColor:color}}>
            <p className="bold">city</p>
            <p>Hama</p>
          </li>
          <li style={{borderColor:color}}>
            <p className="bold">Email</p>
            <p>mairygris1234@gmail.com</p>
          </li>
          <li style={{borderColor:color}}>
            <p className="bold">Phone</p>
            <p>963993565225</p>
          </li>
        </motion.ul>
        <h1 style={{color:color}}>Education</h1>
        <motion.div className="education" variants={variants} initial='out' whileInView='in'>
         
          <p>
            <span className="bold">
              Bachlor's degree at Tishreen Univercity
            </span>
            <span>2013..2020</span>
          </p>
          <p>
            <span className="bold">Secondary school</span>
            <span>2010..2013</span>
          </p>
          <p>
            <span className="bold">Primary school</span>
            <span>2000..2010</span>
          </p>
        </motion.div>
        <h1 style={{color:color}}>Experience</h1>
        <motion.div className="experience" variants={variants} initial='out' whileInView='in'>
        
          <p>
            <span className="bold">
              FullStack Developer with Rexa 4 company
            </span>
            <p>
              i m still there until now working in next14 react.js and fastify{" "}
            </p>
          </p>
          <p>
            <span className="bold">
              Front-End Developer with Cutting-EdgeTeam
            </span>
            <p>
              i worked for many projects in css and vue.js and vuetify and used
              also vanilla javascript and libraries like gsap google cloud
              insetruction/mutation observer
            </p>
          </p>
        </motion.div>
        <h1 style={{color:color}}>Skills</h1>
        <motion.div className="myskills" variants={variants} initial='out' whileInView='in'>
         
          <div className="row">
            <div className="degree">
              <span className="bold">Html/Html5</span>
              <span className="circle">90%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="90%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          <div className="row">
            <div className="degree">
              <span className="bold">Css</span>
              <span className="circle">80%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="80%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          <div className="row">
            <div className="degree">
              <span className="bold">Vanilla javascript</span>
              <span className="circle">90%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="90%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          <div className="row">
            <div className="degree">
              <span className="bold">React.js</span>
              <span className="circle">70%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="70%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          <div className="row">
            <div className="degree">
              <span className="bold">vue.js</span>
              <span className="circle">70%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="70%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          <div className="row">
            <div className="degree">
              <span className="bold">Github/Gitlab</span>
              <span className="circle">80%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="80%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
        </motion.div>
      </ul>
    </div>
  );
};

export default About;
