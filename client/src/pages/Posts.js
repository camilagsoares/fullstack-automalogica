import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ContainerPosts, CenterPosts } from '../styles/styled'
import { useNavigate, Link } from 'react-router-dom'

const Posts = () => {

    const [listOfPosts, setListOfPosts] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res) => {
            setListOfPosts(res.data)
        })
    },[])

    return(
        <div>
           posts page

           {listOfPosts.map((value,key) => {
               return (
                   <CenterPosts>
                   <ContainerPosts key={key} className="post">
                    <Link to={`/Posts/${value.id}`} className="title">{value.title}</Link >
                    <div className="body">{value.postText}</div>
                    <p className="footer">{value.username}</p>
                   </ContainerPosts>
                   </CenterPosts>
               )
           })}
        </div>
    )
}

export default Posts