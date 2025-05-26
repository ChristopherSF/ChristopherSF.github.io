import './about-me-background.style.scss'

import pawn from '../../assets/chess-pieces-background/pawn_w.png'
import knight from '../../assets/chess-pieces-background/knight_b.png'
import bishop from '../../assets/chess-pieces-background/bishop_w.png'
import rook from '../../assets/chess-pieces-background/rook_b.png'
import queen from '../../assets/chess-pieces-background/queen_w.png'
import king from '../../assets/chess-pieces-background/king_b.png'

export function AboutMeBackground() {

    return(
        <div className="about_me_background__container">
            <img className="about_me_background__container-piece" src={pawn} alt="pawn"/>
            <img className="about_me_background__container-piece" src={knight} alt="knight"/>
            <img className="about_me_background__container-piece" src={bishop} alt="bishop"/>
            <img className="about_me_background__container-piece" src={rook} alt="rook"/>
            <img className="about_me_background__container-piece" src={queen} alt="queen"/>
            <img className="about_me_background__container-piece" src={king} alt="king"/>
        </div>
    )
}

export default AboutMeBackground