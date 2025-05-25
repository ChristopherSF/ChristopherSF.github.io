import './cover.style.scss'
import Me from '../../me/me.component'
import ChessBackground from '../../chess-background/chess-background.component'

function Cover() {

    return(
        <div className="cover__container" id="cover">
            <ChessBackground />
            <label className="cover__container-title">Full Stack Web Developer</label>
            <label className="cover__container-name">Christopher Serna Flores</label>
            <Me />
        </div>
    )

}

export default Cover