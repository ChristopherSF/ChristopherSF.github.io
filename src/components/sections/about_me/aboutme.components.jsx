import './aboutme.style.scss'
import AboutMeBackground from '../../about-me-background/about-me-background.component'

function AboutMe() {

    return (
        <div className="about_me__container page" id="aboutme">
            <AboutMeBackground />
            <label className="about_me__container-title">About me</label>
            <hr className="about_me__container-separator"/>
            <p className="about_me__container-paragraph">
                Web developer with hands-on experience in modern
                web technologies. Active participant in hackathons and
                programming challenges. Continuously learning new
                frameworks and tools to build scalable and efficient
                software solutions.
            </p>
        </div>
    )

}

export default AboutMe