// import { useState } from "react";
import style from "./Contact.module.css"

function Contact({ open }) {
        <form className={style.form}>
            <p>My email is agustin.g.romano@gmail.com. I would love connect with you!</p>
            <input type="text" id="name" placeholder="Your name" required />
            <input type="email" id="email" placeholder="Your Email" required />
            <textarea id="message" rows={4} placeholder="Your message"></textarea>
            <button>Cancel</button>
            <button>Send</button>
        </form>
}

export default Contact;