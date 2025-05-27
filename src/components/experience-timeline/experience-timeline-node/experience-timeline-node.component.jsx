import './experience-timeline-node.style.scss'

export function ExperienceTimelineNode({ company }) {

    const { image, title, position, time, year, description, technologies, with_connection } = company

    return(
        <div className="experience_timeline_node__container">
            {
                with_connection 
                ? <div className="experience_timeline_node__container_connection-line"></div>
                : <></>
            }
            <div className="experience_timeline_node__container_section">
                <div className="experience_timeline_node__container_section_image">
                    <img src={image} alt="node" className="experience_timeline_node__container_section_image-icon" />
                </div>
                <div className="experience_timeline_node__container_section_info">
                    <label className="experience_timeline_node__container_section_info-title">{title}</label>
                    <label className="experience_timeline_node__container_section_info-position">{position}</label>
                    <label className="experience_timeline_node__container_section_info-time">{time}</label>
                    <label className="experience_timeline_node__container_section_info-year">{year}</label>
                    <p className="experience_timeline_node__container_section_info-description">{description}</p>
                    <div className="experience_timeline_node__container_section_info_technologies">
                        {
                            technologies.map((technology, index) => <img className="experience_timeline_node__container_section_info_technologies-image" key={index} src={`/lang-frameworks-background/${technology}.png`} alt=""/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ExperienceTimelineNode
