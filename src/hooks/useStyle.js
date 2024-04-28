import {useDispatch ,useSelector}from "react-redux"
import Reducers from "../../store/Reducers"
import Resize from "./useResize"
import { Justify } from "react-bootstrap-icons"

export default function useStyle(toggle) {
    const {color,mode}=useSelector(state=>state)
    const width=Resize()
  const  style={
    color :color,
    border_img_left:{
      position:'absolute',
      borderLeft:`10px solid ${color}`,
      borderTop:`10px solid ${color}`,
      top:'10px',
      left:'-20px',
      width:'50%',
      height:'50%'
    },
    border_img_right:{
      position:'absolute',
      borderRight:`10px solid ${color}`,
      borderBottom:`10px solid ${color}`,
      right:'-10px',
      bottom:'-10px',
      width:'50%',
      height:'50%'
    },
    border_title_small: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "60px",
      borderBottom: `3px solid ${color}`,
      borderRadius: `0 20px 10px 0`,
    },
    border_title_large: {
      position: "absolute",
      bottom: -11,
      left: 0,
      width: "30px",
      borderBottom: `3px solid ${color}`,
      borderRadius: "0 20px 10px 0",
    },
    animationTitle: {
      hidden: {
        x: "-100vw",
      },
      visible: {
        x: "0",
        transition: { duration: 10, type: "spring", stiffness: "120" },
      },
    },
    sidebar:{
      position:'fixed',
      width:width<540?(toggle?'100%':'0'):(toggle?'30%':'0%'),
    translateX:toggle?0:100,
      height:'100%',
      zIndex:'10',
      transition:.3
    },
    routes:{
      width:width<540?(toggle?'0':'100%'):(toggle?'70%':'100%'),
      
    },
    styleProgress: {
      content: "",
      position: "absolute",
      left: "0",
      top: "0",
      backgroundColor: color,
      // width: '80%',
      height: "6px",
    },
    styleMode:{
    backgroundColor:mode? "#151515" : "#f2f2fc",
    color:mode?'white':'black'
    },
    Link:{
     justifyContent:width<540?'center':'left'
    },
    linkStyle:{
      scale:1.1
    }

}
const variantTransition = {
  exit: { x: "100vw", transition: { duration: 0.2, when: "afterChildren" } },
};
return{
    style,color,variantTransition
}}