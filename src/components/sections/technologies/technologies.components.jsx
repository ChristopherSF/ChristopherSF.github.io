import './technologies.style.scss'
import { CardTechnology } from '../../card-techology'

function Technologies() {

    const technologies = [
        { name: "Laravel", image: "laravel.png", background_color: "#FF2D20", text_color: "white" },
        { name: "Vue", image: "vue.png", background_color: "#42B883", text_color: "white" },
        { name: "React", image: "react.png", background_color: "#61DAFB", text_color: "black" },
        { name: "NodeJS", image: "nodejs.png", background_color: "#339933", text_color: "white" },
        { name: "MySQL", image: "mysql.png", background_color: "#4479A1", text_color: "white" },
        { name: "SCSS", image: "scss.png", background_color: "#CD6799", text_color: "white" },
        { name: "CSS", image: "css.png", background_color: "#1572B6", text_color: "white" },
        { name: "JS", image: "js.png", background_color: "#F7DF1E", text_color: "black" },
        { name: "TS", image: "ts.png", background_color: "#3178C6", text_color: "white" },
        { name: "HTML", image: "html.png", background_color: "#E34F26", text_color: "white" },
        { name: "Python", image: "python.png", background_color: "#0474bc", text_color: "white" },
        { name: "Java", image: "java.png", background_color: "#007396", text_color: "white" },
        { name: "PHP", image: "php.png", background_color: "#777BB4", text_color: "white" },
        { name: "Git", image: "git.png", background_color: "#f8541c", text_color: "white" }
      ];

    return (
        <div className="technologies__container page" id="technologies">
            <label className="technologies__container-title">Technologies</label>
            <hr className="technologies__container-separator"/>
            <div className="technologies__container_cards">
                {
                    technologies.map(technology => <CardTechnology 
                        key={technology.name}
                        name={technology.name} 
                        image={`/lang-frameworks-background/${technology.image}`}
                        background_color={technology.background_color}
                        text_color={technology.text_color}
                    />)
                }
            </div>
        </div>
    )

}

export default Technologies