import React from "react";
import Logo from "../../components/logo";
import Menu from "../../components/menu";
import './schedule.css'

export default function Schedule(){
    return(
        <>
            <Logo />
            <div className="schedule-container">
                <h1>Agenda</h1>
                <iframe title="schedule" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23fcf1d5&ctz=America%2FSao_Paulo&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YmFuZGFwb250b2JyMjVAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"  width="90%" height="550" frameborder="0" scrolling="no"></iframe>
            </div>
            <Menu />
        </>
    )
}