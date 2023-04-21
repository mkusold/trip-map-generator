import React, { useEffect, useState } from 'react'
import { CircularProgress, Stack, styled, Typography } from '@mui/material'
import { Base } from '../base/base'
import { ROUTES } from '../routes'
import { Content } from '../base/content'
import { useGetPokemonByNameQuery } from '../../store/api/pokemon'

const PokemonCard = styled(Stack)(({ theme }) => ({
  width: '300px',
  borderRadius: theme.spacing(1),
  border: `${theme.spacing(1)} solid gold`,
  backgroundColor: theme.palette.info.dark,
  padding: theme.spacing(2),
  color: theme.palette.background.default,
  img: {
    backgroundColor: theme.palette.info.light,
    marginBottom: theme.spacing(1)
  }
}))

export const Profile = () => {
  // API request example
  const [image, setImage] = useState('')
  const { data, isLoading, error } = useGetPokemonByNameQuery('pikachu')

  useEffect(() => {
    if (data) {
      const images = Object.keys(data.sprites)
        .filter((sprite) => data.sprites[sprite] !== null)
        .map((key) => data.sprites[key])
      if (images.length) {
        const rand = Math.floor(Math.random() * ((images.length - 1) - 1) + 1)
        setImage(images[rand] ?? '')
      }
    }
  }, [data])

  return (
        <Base isProtected={ROUTES.profile.isProtected}>
           <Content>
              <Typography variant="h1">Profile</Typography>
              <Typography variant="subtitle1">Favorite Pokemon</Typography>
              {isLoading && (
                <CircularProgress />
              )}
              {data && !isLoading && (
                <PokemonCard>
                  <img src={image} />
                  <Typography variant="body1" align='center'>{data.name}</Typography>
                </PokemonCard>
              )}
              {error && (
                <Typography variant="caption" color="error">{`Error: ${JSON.stringify(error)}`}</Typography>
              )}
            </Content>
        </Base>
  )
}
