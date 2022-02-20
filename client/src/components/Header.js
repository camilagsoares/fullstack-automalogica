import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
import { StyledToolbar } from '../styles/styled'
// import { useNavigate } from 'react-router'


const Header = () => {

    // const navigate = useNavigate()

    // const handleClick = () => {
    //     navigate('/')
    // }

    // const handleClickServices = () => {
    //     navigate('/Services')
    // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
        <Button color="inherit">Automalógica</Button> 
        <Button color="inherit" variant="outlined">Login</Button> 
        {/* <Button color="inherit" onClick={handleClick}>Automalógica</Button> */}
        {/* <Button color="inherit" onClick={handleClickServices}>Automalógica</Button> */}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header