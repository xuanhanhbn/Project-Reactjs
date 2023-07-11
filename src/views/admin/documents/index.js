import React from 'react'
import { Button, Icon, TextField } from '@mui/material'

import { Controller, useForm } from 'react-hook-form'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Breadcrumb } from 'antd'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { CircleSmall, FileDocumentOutline } from 'mdi-material-ui'

const createData = (title, author, created, lastEdited, group) => {
  return { title, author, created, lastEdited, group }
}

function ListDocument() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  const rows = [
    createData('Document example', 'Anna Smith', 'April 2, 2021', 'October 5, 2022', 'Marketing '),
    createData('Document example', 'Anna Smith', 'April 2, 2021', 'October 5, 2022', 'Marketing '),
    createData('Document example', 'Anna Smith', 'April 2, 2021', 'October 5, 2022', 'Marketing '),
    createData('Document example', 'Anna Smith', 'April 2, 2021', 'October 5, 2022', 'Marketing '),
    createData('Document example', 'Anna Smith', 'April 2, 2021', 'October 5, 2022', 'Marketing ')
  ]

  return (
    <div style={{ flex: 1 }}>
      <Card style={{ borderRadius: 10 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}></CardContent>
        <CardContent>
          <Breadcrumb>
            <Breadcrumb.Item>Documents</Breadcrumb.Item>
            <Breadcrumb.Item>All Documents</Breadcrumb.Item>
          </Breadcrumb>
          <Divider sx={{ borderColor: 'black', marginTop: '20px' }} />
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              You are viewing all docs.
            </Typography>
            <Button
              size='large'
              variant='contained'
              sx={{ marginLeft: 10 }}
              href='/admin/create-documents'
              style={{
                minWidth: 150,
                minHeight: 40,
                marginTop: 5,
                borderRadius: 30
              }}
            >
              Create New Docs
            </Button>
          </CardContent>
        </CardContent>
      </Card>
      <Card style={{ borderRadius: 10, marginTop: '20px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>TITLE</TableCell>
                <TableCell align='right'>AUTHOR</TableCell>
                <TableCell align='right'> CREATED</TableCell>
                <TableCell align='right'>LAST EDITED</TableCell>
                <TableCell align='right'>GROUP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.title}
                  sx={{
                    '&:last-of-type td, &:last-of-type th': {
                      border: 0
                    }
                  }}
                >
                  <TableCell component='th' scope='row' style={{ display: 'grid' }}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: 14 }}>
                      <FileDocumentOutline />
                      {row.title}
                    </div>
                    <div>...</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <p>Read</p>
                      <CircleSmall />
                      <p>Edit</p>
                    </div>
                  </TableCell>
                  <TableCell align='right'>{row.author}</TableCell>
                  <TableCell align='right'>{row.created}</TableCell>
                  <TableCell align='right'>{row.lastEdited}</TableCell>
                  <TableCell align='right'>{row.group}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default ListDocument
