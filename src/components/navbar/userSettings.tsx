import * as React from 'react'
import { Avatar, IconButton, Menu, MenuItem, styled, Tooltip, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useNavigate } from 'react-router-dom'
import { logout, selectUser } from '../../store/user/user.slice'
import { ROUTES } from '../../pages/routes'

const StyledMenu = styled(Menu)(() => ({
  marginTop: '45px'
}))

export const UserSettings = () => {
  const navigate = useNavigate()
  const user = useAppSelector(selectUser)

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const dispatch = useAppDispatch()

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const settings = user.loggedIn
    ? [
        { name: 'Profile', callback: () => { navigate(ROUTES.profile.path) } },
        { name: 'Logout', callback: () => dispatch(logout()) }
      ]
    : [
        { name: 'Login', callback: () => { navigate(ROUTES.home.path) } }
      ]
  return (
        <>
        <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <StyledMenu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ name, callback }) => (
                <MenuItem key={name} onClick={() => {
                  callback()
                  handleCloseUserMenu()
                }}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </StyledMenu>
        </>
  )
}
