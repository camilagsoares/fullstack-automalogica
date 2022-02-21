import React from 'react'
import { useNavigate } from 'react-router'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { TitleServices, CardServices, GridCards } from '../styles/styledServices'


export const Services = () => {

  const navigate = useNavigate()


  const goToOperation = () => {
    navigate('/Operation')
  }

  const goToEngineer = () => {
    navigate('/Engineer')
  }

  const goToProtection = () => {
    navigate('/Protection')
  }


  const goToDigitalSolutions = () => {
    navigate('/DigitalSolutions')
  }


  const goToPhotovoltaics = () => {
    navigate('/Photovoltaics')
  }


  return (
    <div>
      <Animated
        animation={{
          in: FadeAnimations.FadeInTop,
          duration_in: 1
        }}
      >
        <TitleServices className="fontServices">Nossos serviços</TitleServices>
      </Animated>



      <Animated
        animation={{
          in: FadeAnimations.FadeInBottom,
          duration_in: 1
        }}
      >
        <GridCards>

          <CardServices>
            <h1>Operação de Sistemas Elétricos</h1>
            <div class="card__icon"><i class="fas fa-bolt"></i></div>
            <button onClick={goToOperation}>Saiba mais</button>

          </CardServices>


          <CardServices className="green">
            <h1>Serviços de Engenharia</h1>
            <div class="card__icon"><i class="fas fa-bolt"></i></div>
            <button onClick={goToEngineer}>Saiba mais</button>
          </CardServices>


          <CardServices>
            <h1>Controle e Proteção de Subestações</h1>
            <div class="card__icon"><i class="fas fa-bolt"></i></div>
            <button onClick={goToProtection}>Saiba mais</button>
          </CardServices>


          <CardServices className="green">
            <h1>Soluções Digitais</h1>
            <div class="card__icon"><i class="fas fa-bolt"></i></div>
            <button onClick={goToDigitalSolutions}>Saiba mais</button>
          </CardServices>


          <CardServices>
            <h1>Digitalização de fotovoltaicas</h1>
            <div class="card__icon"><i class="fas fa-bolt"></i></div>
            <button onClick={goToPhotovoltaics}>Saiba mais</button>
          </CardServices>


        </GridCards>
      </Animated>

    </div>
  )
}

export default Services
