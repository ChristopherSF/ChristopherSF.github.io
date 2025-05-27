import './experience-timeline.style.scss'
import { ExperienceTimelineNode } from './experience-timeline-node'

export function ExperienceTimeline({ companies }) {

    return(
        <div className="experience_timeline__container">
            {
                companies.map((company, index) => <ExperienceTimelineNode key={index} company={company} />)
            }
        </div>
    )
}

export default ExperienceTimeline