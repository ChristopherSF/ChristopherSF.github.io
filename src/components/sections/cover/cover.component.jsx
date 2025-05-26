import './cover.style.scss'
import { updateHeight } from '../../../scripts/resizeHeight'
import Me from '../../me/me.component'
import CoverBackground from '../../cover-background/cover-background.component'
import { useEffect } from 'react'

function Cover() {

    useEffect(() => {
        setTimeout(() => {
            updateHeight()
        }, 2000)
    }, [])

    return(
        <div className="cover__container page" id="cover">
            <CoverBackground />
            <label className="cover__container-title">Full Stack Web Developer</label>
            <label className="cover__container-name">Christopher Serna Flores</label>
            <Me />
        </div>
    )

}

export default Cover