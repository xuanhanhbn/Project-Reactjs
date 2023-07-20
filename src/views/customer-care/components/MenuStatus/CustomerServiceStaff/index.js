import React from 'react'
import TextField from '@mui/material/TextField'
import { Controller, useForm } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import { Button } from 'antd'

const users = [
  {
    name: 'Tong Minh Duong',
    userName: 'duontm'
  },
  {
    name: 'Nguyen Xuan Hanh',
    userName: 'hanhnx'
  },
  {
    name: ' Tran Hoang Tu',
    userName: 'tuth'
  }
]

function CustommerSeveviceStaff() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()


  // >>>> Gửi data select nhân viên
  const onSubmit = data => console.log(data.target.value)

  return (
    <>
      <form>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <NativeSelect style={{ borderBottom: 'none' }} onChange={onSubmit} value={value}>
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
      </form>
    </>
  )
}

export default CustommerSeveviceStaff
