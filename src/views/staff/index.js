/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import React, { useState, Fragment, useEffect, useCallback, memo } from 'react'

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
import Loading from 'src/components/Loading'

import { makeSelectStaff, staffActions } from './staffSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#9155FD',
  '&:hover': {
    backgroundColor: '#9155FD'
  }
}))

const TableCollapsible = () => {
  const moment = require('moment')

  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const globalData = useSelector(makeSelectStaff)
  const dataStaff = globalData?.dataStaff
  const { isCreate, isLoading } = globalData

  const handleShowSnackbar = (message, variant = 'success') => enqueueSnackbar(message, { variant })

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

  useEffect(() => {
    dispatch(staffActions.getListStaff())
  }, [])

  // Xử lí khi thêm mới thành công sẽ call lại api danh sách
  useEffect(() => {
    if (isCreate) {
      dispatch(staffActions.clear())
      dispatch(staffActions.getListStaff())
      setIsOpenModal(false)
      handleShowSnackbar('Create Success')
    }
  }, [isCreate])

  const [isOpenModal, setIsOpenModal] = useState(false)

  // Xử lí mở modal
  const handleOpenModalCreateCustomer = () => setIsOpenModal(true)

  // Xử lí đóng modal
  const handleCloseModalCreate = () => setIsOpenModal(false)

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item>
          <Link href='/admin/dashboard'>Company Active</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Staff</Breadcrumb.Item>
      </Breadcrumb>

      <ColorButton onClick={() => handleOpenModalCreateCustomer()} sx={{ float: right, mb: 8 }}>
        Create User
      </ColorButton>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableBody>
            <TableCommon
              data={dataStaff || []}
              parseFunction={parseData}
              columns={columns}
              isShowPaging
              classNameTable='tblCampaignReport'
            />
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

export default memo(TableCollapsible)
