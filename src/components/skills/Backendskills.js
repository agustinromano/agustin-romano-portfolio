import style from "./Skills.module.css"

function Backend() {
    return (
        <ul className={style.skills}>
            <li>Node.js</li>
            <li>Express</li>
            <li>JavaScript</li>
            <li>RESTful APIs</li>
            <li>PostgreSQL</li>
            <li>AWS</li>
        </ul>
    )
}

export default Backend;