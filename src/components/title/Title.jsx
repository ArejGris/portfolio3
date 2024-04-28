import React from 'react';

import './title.css'
import {motion} from "framer-motion";
import useStyle from '../../hooks/useStyle';

const Title = ({title}) => {
    const{style}=useStyle()
    return (
        <motion.div
                  variants={style.animationTitle}
                  initial='hidden'
                  animate='visible'
            className='title'>
            <h2 style={style.colorText} className='style-title'>{title}</h2>
            <span style={style.border_title_small} ></span>
            <span style={style.border_title_large} ></span>
        </motion.div>
    );
};

export default Title;