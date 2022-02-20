import styled from 'styled-components'

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
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

&.post:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
}

&.post .title {
  flex: 20%;
  border-bottom: 1px solid lightgray;
  background-color: dodgerblue;
  display: grid;
  place-content: center;
  color: white;
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
  background-color: dodgerblue;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
`