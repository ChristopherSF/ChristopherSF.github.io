import './aboutme.style.scss'
import AboutMeBackground from '../../about-me-background/about-me-background.component'

function AboutMe() {

    return (
        <div className="about_me__container page" id="aboutme">
            <AboutMeBackground />
            <label className="about_me__container-title">About me</label>
            <hr className="about_me__container-separator"/>
            <p className="about_me__container-paragraph">I am a young man passionate about programming and

            technology, I love to participate in hackathons and

            programming tournaments, in my free time I like to play

            chess, listen to music, and I always like to learn new

            technologies in programming.
            </p>
        </div>
    )

}

export default AboutMe