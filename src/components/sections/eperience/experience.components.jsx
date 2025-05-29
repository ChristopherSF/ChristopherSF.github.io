import './experience.style.scss'
import despacho from '../../../assets/experience-logo-comapnies/despacho-contable-mg.png'
import freelancer from '../../../assets/experience-logo-comapnies/freelancer.png'
import controlla from '../../../assets/experience-logo-comapnies/controlla.png'
import ExperienceTimeline from '../../experience-timeline/experience-timeline.component'

function Experience() {

    const companies = [
        { 
            image: controlla,
            title: "Controlla",
            position: "JR Full Stack Web Developer",
            time: "2 years",
            description: <>Participating in <b>support and development</b> area, where I had to be providing customer support to solve bugs and implement improvements</>,
            technologies: ['vue', 'ts', 'js', 'laravel', 'mysql'],
            with_connection: false 
        },
        {
            image: freelancer,
            title: "Freelancer Auxiliar",
            position: "Frontend Lead",
            time: "6 months",
            description: <>Lead the frontend team for create the web <b>The Music Bull</b>, that makes auctions songs in real time</>,
            technologies: ['react', 'js', 'scss'],
            with_connection: true,
        },
        {
            image: despacho,
            title: "Despacho Contable MG",
            position: "External Developer",
            time: "3 months",
            description: <>Develop a Web page for easy make invoinces and custom desings using <b>FacturAPI</b> for stamp invoices to the SAT</>,
            technologies: ['react', 'nodejs', 'facturapi'],
            with_connection: true,
        }
    ];

    return (
        <div className="experience__container page" id="experience">
            <label className="experience__container-title">Experience</label>
            <hr className="experience__container-separator"/>
            <ExperienceTimeline companies={companies} />
        </div>
    )

}

export default Experience