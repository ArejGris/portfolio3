import { List} from "react-bootstrap-icons";
import './navbar.css'
import {useSelector} from 'react-redux'
const Navbar = ({setNext,setPrev}) => {
    const {color,next,prev}=useSelector(state=>state)
    function handleNext(){
        console.log(next,prev)
        setNext()
    }
    function handlePrev(){
        setPrev()
        console.log(next,prev)
    }
    return ( <>
     <div className="navbar">
        <p onClick={handlePrev} style={{color:color,cursor:'pointer'}}>{prev}</p>
        <p onClick={handleNext} style={{color:color,cursor:'pointer'}}>{next}</p>
     
     </div>
    </> );
}
 
export default Navbar;