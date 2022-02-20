import styled from 'styled-components'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@material-ui/core/TextField'

export const CenterPosts = styled.div`
align-items: center;
justify-content: center;
display: flex;
`

export const ContainerPosts = styled.div`

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

export const StyledToolbar = styled(Toolbar)`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50vw;
position: relative;
/* top: 5vw; */

&.createPost {
  position: relative;
  top: 2vw;
}
`

export const StyledField = styled(TextField)`
display: flex;
flex-direction: column;
align-items: center;
width: 30vw;
position: relative;
top: 5vw;

@media screen and (max-width: 600px){
  width: 70vw;
}
`

export const TitleLogin = styled.div`
align-items: center;
font-family: 'Poppins';
font-size: 2rem;
top: 3vw;
position: relative;
color: #1A1B1B;

&.othesPages{
  font-size: 1.4rem;
}

@media screen and (max-width: 600px){
font-size: 1.4rem;
}
`
export const ContainerCreatePost = styled.div`
background-color: white;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
border-radius: 4px;
width: 40vw;
height: 20vw;
position: relative;
top: 7vw;

input{
  margin:15px 0;
	padding:15px 10px;
	width:100%;
	outline:none;
	border:1px solid #bbb;
	/* border-radius:20px; */
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
`
