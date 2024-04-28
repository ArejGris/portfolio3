import {
  Briefcase,
  ChatDotsFill,
  HouseFill,
  ListTask,
  PersonFill,
  X
} from "react-bootstrap-icons";
import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom";
import Resize from "../../hooks/useResize";
import './sidebar.css'
import useStyle from "../../hooks/useStyle";
const namespaces = [
  { name: "Home", icon: <Briefcase /> },
  { name: "About", icon: <ChatDotsFill /> },
  { name: "Skills", icon: <HouseFill /> },
  { name: "Portfolio", icon: <ListTask /> },
  { name: "Contact", icon: <PersonFill /> },
];
const Sidebar = ({toggle,setToggle}) => {
    const winwidth=Resize()
    const {style}=useStyle()
    function handleMenu(){
        setToggle(prev=>!prev)
    }

  return (
    <motion.div className="section-sidebar">
      <div className="border-name">
        <p>Areej</p>
      </div>
      <div className="close" onClick={handleMenu}>x</div>
      <div className="item-section">
        <div className="list-style">
          {namespaces.map((item) => {
            return (
              <li key={item.name} onClick={handleMenu}>
                <NavLink to={item.name === "Home" ? "" : `/${item.name}`} >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
