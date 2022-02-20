import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Posts from './pages/Posts'
import Services from './pages/Services'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './constants/theme'
import Header from './components/Header'
import Home from './pages/Home'
import Registration from './pages/Registration'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <BrowserRouter>
      <Link to="/CreatePost">Criar um post</Link>
      <Routes>
      <Route path="/" exact element={<Home />} />
        <Route path="/posts" exact element={<Posts />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/createPost" exact element={<CreatePost />} />
        <Route path="/posts/:id" exact element={<Post />} />

      </Routes>
    </BrowserRouter>
    <GlobalStyles />
    </ThemeProvider>
  )
}

export default App