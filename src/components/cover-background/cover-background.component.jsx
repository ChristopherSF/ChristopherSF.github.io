import './cover-background.style.scss'
import { draw, addResizeListener, init, preloadAllImages } from './cover-background.script_5.js'
import { useEffect, useRef } from 'react';

function CoverBackground() {

    const canvasbackground = useRef(null)

    useEffect(() => {
        const canvas = canvasbackground.current;
        if(canvas) {
            canvas.width = window.innerWidth-1;
            canvas.height = window.innerHeight;
            preloadAllImages().then(() => {
                init(canvas)
                addResizeListener(canvas)
                draw(canvas, canvas.getContext('2d'))
            })
        }
    }, [canvasbackground])

    return(
        <canvas className="cover-background__container-canva" ref={canvasbackground}></canvas>
    )

}

export default CoverBackground