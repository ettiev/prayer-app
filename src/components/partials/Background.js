import React from 'react';
import background from "../../images/background/church_prayer.jpg";

import style from "./Background.module.css";


function Background(){
    return <div
        className={style.background_container}
        >
        <div 
            style={{ backgroundImage: `url(${background})` }}
            className={style.background_image}
            //class="bg-image background_image"
            >
        </div>
    </div>    
}

export default Background;

