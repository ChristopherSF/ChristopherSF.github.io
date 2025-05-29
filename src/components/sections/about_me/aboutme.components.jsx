import './aboutme.style.scss'
import AboutMeBackground from '../../about-me-background/about-me-background.component'

function AboutMe() {

    return (
        <div className="about_me__container page" id="aboutme">
            <AboutMeBackground />
            <label className="about_me__container-title">About me</label>
            <hr className="about_me__container-separator"/>
            <p className="about_me__container-paragraph">
                I'm a young tech enthusiast with a strong passion for 
                programming and innovation. I enjoy taking part in hackathons 
                and coding competitions, where I get to challenge myself and 
                learn from others. In my free time, I like playing chess, 
                listening to music, and exploring new programming tools and 
                technologies to keep growing as a developer.
            </p>
        </div>
    )

}

export default AboutMe