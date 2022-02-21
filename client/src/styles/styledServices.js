import styled from 'styled-components'

export const TitleServices = styled.h1`
font-family: 'Poppins';
text-align: center;
color: #1D1D1D;
margin: 30px;

&.fontServices{
  font-size: 40px;
  margin: 15px;
  margin-top: 22px;
}
`

export const GridCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 10px;
`

export const CardServices = styled.div`
margin: 20px;
padding: 20px;
width: 420px;
min-height: 210px;
display: grid;
grid-template-rows: 20px 50px 1fr 50px;
border-radius: 10px;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
transition: all 0.2s;
background: radial-gradient(#27AAFB, #3fbafe);

.card__icon {
  grid-row: 2/3;
  font-size: 30px;
  color: white;
}
&.green{
background: radial-gradient(#27D759, #30DD61);
}

:hover {
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
transform: scale(1.01);
}

h1{
  font-family: 'Poppins';
  text-align: center;
  color: #141414;
  margin: 10px;
  padding: 20px;
  font-size: 31px;
}

button{
  position: relative;
  top: 5vw;
  margin: 20px;
  background-color: #1976D2;
  border: none;
  width: 120px;
  border-radius: 4px;
  color: white;
  height: 30px;
  font-family: 'Poppins';
  cursor: pointer;
  transition: 1s background;
:hover{
background: #349230;
}}
`

export const CardItemService = styled.div`
margin: 10px;

a{
  text-decoration: none;
:visited{
  color: green;
}  
}
`
