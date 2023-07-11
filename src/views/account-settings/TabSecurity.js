// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import KeyOutline from 'mdi-material-ui/KeyOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

import { inputTabSecurity } from './constants'
import { Controller, useForm } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Current Password is required'),
  newPassword: Yup.string().required('New Password is required'),
  confirmNewPassword: Yup.string()
    .required('Confirm New Password is required')
    .oneOf([Yup.ref('newPassword')], 'Passwords do not match')
})

const TabSecurity = () => {
  const baseDataRequest = {
    newPassword: '',
    currentPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false
  }

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = data => {
    console.log(data)
  }

  // ** States
  const [dataRequest, setDataRequest] = useState(baseDataRequest)

  const handleResetForm = () => setDataRequest(baseDataRequest)

  return (
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                {inputTabSecurity.map(input => {
                  const { field } = input
                  const message = errors[field] && errors[field].message

                  return (
                    <Grid key={input.field}>
                      <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <TextField
                              key={input.field}
                              placeholder={input.lable}
                              name={input.field}
                              label={input.lable}
                              type={input.type}
                              value={value}
                              onChange={onChange}
                              required
                              fullWidth
                              style={{ marginBottom: 10 }}
                            />
                          )
                        }}
                        name={input.field}
                      />
                      <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{message}</Typography>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
            <img width={183} alt='avatar' height={256} src='/images/pages/pose-m-1.png' />
          </Grid>
        </Grid>
      </CardContent>

      <Divider sx={{ margin: 0 }} />

      <CardContent>
        <Box sx={{ mt: 1.75, display: 'flex', alignItems: 'center' }}>
          <KeyOutline sx={{ marginRight: 3 }} />
          <Typography variant='h6'>Two-factor authentication</Typography>
        </Box>

        <Box sx={{ mt: 5.75, display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              maxWidth: 368,
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar
              variant='rounded'
              sx={{ width: 48, height: 48, color: 'common.white', backgroundColor: 'primary.main' }}
            >
              <LockOpenOutline sx={{ fontSize: '1.75rem' }} />
            </Avatar>
            <Typography sx={{ fontWeight: 600, marginTop: 3.5, marginBottom: 3.5 }}>
              Two factor authentication is not enabled yet.
            </Typography>
            <Typography variant='body2'>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in. Learn more.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 11 }}>
          <Button variant='contained' onClick={handleSubmit(onSubmit)} sx={{ marginRight: 3.5 }}>
            Save Changes
          </Button>
          <Button type='reset' variant='outlined' color='secondary' onClick={() => handleResetForm()}>
            Reset
          </Button>
        </Box>
      </CardContent>
    </form>
  )
}

export default TabSecurity
