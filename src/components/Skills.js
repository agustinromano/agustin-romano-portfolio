// import { useState } from "react";

import style from "./Skills.module.css"
// import Frontend from "./skills/Frontendskills";
// import Backend from "./skills/Backendskills";
// import Additional from "./skills/Additionalskills";

function Skills() {
    // const [openFrontend, setOpenFrontend] = useState(false);
    // const [openBackend, setOpenBackend] = useState(false);
    // const [openAdditional, setOpenAdditional] = useState(false);

    return (
        <div className={style.skillsBody}>
            <h1 className={style.title}>Skills</h1>
            <form className={style.skills}>
                {/* <button type="button" onClick={() => setOpenFrontend((prev => !prev))}>Front End</button>
                <button type="button" onClick={() => setOpenBackend((prev => !prev))}>Back End</button>
                <button type="button" onClick={() => setOpenAdditional((prev => !prev))}>Additional Skills</button> */}
                <div className={style.skillsList}>
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>Swift</li>
                    </ul>
                </div>


                <div className={style.skillsList}>
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>RESTful APIs</li>
                        <li>PostgreSQL</li>
                        <li>AWS</li>
                    </ul>
                </div>

                <div className={style.skillsList}>
                    <h3>Additional</h3>
                    <ul>
                        <li>Mocha</li>
                        <li>Chai</li>
                        <li>Node Package Manager</li>
                        <li>Heroku</li>
                        <li>Git</li>
                        <li>Knex</li>
                    </ul>
                </div>
            </form>

            {/* <div>
                {
                    openFrontend && <Frontend />
                }
                {
                    openBackend && <Backend />
                }
                {
                    openAdditional && <Additional />
                }
            </div>            */}

        </div>
    )
}

export default Skills;