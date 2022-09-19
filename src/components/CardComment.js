import './Card.css'
const CardComment = ({initial, name, children}) => {

    // const {card, avatar, box, userName, text} = style
  
    return (
      <div>
          <div className='avatar'>{initial}</div>
          <div className='box'>
              <h1 className='userName'>{name}</h1>
              <p className='text'>{children}</p>
          </div>
      </div>
    )
  }
  
  
  
  export default CardComment