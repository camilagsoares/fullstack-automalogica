import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Registration'
import { Header } from './styles/styled'
import Services from './pages/Services'
import DigitalSolutions from './pages/Services/Digital'
import EngineeringServices from './pages/Services/Engineer'
import Protection from './pages/Services/Protection'
import Photovoltaics from './pages/Services/Photovoltaics'
import Operation from './pages/Services/Operation'

const App = () => {

  return (
    <>
      <Header>
        <button>Automalógica</button>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/DigitalSolutions" exact element={<DigitalSolutions />} />
          <Route path="/Engineer" exact element={<EngineeringServices />} />
          <Route path="/Protection" exact element={<Protection />} />
          <Route path="/Photovoltaics" exact element={<Photovoltaics />} />
          <Route path="/Operation" exact element={<Operation />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App