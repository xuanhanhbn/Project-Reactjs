import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { Divider } from 'antd'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Controller, useForm } from 'react-hook-form'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import { styled } from '@mui/system'
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Tooltip } from 'antd'

import { FormControl, TextField, Typography } from '@mui/material'
import { TicketPercentOutline } from 'mdi-material-ui'
import Link from 'next/link'

function FeedBackTicKets(props) {
  const { title, onOpen, onClose, handleSubmitForm, value } = props

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f'
  }

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
      width: 100%;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 12px;
      border-radius: 12px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid rgba(58, 53, 65, 0.22);
    
     
    
      &:focus {
        border-color: #9155FD;
        box-shadow: 0 0 0 2px #9155FD;
      }
    
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `
  )

  // const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    control,

    formState: { errors }
  } = useForm()

  // const globalData = useSelector(makeSelectCustomer)
  const handleClose = () => onClose()

  const onSubmit = data => {
    // dispatch(customerActions.createCustomer(data))
    console.log(data)
  }

  return (
    <div>
      <Card sx={{ maxWidth: '50%', margin: 'auto' }}>
        <Typography sx={{ margin: '10px 10px', fontWeight: 500, fontSize: 24 }}>Feed back ticket</Typography>
        <Divider style={{ margin: 0 }} />
        <CardContent>
          <FormControl style={{ width: '100%' }}>
            <CardContent>
              <Box style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <Typography sx={{ mr: 5, fontWeight: 500 }}>Transaction code :</Typography>
                <Input prefix={<TicketPercentOutline />} style={{ maxWidth: 100 }} defaultValue='#11111' disabled />
              </Box>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Box>
                    <Grid item xs={12}>
                      <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <>
                              <StyledTextarea
                                sx={{ maxHeight: 200 }}
                                fullWidth
                                required
                                multiline
                                minRows={6}
                                placeholder='Send your feed back'
                                label='Massage'
                                name='massage'
                                onChange={onChange}
                                value={value}
                                type='input'
                              />
                            </>
                          )
                        }}
                        name='message'
                      />
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }} className='card-action-dense'>
              <Button onClick={handleSubmit(onSubmit)} variant='contained'>
                Submit
              </Button>
            </CardActions>
            <Typography sx={{ mt: 5 }}>
              <Link href=''>Send your ticket</Link>
            </Typography>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  )
}

export default FeedBackTicKets
