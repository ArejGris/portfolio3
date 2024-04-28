import './skill.css'
import { CodeSlash, Laptop, MegaphoneFill, PaletteFill, Phone, Search,Github } from "react-bootstrap-icons";
import Title from "../../components/title/Title";
import {motion} from 'framer-motion'
import useStyle from '../../hooks/useStyle';
const Skills = () => {
    const variants={
        in:{
            y:0,
            transition:{type:'spring',duration:2,stiffness:200,duming:30}
        },
        out:{
            y:100
        }
    }
    const {color,style}=useStyle()
    return ( <motion.div>
      
             <div className="skills" style={style.styleMode}>
             <Title title='Skills'/>
                <Title/>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>HTML</h4>
                    <p>i know all features</p>
                    <div className="icon"><CodeSlash size={40} color={color}/></div>
                </motion.div>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>Css</h4>
                    <p>I know all features and how to make beautiful styles ..its framework scss and sass</p>
                    <div className="icon"><PaletteFill size={40} color={color}/></div>
                </motion.div>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>Javascript</h4>
                    <p>I know all features about Es6 ..</p>
                    <div className="icon"><Laptop size={40} color={color}/></div>
                </motion.div>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>Vue.js</h4>
                    <p>i know a lot of features including plugins props  components emmits inject  provide pinia vuetify  slots dynamic component its framwork nuxt.js...</p>
                    <div className="icon"><MegaphoneFill size={40} color={color}/></div>
                </motion.div>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>React.js</h4>
                    <p>i know alot of features including component props and stores like redux context and how to use hooks like  useState useEffect useCallback useInView</p>
                    <div className="icon"><Phone size={40} color={color}/></div>
                </motion.div>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>Next.js</h4>
                    <p>i know alot of features including how to prefer client and server ou prerender page accourding to SEO crawlers demands and to speed and security and how to use API Image dynamic pages layouts middleware and how to getDate in server .....etc </p>
                    <div className="icon"><Laptop size={40} color={color}/></div>
                </motion.div>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>Animations</h4>
                    <p>i can use gsap and framer motion and swiper and slick slider...</p>
                    <div className="icon"><Search size={40} color={color}/></div>
                </motion.div>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>node.js</h4>
                    <p>i know it features like models controllers and routes and connect with mongodb and how to use mongoose in CRUD operation and sign in sign out ..</p>
                    <div className="icon"><CodeSlash size={40} color={color}/></div>
                </motion.div>
                <motion.div className="row" variants={variants} initial='out' whileInView='in'>
                    <h4>fastify</h4>
                    <p>framework of node.js but much easier .. ..</p>
                    <div className="icon"><Laptop size={40} color={color}/></div>
                </motion.div>
                
                </div> 
                

    </motion.div> );
}
 
export default Skills;