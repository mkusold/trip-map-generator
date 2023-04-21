export const ROUTES = {
  home: {
    name: 'Home',
    path: '/',
    showNav: false,
    isProtected: false
  }
}

export const NAVITEMS = Object.values(ROUTES).filter((route) => route.showNav)
