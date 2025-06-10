import './main.style.scss'
import Cover from '../../components/sections/cover/cover.component'
import AboutMe from '../../components/sections/about_me/aboutme.components'
import Experience from '../../components/sections/eperience/experience.components'
import Projects from '../../components/sections/projects/projects.components'
import Participations from '../../components/sections/participations/participations.components'
import Technologies from '../../components/sections/technologies/technologies.components'

function Main() {

    return (
        <main>
            <Cover />
            <AboutMe />
            <Experience />
            <Projects />
            <Participations />
            <Technologies />
        </main>
    )

}

export default Main