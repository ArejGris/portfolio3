const colors = ["#ec1839", "#fa5b0f", "#37b182", "#1584b4", "#f021b2"];
import { useDispatch,useSelector } from "react-redux";
import { updateColor,updateMode } from "../../../store/Actions";
import "./theme.css";
import { Gear,Moon,Sun } from "react-bootstrap-icons";
import { useState } from "react";
const ThemeColor = () => {
  const [toggle,setToggle]=useState(false)
  const dispatch = useDispatch();
  const {color,mode }=useSelector(state=>state)
  function handleColor(color) {
    dispatch(updateColor(color));
  }
  function handleMode(mode) {
    dispatch(updateMode(mode));
  }
  function handleToggle(){
    setToggle(prev=>!prev)
  }
  return (
    <div className="section-theme" >
      <div className="icons" style={{ color:mode?'white':'black'}}>
        <Gear onClick={handleToggle}/>
       {mode? <Moon onClick={()=>handleMode(!mode)}/>:<Sun onClick={()=>handleMode(!mode)}/>}

      </div>
      {toggle&&<div className="colors" style={{backgroundColor:!mode? "#151515" : "#f2f2fc",}}>
        {colors.map((color) => {
          return (
            <span
              className="color-item"
              onClick={() => handleColor(color)}
              style={{ backgroundColor: color }}
            ></span>
          );
        })}
      </div>}
    </div>
  );
};

export default ThemeColor;
