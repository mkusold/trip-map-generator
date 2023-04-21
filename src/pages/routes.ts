export const ROUTES = {
  home: {
    name: 'Home',
    path: '/',
    showNav: false,
    isProtected: false
  },
  profile: {
    name: 'Profile',
    path: '/profile',
    showNav: false,
    isProtected: true
  },
  map: {
    name: 'Map',
    path: '/map',
    showNav: true,
    isProtected: true
  }
}

export const NAVITEMS = Object.values(ROUTES).filter((route) => route.showNav)
