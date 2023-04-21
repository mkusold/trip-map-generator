import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes'
import { Home } from './Home/Home'
import { Map } from './Map/Map'
import { FourOhFour } from './FourOhFour/FourOhFour'
import { Profile } from './Profile/Profile'

// refer to routes.ts for further route information
// this separation exists to prevent circular dependencies
export const router = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: (<Home />),
    errorElement: (<FourOhFour />)
  },
  {
    path: ROUTES.profile.path,
    element: (<Profile />)
  },
  {
    path: ROUTES.map.path,
    element: (<Map />)
  }
])
