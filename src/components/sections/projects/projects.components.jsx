import './projects.style.scss'
import CardProject from '../../card-project/card-project.component.jsx'

function Projects() {

    const projects = [
        {
            preview: 'node_ts',
            name: 'Dynamic Module',
            description: 'Try my own arquitecture, for simple crud projects!',
            technologies: ['nodejs','ts','bash'],
            link: 'https://github.com/redfieldfire/SWISS_MANAGER_NODE_TS',
            github: true,
            has_gif: false
        },
        {
            preview: 'mathnsters',
            name: 'Mathnsters',
            description: 'Destroy monsters with your math skills!',
            technologies: ['java'],
            link: 'https://github.com/redfieldfire/UNO',
            github: true,
            has_gif: true
        },
        {
            preview: 'uno',
            name: 'UNO',
            description: 'Battle with the engine, could you get the victory?!',
            technologies: ['java'],
            link: 'https://github.com/redfieldfire/Mathnsters',
            github: true,
            has_gif: true
        }
    ]

    return (
        <div className="projects__container page" id="projects">
            <label className="projects__container-title">Projects</label>
            <hr className="projects__container-separator"/>
            <div className="projects__container_cards">
                {
                    projects.map((project) => (
                        <CardProject
                            key={project.name}
                            preview={project.preview}
                            name={project.name}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            github={project.github}
                            has_gif={project.has_gif}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default Projects