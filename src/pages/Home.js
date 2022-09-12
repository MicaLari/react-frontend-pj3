import {Link} from 'react-router-dom'
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./Home.css"
import MainContainer from '../components/MainContainer'
import CardComment from '../components/CardComment'

const Home = () => {
  return (
    <>
      <Header />
      <MainContainer>
          {/* <Link to='/contact'>Contact</Link> */}
          
          <h1>Home</h1>

          <p>
          O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (front-end) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>

          <p>Em 2015, o Facebook anunciou o módulo React Native, que em conjunto com o React, possibilita o desenvolvimento de aplicativos para Android e iOS utilizando componentes de interface de usuário nativos de ambas plataformas, sem precisar recorrer ao HTML.</p>

          <p>
            Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira biblioteca ou framework mais citado pelos usuários e desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, respectivamente.
          </p>
                
        <CardComment initial='R' name='Renan'>
          Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira
        </CardComment>

        <CardComment initial='M' name='Maria'>
          Profissionais, ficando atrás somente do Node.js e Angular
        </CardComment>

        <CardComment initial='C' name='Carmo'>
          Fiquei amigo do react!
        </CardComment>
        
   
      </MainContainer>
      <Footer/>
    </>
  
  )
}

 export default Home