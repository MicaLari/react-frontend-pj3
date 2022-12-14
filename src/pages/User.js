import Header from "../components/Header"
import "./Home.css"
import Footer from "../components/Footer"
import MainContainer from '../components/MainContainer'
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { API_PATH  } from "../config"

const User = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const requestUserById = async (id) => {
    const response = await fetch(`${API_PATH}user/by-id?id=${id}`)
    const result = await response.json()
    console.log(result?.success?.message)
    if(result?.error){
      navigate('/not-found')
    }
    setUser(result.data)
  }

  useEffect(() => {
    requestUserById(id)
  // eslint-disable-next-line
  },[])

  return (
    <>
        <Header />
        <MainContainer>
            {
                user ? 
                <>
                  <h1>{user.name}</h1>
                  <img src={user.avatar} alt={user.name} />
                  <p>Email: {user.email}</p>
                </> 
                : <p>Loading user...</p>
            }
        </MainContainer>
        <Footer />
    </>
  )
}

export default User