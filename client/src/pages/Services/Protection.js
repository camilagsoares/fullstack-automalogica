import React from 'react'
import { listServicesProtection } from '../../infos/infos'
import { CardItemService, TitleServices, GridCards } from '../../styles/styledServices'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Animated, FadeAnimations } from 'animated-styled-components'


const Protection = () => {

    const renderizaNaTela = listServicesProtection.list.map((service) => {
        return (
            <CardItemService>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        src={service.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {service.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {service.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><a href={service.link} target="_blank">Visitar</a></Button>
                    </CardActions>
                </Card>
            </CardItemService>
        )
    })

    return (
        <div>
            <Animated
                animation={{
                    in: FadeAnimations.FadeInTop,
                    duration_in: 1
                }}
            >
                <TitleServices>Controle e Proteção de Subestações</TitleServices>
            </Animated>

            <Animated
                animation={{
                    in: FadeAnimations.FadeInBottom,
                    duration_in: 1
                }}
            >
                <GridCards>
                    {renderizaNaTela}
                </GridCards>
            </Animated>

        </div>
    )
}

export default Protection