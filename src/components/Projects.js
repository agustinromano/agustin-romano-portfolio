import style from './Projects.module.css'

function Projects() {
    return (
        <>
        <h1 className={style.title}>Projects</h1>
        <div className={style.body}>
            <button className={style.box}><a href='https://agustinromano.github.io/grubhub-project/' target='_blank' rel='noreferrer'>GrubHub Project</a></button>
            <button className={style.box}><a href='https://github.com/agustinromano/starter-restaurant-reservation' target='_blank' rel='noreferrer'>Reservation Project</a></button>
            <button className={style.box}><a href='https://github.com/agustinromano/we-love-movies' target='_blank' rel='noreferrer'>Movies Project</a></button>
            <button className={style.box}><a href='https://github.com/agustinromano/Flashcard' target='_blank' rel='noreferrer'>Flashcard App</a></button>
        </div>
        </>
    )
}

export default Projects;