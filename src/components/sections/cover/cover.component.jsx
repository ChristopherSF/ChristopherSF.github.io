import './cover.style.scss'
import Me from '../../me/me.component'
import CoverBackground from '../../cover-background/cover-background.component'

function Cover() {

    return(
        <div className="cover__container" id="cover">
            <CoverBackground />
            <label className="cover__container-title">Full Stack Web Developer</label>
            <label className="cover__container-name">Christopher Serna Flores</label>
            <Me />
        </div>
    )

}

export default Cover