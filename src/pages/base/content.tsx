import { Box, styled } from '@mui/material'

export const Content = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
  backgroundColor: theme.palette.background.default
}))
