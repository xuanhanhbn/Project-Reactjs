import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File
import katex from 'katex'
import { Controller, useForm } from 'react-hook-form'
import Button from '@mui/material/Button'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
})

function CreateDocs() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const baseDataRequest = {
    document: ''
  }

  const [value, setValue] = useState(null)
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

  const handleSendDocument = () => {
    console.log('dataRequest: ', dataRequest)
  }

  const handleChange = content => {
    const newDataRequest = {
      ...dataRequest,
      document: content
    }

    setDataRequest(newDataRequest)
  }

  return (
    <>
      <SunEditor setContents={value} onChange={handleChange} setOptions={editorOptions} />
      <Button onClick={() => handleSendDocument()}>Create</Button>
    </>

    // <form onChange={handleSubmit(onSubmit)}>
    //   {/* <SunEditor setContents={value} onChange={onSubmit} setOptions={editorOptions} /> */}

    //   <Button>Create</Button>
    //   <Controller
    //     control={control}
    //     render={({ field: { onChange, value } }) => (
    //       <SunEditor setContents={value} onChange={onChange} setOptions={editorOptions} />
    //     )}
    //     name='docs'
    //   />
    // </form>
  )
}

export default CreateDocs
