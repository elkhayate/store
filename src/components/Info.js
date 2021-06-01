import React from 'react'
import style from "./info.module.css";
import mail from "../img/mail.png";
import telefon from "../img/telefon.png";


function Info() {
    return(
        <div className={style.info}>
            <h1 className={style.title}>if you have any questions, please don't hesitate to contact us.</h1>
            <div className={style.contact}>
                <div className={style.mail}>
                   <img className={style.logo} src={mail} alt="mail"/>
                   <div className={style.detail}>
                       <h1>mail</h1>
                       <p>mstorecontact2@gmail.com</p>
                   </div>
                </div>
                <div className={style.telefon}>
                  <img className={style.logo} src={telefon} alt="telefon" />
                  <div className={style.detail}>
                      <h1>telefon</h1>
                      <p>+380 (66) 743 86 24</p>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Info;