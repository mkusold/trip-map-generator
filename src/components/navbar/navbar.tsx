import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'

import { NAVITEMS } from '../../pages/routes'
import { Logo, MobileLogo } from './logo'
import { useAppSelector } from '../../store/hooks'
import { selectUser } from '../../store/user/user.slice'
import { styled } from '@mui/material'

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none'
}))

export const Navbar = () => {
  const user = useAppSelector(selectUser)
  const pages = NAVITEMS.filter(({ isProtected }) => (!isProtected || (isProtected && user.loggedIn))).map(({ name, path }) => ({ name, path }))

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(({ name, path }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                    <StyledLink to={path}>
                    <Typography textAlign="center">{name}</Typography>
                    </StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MobileLogo />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, path }) => (
              <StyledLink to={path} key={name}>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {name}
                </Button>
              </StyledLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
