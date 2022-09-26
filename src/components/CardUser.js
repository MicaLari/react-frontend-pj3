import { Link } from "react-router-dom"
import {TbTrash as IconTrash} from 'react-icons/tb'
import './Card.css'

const CardUser = ({avatarUrl, name, children, id, users, setUsers}) => {

    // const {card, avatar, box, userName, text} = style

    const deleteUser = async (id) =>{
        const response = await fetch('http://localhost/api-php-ifsp-2022-2/user/delete',{
            method: 'DELETE',
            body: JSON.stringify({id: id})
        })
        const result = await response.json()
        if(result?.success){
            const usersFiltered = users.filter((user) => {return user.id !== id})
            setUsers(usersFiltered)
        } else {
            console.error(result?.error)
        }
    }  
    
    return (
        
            <div className='card'>
                <Link to={`/user/${id}`}>
                    <img src={avatarUrl} className='avatar' alt='Foto do Fulano'/>
                </Link>

                <div className='box'>
                    <Link to={`/user/${id}`}>
                        <h1 className='userName'>{name}</h1>
                        <p className='text'>{children}</p>
                    </Link>
                    <IconTrash className="buttonLink" onClick={() => deleteUser(id)} />

                </div>
            </div>
        
    )
  }
  
  
  
  export default CardUser