import React from 'react';
import style from "./card.module.css";


function Card(props) {
    const Style = {backgroundColor : props.back}
    return(
        <div style={Style} className={style.container}>
            <a href={props.link}><img src={props.src} alt={props.alt} /></a>
        </div>
    )
}

export default Card;