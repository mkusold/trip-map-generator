import React from 'react'
import { Grid, Paper, styled, Typography } from '@mui/material'
import { useAppSelector } from '../../store/hooks'
import { selectUser } from '../../store/user/user.slice'
import { Base } from '../base/base'
import { ROUTES } from '../routes'
import { Login } from './login'
import { mockParagraph } from '../../utils/mock'
import { Content } from '../base/content'
import { AreaChart } from '../../components/charts/area'
import { BarChart } from '../../components/charts/bar'
import { features } from '../../utils/featureFlags'

const Chart = styled(Paper)(({ theme }) => ({
  height: '300px'
}))

export const Home = () => {
  const user = useAppSelector(selectUser)
  return (
        <Base isProtected={ROUTES.home.isProtected}>
          <Content>
            {user.loggedIn
              ? (
            <>
              <Typography variant="h1">Home</Typography>
              {features.charts &&
              (<Grid container spacing={2}>
                <Grid item xs={6}>
                  <Chart>
                    <BarChart />
                  </Chart>
                </Grid>
                <Grid item xs={6}>
                  <Chart>
                    <AreaChart />
                  </Chart>
                </Grid>
              </Grid>)
              }

              <Typography variant="body1">{mockParagraph(3)}</Typography>
            </>)
              : (<Login />)
          }
          </Content>
        </Base>
  )
}
