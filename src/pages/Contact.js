import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./Contact.css"
import MainContainer from '../components/MainContainer'


const Contact = () => {
  
  const [count, setCount] = useState(10)

  
  useEffect(() => {
    console.log(count)
  },[count])

  return (
    <>
      <Header />
      <MainContainer>
        <h1> My number is: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Plus 1</button>

        {/* <h1> My name is: {nameUser}</h1>
        <button onClick={() => setNameUser("Karla")}>Plus</button><br /> */}
        {/* <Link to='/'>Home</Link>
        <h1>Contact</h1>

        <p>Aqui é o contact</p> */}
        
      </MainContainer>
      <Footer />
    </>
  )
}

export default Contact