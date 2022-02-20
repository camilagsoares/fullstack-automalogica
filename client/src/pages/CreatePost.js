import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { TitleLogin, ScreenContainer, ContainerCreatePost, InputsContainer, StyledField} from '../styles/styled'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const Home = () => {

  let navigate = useNavigate() 

  const [listOfPosts, setListOfPosts] = useState([])
  const initialValues = {title: "", postText: "", username: ""}

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts",data).then((response) => {
      navigate("/posts")
    });  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("É necessário colocar um título"),
    postText: Yup.string().required("Campo de texto obrigatório"),
    username: Yup.string().min(3).max(15).required("Digite seu nome de usuário")
  })


    return(
        <ScreenContainer>
           <TitleLogin className="othesPages">
        <h1>Crie um post</h1>
      </TitleLogin>

<ContainerCreatePost>
          <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
          id="outlined-basic" 
          label="Título post"
          variant="outlined" 
          name="title"
          fullWidth
          margin="normal"
          autoComplete="off"
          
          />
<ErrorMessage name="title" component="span"/>
<Field
         id="outlined-basic" 
         label="Conteudo post" 
         variant="outlined"
         name="postText"
         fullWidth
         margin="normal"
         autoComplete="off"
        className="postContent"
          />
          
              
              <ErrorMessage name="postText" component="span"/>

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
<br/> <br/> <br/> <br/> <br /> <br />
<button type="submit">Criar post</button>

        </Form>
      </Formik>

  
      </ContainerCreatePost>
        </ScreenContainer>
    )
}

export default Home