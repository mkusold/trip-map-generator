import React from 'react'
import { Box, Grid, Stack, styled, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import { SocialButton } from './socialButton'
import { FacebookRounded } from '@mui/icons-material'

const Wrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.grey[800],
  padding: `${theme.spacing(2)} ${theme.spacing(8)}`,
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`
  }
}))

const FooterContent = styled(Stack)(() => ({
  height: '100%'
}))

export const Footer = () => {
  return (
    <Wrapper>
        <Grid container>
            <Grid item xs={8}>
                <FooterContent direction="row" alignItems="center">
                    <Typography variant="body1">© Milo Kusold {new Date().getFullYear()} - All Rights Reserved</Typography>
                </FooterContent>
            </Grid>
            <Grid item xs={4}>
                <Stack direction="row" alignItems="center" justifyContent="flex-end">
                    <SocialButton aria="instagram" to="https://www.instagram.com"><InstagramIcon/></SocialButton>
                    <SocialButton aria="facebook" to="https://www.facebook.com"><FacebookRounded/></SocialButton>
                </Stack>
            </Grid>
        </Grid>
    </Wrapper>
  )
}
