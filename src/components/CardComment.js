import './Card.css'
const CardComment = ({avatarUrl, name, children}) => {

    // const {card, avatar, box, userName, text} = style
  
    return (
      <div className='card'>
          <img src={avatarUrl} className='avatar' alt='Foto do Fulano'/>
          <div className='box'>
              <h1 className='userName'>{name}</h1>
              <p className='text'>{children}</p>
          </div>
      </div>
    )
  }
  
  
  
  export default CardComment