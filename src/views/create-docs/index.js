import React, { memo, useState } from 'react'
import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File
import katex from 'katex'
import { Controller, useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import { createDocs } from './constant'
import { InputLabel, TextField, Typography } from '@mui/material'
import { Label } from 'mdi-material-ui'
import { Input } from 'antd'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  category: Yup.string().required('Category is required'),
  subCategory: Yup.string().required('subCategory is required')
})

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
})

function CreateDocs() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

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

  // Xử lí khi submit form
  const onSubmit = data => console.log('data: ', data)

  return (
    <>
      <form>
        {createDocs.map(item => {
          const { field } = item
          const message = errors[field] && errors[field].message

          return (
            <>
              {/* <Typography variant='h6'>{item.label}</Typography> */}
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
        })}
        <Button
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
