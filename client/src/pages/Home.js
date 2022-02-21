import React, { useState } from 'react'
import { Animated, FadeAnimations } from 'animated-styled-components'
import {  TitleLogin} from '../styles/styled'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        const data = {username: username, password: password}
        axios.post("http://localhost:3001/auth/login", data)
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error)
          } else {
            sessionStorage.setItem("accessToken", response.data)
            // alert("FOI")
            navigate("/posts");
          }
        })
    }

    return (
        <div>
  {/* <Animated
        animation={{
          in: FadeAnimations.FadeInTop,
          duration_in: 1
        }}
      > */}
      {/* <TitleLogin>
        <h1>Bem vindo</h1>
      </TitleLogin> */}
      {/* </Animated> */}

<input type="text" placeholder="Nome de usuário" onChange={(event) => {setUsername(event.target.value)}} />
<input type="password" placeholder="Senha" onChange={(event) => {setPassword(event.target.value)}} />

<button onClick={login}>Entrar</button>
<button>Não possui conta? Cadastre-se</button>


        </div>
    )
}

export default Home
