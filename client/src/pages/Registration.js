import React from 'react'
import { Animated, FadeAnimations } from 'animated-styled-components'
import {  TitleLogin} from '../styles/styled'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Registration = () => {

  const initialValues = {username: "", password: ""}

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Digite seu nome de usuário"),
    password: Yup.string().min(4).max(20).required("Digite sua senha")
  })

  const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then((res) => {
          console.log(data)
        })
    }

    return (
        <div>

        {/* <TitleLogin>Registre-se</TitleLogin> */}

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
          
          />
<ErrorMessage name="username" component="span"/>

<br/><br/>
<br/>
<br/>
<br/>

<Field
         id="outlined-basic" 
         label="Senha" 
         variant="outlined"
         name="password"
         fullWidth
         margin="normal"
         autoComplete="off"
        className="postContent"
        type="password"
          />
          
              
              <ErrorMessage name="password" component="span"/>
              <br/>
<br/>
<br/>


<button type="submit">Fazer cadastro</button>

        </Form>
      </Formik>

  

        </div>
    )
}

export default Registration
