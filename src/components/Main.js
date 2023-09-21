import style from "./Main.module.css"
import Skills from "./Skills";
import Projects from "./Projects";

function Main() {
    return (
        <>
            <main className={style.main}>
                <p>Hi, I'm Agustin</p>
                <p>Full Stack Developer</p>
            </main>
            <div>
                <Skills />
            </div>
            <div>
                <Projects />
            </div>
        </>
    )
}

export default Main;