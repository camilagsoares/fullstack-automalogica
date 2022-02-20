import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ContainerCreatePost, ContainerPosts,PostsIndividuals, ContainerCommentsRight } from '../styles/styled'

const Post = () => {

    let { id } = useParams()

    const [postObj, setPostObj] = useState({})
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
            setPostObj(res.data)
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((res) => {
            setComments(res.data)
        })
    }, [])

    const addComment = () => {
        axios.post("http://localhost:3001/comments/", {commentBody: newComment, PostId: id})
        .then((res) => {
            const commentToAd = {commentBody: newComment}
            setComments([...comments, commentToAd])
            setNewComment("")
        })
    }

    return (
        <div>
        <ContainerCreatePost className="postPage">
            <PostsIndividuals>
            <div className="leftSide">
                <div className="title">{postObj.title}</div>
                <div className="postText">{postObj.postText}</div>
                <div className="footer">{postObj.username}</div>

            </div>
           
            </PostsIndividuals>

            
        <ContainerCommentsRight className="rightSide">
                <div className="addCommentContainer">
                    <input 
                        type="text" 
                        placeholder="Digite seu comentário" 
                        autoComplete="off" 
                        onChange={(event) => {setNewComment(event.target.value)}} 
                        value={newComment}
                        />

                    <button onClick={addComment}>Adicionar comentário</button>
                </div>
                <div className="listOfComments"></div>
                        {comments.map((comment,key) => {
                            return(
                                <div key={key} className="comment">
                                    {comment.commentBody}
                                </div>
                            )
                        })}
                </ContainerCommentsRight>
        </ContainerCreatePost>
      
        </div>
    )
}

export default Post
