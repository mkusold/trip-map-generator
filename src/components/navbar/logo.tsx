import * as React from 'react'
import AdbIcon from '@mui/icons-material/Adb'
import { styled, Typography } from '@mui/material'

const Icon = styled(AdbIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const CompanyName = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})) as typeof Typography

export const Logo = () => {
  return (
  <>
    <Icon/>
    <CompanyName
      variant="h6"
      noWrap
      component="a"
      href="/">
            LOGO
    </CompanyName>
  </>
  )
}

const MobileIcon = styled(AdbIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'none'
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex'
  }
}))

const MobileCompanyName = styled(CompanyName)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    display: 'none'
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex'
  }
})) as typeof Typography

export const MobileLogo = () => {
  return (
        <>
         <MobileIcon />
         <MobileCompanyName
            variant="h5"
            noWrap
            component="a"
            href="/">
            LOGO
            </MobileCompanyName>
        </>
  )
}
