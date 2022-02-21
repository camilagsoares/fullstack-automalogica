import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ContainerCreatePost, ContainerPosts,PostsIndividuals, CommentsRight, Comment} from '../styles/styled'

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
        axios.post("http://localhost:3001/comments/", {commentBody: newComment, PostId: id},
        {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }
        )
        .then((res) => {
            if(res.data.error){
                console.log(res.data.error)
            } else {
                const commentToAd = {commentBody: newComment, username: res.data.username}
                setComments([...comments, commentToAd])
                setNewComment("")
            }
           
        })
    }

    return (
        <div>
        {/* <ContainerCreatePost className="postPage"> */}
            <ContainerPosts className="post">
            <div className="leftSide">
                <div className="title">{postObj.title}</div>
                <div className="postText">{postObj.postText}</div>
                <div className="footer">{postObj.username}</div>
            </div>           
            </ContainerPosts>

       
        {/* </ContainerCreatePost> */}

        <CommentsRight>
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
                                <Comment key={key} className="comment">
                                    {comment.commentBody}
                                    <label>Usuário: {comment.username}</label>
                                </Comment>
                            )
                        })}
                </CommentsRight>
        </div>
    )
}

export default Post
