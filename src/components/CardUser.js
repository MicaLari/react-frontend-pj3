import { Link } from "react-router-dom"
import {TbTrash as IconTrash,TbEdit as IconEdit} from 'react-icons/tb'
import { API_PATH  } from "../config"
import './Card.css'

const CardUser = ({avatarUrl, name, children, id, users, setUsers, setShowModal, setUserToEdit }) => {

    // const {card, avatar, box, userName, text} = style

    const deleteUser = async (id) =>{
        const response = await fetch(`${API_PATH}user/delete`,{
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

    const handleEdit = () =>{
        setShowModal(true)
        setUserToEdit({
            id,
            name,
            email:children,
            avatar:avatarUrl,
        })
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
                    <IconEdit className="buttonLink" onClick={() =>handleEdit()}/>

                </div>
            </div>
        
    )
  }
  
  
  
  export default CardUser
 

  
