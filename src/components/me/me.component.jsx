import './me.style.scss'
import me from '../../assets/6.svg'

function Me() {

  return (
    <div className="me__container">
      <div className="me__container_wrapper">
          <img src={me} alt="Me"/>
      </div>
    </div>
  )
}

export default Me
