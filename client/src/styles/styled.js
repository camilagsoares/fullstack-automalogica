import styled from 'styled-components'

export const CenterPosts = styled.div`
align-items: center;
justify-content: center;
display: flex;
`

export const ContainerPosts = styled.div`
text-decoration: none;
&.post {
  width: 400px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border: 1px solid lightgray;
  background-color: white;
  font-family: 'Roboto';
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

&.post:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
}

&.post .title {
  flex: 20%;
  border-bottom: 1px solid lightgray;
  background-color: #00398A;
  display: grid;
  place-content: center;
  color: white;
  font-size: 20px;
    
:hover{
  background-color: #4D954A;
}
}



&.post .body {
  flex: 60%;
  display: grid;
  place-content: center;
}

&.post .footer {
  flex: 20%;
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: #00398A;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
`

export const ContainerCenterLogin = styled.div`
display: flex;
align-items: center;
justify-content: center;
`



export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
position: relative;
top: 5vw;

input{
  width: 20vw;
  height: 3vw;
  margin: 10px;
  outline: none;
  font-family: 'Roboto';
  text-indent: 20px;
  font-size: 1rem;
  border: 1px solid #033E89;
  background-color: white;
  border-radius: 2px;
:focus{
    background-color: #94B1D6;
}
::placeholder{
    color: #1D1D1D;
  }
}

button{
  width: 20vw;
  height: 3vw;
  margin: 10px;
  cursor: pointer;
  background-color: #033E89;
  border: none;
  color: white;
  font-family: 'Roboto';
  font-size: 0.9rem;
  border-radius: 2px;
  transition: .3s;
&.btnSign{
  background-color: #4D954A;
  :hover{
    background-color: #033E89;
  }
}
:hover{
  background-color: #4D954A;
}
}

span{
  color: red;
  font-family: 'Roboto';
  margin: 10px;
}
`

export const ContainerSign = styled.div`
width: 20vw;
`


export const TitleLogin = styled.div`
align-items: center;
font-family: 'Poppins';
font-size: 2rem;
top: 3vw;
position: relative;
color: #1A1B1B;
text-align: center;

&.createPostPage{
  top: -3vw;
position: relative;
font-size: 1.4rem;
}

&.registerPage{
font-size: 3rem;

}

@media screen and (max-width: 600px){
font-size: 1.4rem;
}
`
export const ContainerCreatePost = styled.div`
width: 30vw;
height: 20vw;
position: relative;

input{
  margin:15px 0;
	padding:15px 10px;
	width:100%;
	outline:none;
	border:1px solid #bbb;
	display:inline-block;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
  -webkit-transition:0.2s ease all;
	-moz-transition:0.2s ease all;
	-ms-transition:0.2s ease all;
	-o-transition:0.2s ease all;
	transition:0.2s ease all;
  :focus {
	border-color:cornflowerblue;
}
}
span{
  color: red;
  font-family: 'Roboto';
  width: 100px;

}

button{
  width: 30vw;
&.feed{
  background-color: #4D954A;
:hover{
  background-color: #00398A;
}  
}  
}
`

export const PostsIndividuals = styled.div`
width: 39vw;
height: 20vw;
background-color: white;
`

export const ContainerCenterSignUp = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const Header = styled.div`
width: 100%;
height: 70px;
background-color: #00398A;
display: flex;
align-items: center;
font-family: 'Roboto';
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 2px 2px 5px 2px rgba(0,0,0,0.24);

button{
  background-color: transparent;
  border: none;
  color: white;
  font-family: 'Poppins';
  font-size: 22px;
  text-indent: 50px;
}
`

export const CommentsRight = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;

input{
  width: 20vw;
  height: 3vw;
  margin: 10px;
  outline: none;
  font-family: 'Roboto';
  text-indent: 20px;
  font-size: 1rem;
  border: 1px solid #033E89;
  background-color: white;
  border-radius: 2px;
  top: -13vw;
  left: 13vw;
  position: relative;
:focus{
    background-color: #94B1D6;
}
::placeholder{
    color: #1D1D1D;
  }
}

`

export const ContainerCommentRight = styled.div`
position: relative;
top: 7vw;
`

export const ContainerComment = styled.div`
width: 500px;
height: 300px;
background-color: white;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
margin: 30px;
p{
  &.title{
 background-color : #00398A;
 width: 500px;
 text-align: center;
 height: 40px;
 color: white;
 line-height: 2.4;
 font-family: 'Roboto';
}

&.body{
  padding: 40px;
 font-family: 'Roboto';
}

&.username{
  background-color : #00398A;
 width: 500px;
 text-align: center;
 height: 40px;
 color: white;
 line-height: 2.4;
 font-family: 'Roboto';
 top: 7vw;
 position: relative;
 border-radius: 2px;
}
}
`

export const Comment = styled.div`
width: 140px;
height: 50px;
background-color: pink;
margin: 30px;
`

export const CreatePostTitle = styled.div`
margin: 10px;
button{
  width: 200px;
  height: 40px;
  background-color: #448F36;
  border: none;
  color: white;
  font-family: 'Roboto';
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: .3s;
:hover{
  background-color: #00398A;
}
}
`

export const TitleCreatePost = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
font-family: 'Poppins';
top: -20vw;
left: 30vw;
position: relative;
font-size: 24px;
`