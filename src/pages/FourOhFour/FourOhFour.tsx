import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Base } from '../base/base'
import { Content } from '../base/content'
import notFoundGif from '../../assets/notFound.gif'

export const FourOhFour = () => {
  return (
        <Base>
             <Content>
              <Stack direction="column" alignItems="center">
                <Typography variant="h1">Oopsie Doopsie...</Typography>
                <img src={notFoundGif} width="50%" height="auto" alt="404 animation"/>
              </Stack>
            </Content>
        </Base>
  )
}
