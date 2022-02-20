import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Services from './pages/Services'
import CreatePost from './pages/CreatePost'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './constants/theme'
import Header from './components/Header'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
      <BrowserRouter>
      <Link to="/CreatePost">Criar um post</Link>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Posts" exact element={<Posts />} />
        <Route path="/Services" exact element={<Services />} />
        <Route path="/CreatePost" exact element={<CreatePost />} />

      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App