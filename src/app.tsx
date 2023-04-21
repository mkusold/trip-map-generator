import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
import theme from './theme/theme'
import { router } from './pages/router'

import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN ?? ''

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
