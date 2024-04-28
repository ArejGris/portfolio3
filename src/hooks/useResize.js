import { useEffect, useState } from "react";

const Resize = () => {
  const [win,setWin]=useState(window.innerWidth)
  function resizeFun(){
    setWin(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',resizeFun)
    return window.removeEventListener('resize',resizeFun)
  },[win])
  return win
}
 
export default Resize;