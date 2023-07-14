// ** React Imports
import { useState, Fragment, useEffect, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import { styled } from '@mui/material/styles'

import { EyeFilled } from '@ant-design/icons'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { rows } from './constant'

import TableCommon from 'src/components/TableCommon'
import Link from 'next/link'
import { Delete, EyeOutline } from 'mdi-material-ui'
import { columns } from './constant'
import { Breadcrumb } from 'antd'
import { right } from '@popperjs/core'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { purple } from '@mui/material/colors'
import FormCreate from './components/FormCreate'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#9155FD',
  '&:hover': {
    backgroundColor: '#9155FD'
  }
}))

const Row = props => {
  // ** Props
  const { row } = props

  // ** State
  const [open, setOpen] = useState(false)

  // Xử lí render ra STT & actions
  const parseData = useCallback((item, field, index) => {
    if (field === 'index') {
      return index + 1
    }

    if (field === 'actions') {
      return (
        <>
          <Link
            passHref
            href={{
              pathname: '/account-settings/',
              query: { ...item, type: 'not' }
            }}
          >
            <EyeOutline style={{ fontSize: 18, marginRight: 5 }} />
          </Link>
          {/* </Button> */}
          <Delete style={{ fontSize: 18, color: 'red' }} color='red' />
        </>
      )
    }

    return item[field]
  }, [])

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.quantity}</TableCell>
        <TableCell align='right'>{row.kpi}</TableCell>
        <TableCell align='right'>{row.review}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Table size='small' aria-label='purchases'>
                <TableCommon
                  data={[]}
                  parseFunction={parseData}
                  columns={columns}
                  isShowPaging
                  classNameTable='tblCampaignReport'
                />
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const TableCollapsible = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  // Xử lí mở modal
  const handleOpenModalCreateCustomer = () => setIsOpenModal(true)

  // Xử lí đóng modal
  const handleCloseModalCreate = () => setIsOpenModal(false)

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item>Marketing Department</Breadcrumb.Item>
        <Breadcrumb.Item>Staff</Breadcrumb.Item>
      </Breadcrumb>
      <ColorButton onClick={() => handleOpenModalCreateCustomer()} sx={{ float: right, mb: 8 }}>
        Create User
      </ColorButton>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Department</TableCell>
              <TableCell align='right'>Quantity of people</TableCell>
              <TableCell align='right'>KPI</TableCell>
              <TableCell align='right'>Evaluate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isOpenModal && (
        <FormCreate
          onOpen={isOpenModal}
          onClose={() => handleCloseModalCreate()}
          title='Add Customer'
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          style={{ minWidth: 340 }}
        />
      )}
    </div>
  )
}

export default TableCollapsible
