import React from 'react'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { TitleLogin, ScreenContainer, ContainerCenterSignUp, ContainerSign} from '../styles/styled'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Registration = () => {

  let navigate = useNavigate()

  const initialValues = {username: "", password: ""}

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3,"Mínimo 3 caracteres").max(15).required("Digite seu nome de usuário"),
    password: Yup.string().min(4,"Mínimo 4 caracteres").max(20).required("Digite sua senha")
  })

  const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then((res) => {
          console.log(data)
          alert("Cadastro feito")
          
        })
    }

    const handleClickLogin = () => {
      navigate("/")
 }
    return (
        <div>
     <Animated
        animation={{
          in: FadeAnimations.FadeInTop,
          duration_in: 1
        }}
      >
        <TitleLogin className="registerPage">Registre-se</TitleLogin>
        </Animated>


        <Animated
        animation={{
          in: FadeAnimations.FadeInBottom,
          duration_in: 1
        }}
      >
        <ContainerCenterSignUp>
        <ScreenContainer>
          <ContainerSign>
        <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
          id="outlined-basic" 
          label="Nome de usuário"
          variant="outlined" 
          name="username"
          fullWidth
          margin="normal"
          autoComplete="off"
          placeholder="Nome de usuário"
          />
<ErrorMessage name="username" component="span"/>



<Field
         id="outlined-basic" 
         label="Senha" 
         variant="outlined"
         placeholder="Senha"
         name="password"
         fullWidth
         margin="normal"
         autoComplete="off"
        className="postContent"
        type="password"
          />
          
              
              <ErrorMessage name="password" component="span"/>



<button type="submit">Fazer cadastro</button>
<button onClick={handleClickLogin}>Ir para login</button>
        </Form>
      </Formik>
      </ContainerSign>
      </ScreenContainer>
      </ContainerCenterSignUp>
      </Animated>
        </div>
    )
}

export default Registration
