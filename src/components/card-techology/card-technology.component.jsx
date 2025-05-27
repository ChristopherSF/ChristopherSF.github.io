import { useRef } from 'react';
import './card-technology.style.scss'

export function CardTechnology({name, image, background_color, text_color}) {

    const card_ref = useRef(null);

    const handleMouseEnter = () => {
        card_ref.current.style.setProperty('--hover-background', background_color);
        card_ref.current.style.setProperty('--hover-text', text_color);
    };
  
    const handleMouseLeave = () => {
        card_ref.current.style.removeProperty('--hover-background');
        card_ref.current.style.removeProperty('--hover-text');
    };

    return(
        <div className="card_technology__container" ref={card_ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div className="card_technology__container-background-animation"></div>
            <img className="card_technology__container-image" src={image} alt="icon" />
            <label className="card_technology__container-name">{name}</label>
        </div>
    )
}

export default CardTechnology