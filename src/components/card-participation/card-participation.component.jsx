import './card-participation.style.scss'

export function CardParticipation({ preview, name, description, technologies, link }) {

    return(
        <a 
            href={link}
            className="card_participation__container"
        >
            <img src={`/participations-previews/${preview}.png`} className="card_participation__container-preview" />
            <div className="card_participation__container_info">
                <label htmlFor="" className="card_participation__container_info-event-name">{name}</label>
                <p htmlFor="" className="card_participation__container_info-event-description">{description}</p>
                <div className="card_participation__container_info_event_technologies">
                    {
                        technologies.map((technology, index) => <img className="card_participation__container_info_event_technologies-item" key={index} src={`/lang-frameworks-background/${technology}.png`} alt=""/>)
                    }
                </div>
            </div>
        </a>
    )
}

export default CardParticipation