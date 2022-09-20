import { Link } from "react-router-dom"
import './Card.css'

const CardComment = ({avatarUrl, name, children, id}) => {

    // const {card, avatar, box, userName, text} = style
  
    return (
        <Link to={`/user/${id}`}>
          <div className='card'>
              <img src={avatarUrl} className='avatar' alt='Foto do Fulano'/>
              <div className='box'>
                  <h1 className='userName'>{name}</h1>
                  <p className='text'>{children}</p>
              </div>
          </div>
        </Link>
    )
  }
  
  
  
  export default CardComment