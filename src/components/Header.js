import style from "./Header.module.css"
import logo from "./other/profile.jpg"
import pin from "./other/pin.png"
import { useState } from "react";

import Contact from "./Contact";

function Header() {
    const [openContact, setOpenContact] = useState(false);

    function contactClickHandler() {
        console.log('Contact button was clicked');
        return (
            <>
                <Contact/>
            </>
        )
    }

    return (
        <main className={style.main}>
            <div className={style.pic}>
                <img className={style.profilePic} src={logo} alt="logo" />
                <p className={style.location}><img src={pin} alt="pin" id={style.pin}/>Frederick, MD</p>
            </div>
            <div className={style.buttonLayout}>
                <button className={style.buttons} onClick={() => setOpenContact(true)}>Contact</button>
                <button className={style.buttons}><a href="./other/Resume.pdf" download = "Resume.pdf">Resume</a></button>
                <button className={style.buttons}>Skills</button>
                <button className={style.buttons}>Projects</button>
            </div>
        </main>
    )
}

export default Header;