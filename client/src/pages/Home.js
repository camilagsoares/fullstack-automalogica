import React, { useState } from 'react'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { TitleLogin, ScreenContainer } from '../styles/styled'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../constants/url'


const Home = () => {

  let navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    const data = { username: username, password: password }
    axios.post(`${BASE_URL}/auth/login`, data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error)
        } else {
          localStorage.setItem("accessToken", response.data)
          alert(`Seja bem vindo, ${username}`)
          navigate("/Services");
        }
      })
  }

  const handleClickSignUp = () => {
    navigate("/registration");
  }

  return (
    <div>
      <Animated
        animation={{
          in: FadeAnimations.FadeInTop,
          duration_in: 1
        }}
      >
        <TitleLogin>
          <h1>Bem vindo</h1>
        </TitleLogin>
      </Animated>

      <Animated
        animation={{
          in: FadeAnimations.FadeInBottom,
          duration_in: 1
        }}
      >

        <ScreenContainer>
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={(event) => { setUsername(event.target.value) }}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(event) => { setPassword(event.target.value) }}
          />
          <button onClick={login}>Entrar</button>
          <button className="btnSign" onClick={handleClickSignUp}>Não possui conta? Cadastre-se</button>
        </ScreenContainer>
      </Animated>

    </div>
  )
}

export default Home
