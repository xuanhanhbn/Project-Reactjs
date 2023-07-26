/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import MenuItem from '@mui/material/MenuItem'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { customerActions, makeSelectCustomer } from 'src/views/custommer-dashboard/customerSlice'

// import Select from '@mui/material/Select'
import { useEffect } from 'react'
import Select from 'react-select'

import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'

const users = [
  {
    name: 'Tống Minh Dương',
    userName: 'duontm'
  },
  {
    name: 'Nguyễn Xuân Hạnh',
    userName: 'hanhnx'
  },
  {
    name: 'Trần Hoàng Tú',
    userName: 'tuth'
  }
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: '8px 0'
  })
}

// >>>> Gửi data select nhân viên
const onSubmit = data => console.log(data.target.value)

function CustommerSeveviceStaff(props) {
  const { role, onOpen, onClose } = props
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const handleClose = () => onClose()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <div className='container '>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={onOpen}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500
            }
          }}
        >
          <Fade in={onOpen}>
            <Box sx={style}>
              <Card fullWidth>
                <CardHeader title='Processing staff' titleTypographyProps={{ variant: 'h6' }} />
                <Divider sx={{ margin: 0 }} />
                <FormControl style={{ width: '100%' }}>
                  <CardContent>
                    <Controller
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <NativeSelect
                            style={{ borderBottom: 'none', width: '100%' }}
                            onChange={onChange}
                            value={value}
                          >
                            <option value='none'>None</option>
                            {users.map((user, index) => {
                              return (
                                <option key={index} value={user.userName}>
                                  {user.name}
                                </option>
                              )
                            })}
                          </NativeSelect>
                        </>
                      )}
                      name='staffName'
                    />
                  </CardContent>
                  <CardActions style={{ justifyContent: 'flex-end' }}>
                    <Button size='large' color='secondary' variant='outlined' onClick={() => handleClose()}>
                      Cancel
                    </Button>
                    <Button
                      size='large'
                      type='submit'
                      sx={{ mr: 2 }}
                      variant='contained'
                      onClick={handleSubmit(onSubmit)}
                    >
                      Submit
                    </Button>
                  </CardActions>
                </FormControl>
              </Card>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  )
}

export default CustommerSeveviceStaff
