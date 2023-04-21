import React from 'react'
import { Button, Stack, styled, TextField, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { login, selectUser } from '../../store/user/user.slice'
import { useForm } from 'react-hook-form'

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: 8,
  borderRadius: 4
}))

const FormWrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
  borderRadius: '0.5em',
  width: '40%',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  '> *:nth-child(n+2)': {
    marginTop: theme.spacing(2)
  }
}))
interface FormData {
  name: string
}

export const Login = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit = handleSubmit(data => {
    dispatch(login(data.name))
  })

  return user.loggedIn
    ? null
    : (
    <>
      <Typography variant="h1">Log In</Typography>
        <Wrapper>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={onSubmit}>
            <FormWrapper>
                <TextField
                    {...register('name', { required: 'Name is required' })}
                    label="Name"
                    error={errors.name != null}
                    helperText={errors?.name?.message}
                />
                <Button
                    variant="contained"
                    type="submit"
                    disabled={!(Object.keys(errors).length === 0)}>
                        LogIn
                </Button>
            </FormWrapper>
          </form>
        </Wrapper>
    </>
      )
}
