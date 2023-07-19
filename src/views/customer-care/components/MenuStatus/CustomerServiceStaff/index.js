import React from 'react'
import TextField from '@mui/material/TextField'
import { Controller, useForm } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'

const selectValue = [
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

  const onSubmit = data => console.log(data)

  return (
    <>
      <form>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <NativeSelect style={{ borderBottom: 'none' }} defaultValue='None' onChange={onChange} value={value}>
                {selectValue.map(user => {
                  return <option key={user.userName}>{user.name}</option>
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
