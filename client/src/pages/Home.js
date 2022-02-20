import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import { makeStyles } from '@material-ui/core/styles'
// import IconButton from '@material-ui/core/IconButton'
// import Input from '@material-ui/core/Input'
// import FilledInput from '@material-ui/core/FilledInput'
// import OutlinedInput from '@material-ui/core/OutlinedInput'
// import InputLabel from '@material-ui/core/InputLabel'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import FormHelperText from '@material-ui/core/FormHelperText'
// import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import { ContainerCenterLogin, ScreenContainer, TitleLogin, InputsContainer, StyledField } from '../styles/styled'
import { useState } from 'react'
import Button from '@mui/material/Button'

const Home = () => {


  return (
    <ScreenContainer>

      <TitleLogin>
        <h1>Bem vindo</h1>
      </TitleLogin>


      <ContainerCenterLogin>
        <InputsContainer>
          <Formik
          // initialValues={initialValues}
          // onSubmit={onSubmit}
          // validationSchema={validationSchema}
          >
            <Form>

                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Nome de usuário"
                  variant="outlined"
                  name="title"
                  fullWidth
                  margin={"normal"}
                />
                <ErrorMessage name="title"/>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Senha"
                  variant="outlined"
                  fullWidth
                  margin={"normal"}
                />
                <ErrorMessage name=""/>

              <Button variant="contained" fullWidth margin="normal">Entrar</Button> <br /> <br />
              <Button variant="outlined" fullWidth margin="normal">Não possui conta? Cadastre-se</Button>
            </Form>

          </Formik>
        </InputsContainer>
      </ContainerCenterLogin>

    </ScreenContainer>
  )
}

export default Home