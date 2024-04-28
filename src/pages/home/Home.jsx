import './home.css'
import useStyle from '../../hooks/useStyle';
import { Typewriter } from 'react-simple-typewriter';
import {useSelector} from 'react-redux'
Typewriter
const Home = () => {
    const {style}=useStyle()
    useSelector(state=>state)
  return (
    <div className="section-home" style={style.styleMode}>
      <div className="content-home">
        <div className="content-info">
           <p>hello my name is Areej issa</p>
           <p>I'm a   </p>
           <span style={style}>
     <Typewriter
     words={["frontend developer","backend developer"]}
     loop
     cursor
     cursorStyle='|'

     />
           </span>
        </div>
        <div className="content-image">
          <span style={style.border_img_left}></span>
          <span style={style.border_img_right}></span>
            <img src="areeg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
