import React, { memo, useState } from 'react'
import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File
import katex from 'katex'
import { Controller, useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import { createDocs, roleCategory } from './constant'
import { InputLabel, TextField, Typography } from '@mui/material'
import { Label } from 'mdi-material-ui'
import { Input } from 'antd'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  subCategory: Yup.string().required('subCategory is required')
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  }
}

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
})

function CreateDocs() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const theme = useTheme()

  const [personName, setPersonName] = React.useState([])

  const handleChange = event => {
    const {
      target: { value }
    } = event
    const valueSelect = typeof value === 'string' ? value.split(',') : value
    setPersonName(valueSelect)
  }

  const baseDataRequest = {
    title: '',
    category: '',
    subCategory: '',
    document: ''
  }

  const [dataRequest, setDataRequest] = useState(baseDataRequest)

  const editorOptions = {
    height: 400,
    buttonList: [
      ['undo', 'redo'],
      ['removeFormat'],
      ['bold', 'underline', 'italic', 'fontSize'],
      ['fontColor', 'hiliteColor'],
      ['align', 'horizontalRule', 'list'],
      ['table', 'link', 'image', 'imageGallery'],
      ['showBlocks', 'codeView'],
      ['math']
    ],
    katex: katex,
    imageRotation: false,
    fontSize: [12, 14, 16, 18, 20],
    colorList: [
      [
        '#828282',
        '#FF5400',
        '#676464',
        '#F1F2F4',
        '#FF9B00',
        '#F00',
        '#fa6e30',
        '#000',
        'rgba(255, 153, 0, 0.1)',
        '#FF6600',
        '#0099FF',
        '#74CC6D',
        '#FF9900',
        '#CCCCCC'
      ]
    ]
  }

  const renderDefaultFilter = item => {
    if (item.type === 'INPUT') {
      const { field } = item
      const message = errors[field] && errors[field].message

      return (
        <Grid item xs={12} sm={6} key={item.field}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Typography sx={{ mb: 6, fontWeight: 500 }}>{item.inputLabel}</Typography>
                  <TextField
                    fullWidth
                    required
                    label={item.label}
                    name={item.field}
                    onChange={onChange}
                    value={value}
                    type={item.type}
                  />
                </>
              )
            }}
            name={item.field}
          />

          <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{message}</Typography>
        </Grid>
      )
    }

    if (item.type === 'SELECT') {
      return (
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Typography sx={{ mb: 6, fontWeight: 500 }}>{item.inputLabel}</Typography>
            <InputLabel id='demo-multiple-chip-label' sx={{ top: 35 }}>
              {item.label}
            </InputLabel>

            <Select
              labelId='demo-multiple-chip-label'
              id='demo-multiple-chip'
              name='category'
              multiple
              input={<OutlinedInput id='select-multiple-chip' label={item.field} />}
              value={personName}
              onChange={handleChange}
              renderValue={selected => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {roleCategory.map(role => (
                <MenuItem key={role.field} value={role.value} style={getStyles(name, personName, theme)}>
                  {role.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{errors.roles?.message}</Typography>
        </Grid>
      )
    }

    if (item.type === 'SUNEDITOR') {
      const { field } = item
      const message = errors[field] && errors[field].message

      return (
        <>
          <Controller
            key={`createDocument_${item.field}`}
            control={control}
            name={item.field}
            render={({ field: { onChange, value } }) => {
              if (item.type === 'SUNEDITOR') {
                return <SunEditor setOptions={editorOptions} onChange={onChange} setContents={value} />
              }

              return (
                <div>
                  <div style={{ paddingBottom: 10, paddingTop: 15, fontWeight: 500 }}>{item.inputLabel}</div>
                  <TextField
                    placeholder={item.label}
                    name={item.field}
                    label={item.label}
                    value={value}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </div>
              )
            }}
          />
          <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{message}</Typography>
        </>
      )
    }
  }

  // Xử lí khi submit form
  const onSubmit = data => {
    const newDataRequest = {
      ...data,
      category: personName
    }
    console.log('newDataRequest: ', newDataRequest)
  }

  return (
    <>
      <form>
        {createDocs.map(item => renderDefaultFilter(item))}
        <Button
          type='submit'
          onClick={handleSubmit(onSubmit)}
          style={{ border: '1px solid  #3a35411f', padding: '5px 25px', backgroundColor: '#9155FD', color: 'white' }}
        >
          Create
        </Button>
      </form>
    </>
  )
}

export default memo(CreateDocs)
