import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ContainerCreatePost, ContainerPosts,PostsIndividuals } from '../styles/styled'

const Post = () => {

    let { id } = useParams()

    const [postObj, setPostObj] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
            setPostObj(res.data)
        })
    }, [])

    return (
        <ContainerCreatePost className="postPage">
            <PostsIndividuals>
            <div className="leftSide">
                <div className="title">{postObj.title}</div>
                <div className="postText">{postObj.postText}</div>
                <div className="footer">{postObj.username}</div>

            </div>
            <div className="rightSide">seçao comentarios</div>
            </PostsIndividuals>
        </ContainerCreatePost>
    )
}

export default Post
