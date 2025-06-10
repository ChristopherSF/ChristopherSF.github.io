import './participations.style.scss'
import CardParticipation from '../../card-participation/card-participation.component.jsx'

function Participations() {

    const participations = [
        {
            preview: 'etherfuse',
            name: 'Etherfuse Hackathon',
            description: <>Developing a web page named <b>CriptoPino</b> with <b>Solana</b>, to track the process of creating wooden furnitures!</>,
            technologies: ['vue', 'solana'],
            link: 'https://www.facebook.com/tecnmcampusnuevocasasgrandes/posts/pfbid0i9MY98Lna39EpnxnR1p7aoR3bfDEdsAvXbEJfqGZ2QuKjPCkVV3R7D9j5CLXaipkl'
        },
        {
            preview: 'talentland',
            name: 'Talentland',
            description: <>Working with <b>Aztrazeneca</b>, developing a web page like healthcheck for all of his websites!</>,
            technologies: ['react', 'laravel', 'bash'],
            link: 'https://www.facebook.com/angelica.grijalvaruiz/posts/pfbid02c4xNRMpEndkLTVPQ79AHN6x4o8NzUHBwdQW2kGf1ubwzjwvnuGanizwtQgGgUPkQl?notif_id=1681486240539564&notif_t=mention&ref=notif'
        },
        {
            preview: 'coding-cup',
            name: 'Coding Cup',
            description: <>Competing online with more than <b>500 teams</b>, obtaining the <b>8th place</b> in all of México.</>,
            technologies: ['java', 'python'],
            link: 'https://www.facebook.com/photo/?fbid=689242349905800&set=a.550693287094041'
        }
    ]

    return (
        <div className="participations__container page" id="participations">
            <label className="participations__container-title">Participations</label>
            <hr className="participations__container-separator"/>
            <div className="participations__container_cards">
                {
                    participations.map((participation) => (
                        <CardParticipation
                            key={participation.name}
                            preview={participation.preview}
                            name={participation.name}
                            description={participation.description}
                            technologies={participation.technologies}
                            link={participation.link}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default Participations