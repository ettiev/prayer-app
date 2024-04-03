import React from 'react';

import style from "./Background.module.css";

function Background(){
    return <div className={style.background_container}>
        <div
            className={style.background_image}
            id={style.background}>
        </div>
    </div>    
}

export default Background;

