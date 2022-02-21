import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ContainerPosts, CenterPosts,CreatePostTitle } from '../styles/styled'
import { useNavigate, Link } from 'react-router-dom'
import { Animated, FadeAnimations } from 'animated-styled-components'

const Posts = () => {

    const [listOfPosts, setListOfPosts] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res) => {
            setListOfPosts(res.data)
        })
    },[])

    const goToCreate = () => {
        navigate("/createPost")
    }

    return(
        <div>

            <CreatePostTitle>
          <button onClick={goToCreate}>Criar um post</button>
          </CreatePostTitle>

           {listOfPosts.map((value,key) => {
               return (
                <Animated
                animation={{
                  in: FadeAnimations.FadeInBottom,
                  duration_in: 1
                }}
              >
                   <CenterPosts>
                   <ContainerPosts key={key} className="post">
                    <Link to={`/Posts/${value.id}`} className="title">{value.title}</Link >
                    <div className="body">{value.postText}</div>
                    <p className="footer">{value.username}</p>
                    <button>Like</button>
                   </ContainerPosts>
                   </CenterPosts>
                   </Animated>
               )
           })}
        </div>
    )
}

export default Posts