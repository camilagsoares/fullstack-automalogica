import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { TitleLogin, ScreenContainer, ContainerCreatePost, CenterPosts} from '../styles/styled'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { Animated, FadeAnimations } from 'animated-styled-components'


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

  const goToFeed = () => {
    navigate("/posts")
  }

    return(
        <ScreenContainer>

<Animated
        animation={{
          in: FadeAnimations.FadeInTop,
          duration_in: 1
        }}
      >
           <TitleLogin className="createPostPage">
        <h1 >Crie um post</h1>
      </TitleLogin>
      </Animated>

      <Animated
        animation={{
          in: FadeAnimations.FadeInBottom,
          duration_in: 1
        }}
      >
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
          placeholder="Título"
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
        placeholder="Conteúdo"
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
         placeholder="Nome de usuário"

          />

                <ErrorMessage name="username" component="span"/>
<br /><br />

<CenterPosts><button type="submit">Criar post</button>
</CenterPosts>

<CenterPosts><button type="submit" className="feed" onClick={goToFeed}>Ir para feed posts</button>
</CenterPosts>
        </Form>
      </Formik>

  
      </ContainerCreatePost>
      </Animated>

        </ScreenContainer>
    )
}

export default Home