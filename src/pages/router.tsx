import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes'
import { Map } from './Map/Map'
import { FourOhFour } from './FourOhFour/FourOhFour'

// refer to routes.ts for further route information
// this separation exists to prevent circular dependencies
export const router = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: (<Map />),
    errorElement: (<FourOhFour />)
  }
])
