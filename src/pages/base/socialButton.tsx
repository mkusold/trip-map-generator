import React, { type ReactNode } from 'react'
import { IconButton, Link } from '@mui/material'

interface SocialButtonProps {
  aria: string
  to: string
  children: ReactNode
}

export const SocialButton: React.FC<SocialButtonProps> = ({ aria, children, to }) => (
    <IconButton
        component={Link}
        href={to}
        target="_blank"
        rel="noopener"
        aria-label={aria}
        color="inherit">
        {children}
    </IconButton>
)
