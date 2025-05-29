import { useState } from 'react'
import './card-project.style.scss'

export function CardProject({ preview, name, description, technologies, link, has_gif }) {

    const [isMouseEnter, setMouseEnter] = useState(false)

    const handleMouseLeave = () => setMouseEnter(false)
    const handleMouseEnter = () => setMouseEnter(true)

    return(
        <a 
            href={link}
            className="card_project__container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {
                preview && (!isMouseEnter || !has_gif) 
                ? <img src={`/previews/${preview}.png`} className="card_project__container-preview" />
                : <></>
            }
            {
                preview && isMouseEnter && has_gif
                ? <img src={`/previews/${preview}.gif`} className="card_project__container-preview" />
                : <></>
            }
            <div className="card_project__container_info">
                <label htmlFor="" className="card_project__container_info-project-name">{name}</label>
                <p htmlFor="" className="card_project__container_info-project-description">{description}</p>
                <div className="card_project__container_info_project_technologies">
                    {
                        technologies.map((technology, index) => <img className="card_project__container_info_project_technologies-item" key={index} src={`/lang-frameworks-background/${technology}.png`} alt=""/>)
                    }
                </div>
            </div>
        </a>
    )
}

export default CardProject