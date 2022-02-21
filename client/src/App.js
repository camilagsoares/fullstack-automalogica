import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Posts from './pages/Posts'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Registration'
import { Header } from './styles/styled'


const App = () => {

  return (
    <>
      <Header>
        <button>Automalógica</button>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts" exact element={<Posts />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/createPost" exact element={<CreatePost />} />
          <Route path="/posts/:id" exact element={<Post />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App