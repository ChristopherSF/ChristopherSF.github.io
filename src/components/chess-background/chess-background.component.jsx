import './chess-background.style.scss'
import { draw, addResizeListener, init, preloadAllImages } from './chess-background.script.js'
import { useEffect, useRef } from 'react';

function ChessBackground() {

    const canvasbackground = useRef(null)

    useEffect(() => {
        const canvas = canvasbackground.current;
        if(canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            preloadAllImages().then(() => {
                init(canvas)
                addResizeListener(canvas)
                draw(canvas, canvas.getContext('2d'))
            })
        }
    }, [canvasbackground])

    return(
        <canvas className="chess-background__container-canva" ref={canvasbackground}></canvas>
    )

}

export default ChessBackground