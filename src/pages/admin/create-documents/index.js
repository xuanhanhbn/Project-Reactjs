import React from 'react'
import CreateDocs from 'src/views/create-docs'
import { Controller, useForm } from 'react-hook-form'
import { Button } from 'antd'

function CreateDocuments() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div>
      <CreateDocs />
    </div>
  )
}

export default CreateDocuments
