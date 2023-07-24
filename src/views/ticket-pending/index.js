import React, { memo, useCallback, useEffect, useState } from 'react'
import { Breadcrumb, Dropdown } from 'antd'
import TableCommon from 'src/components/TableCommon'
import { colums, inputSearchTicket } from './constants'
import { Typography } from '@mui/material'
import { Button, IconButton, TextField } from '@mui/material'
import Stack from '@mui/material/Stack'
import { Controller, useForm } from 'react-hook-form'
import { Delete, DeleteOutline, EyeOutline, Magnify } from 'mdi-material-ui'
import TicketDetails from './components/TicketDetails'
import { makeSelectTicket, ticketActions } from './ticketSlice'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

function TicketPendings() {
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const globalData = useSelector(makeSelectTicket)
  const dataTicket = globalData?.dataTicket
  const { isCreate, isLoading, isCreateFailed } = globalData

  // Xử lí khi tìm kiếm
  const onSubmit = data => {
    dispatch(ticketActions.getListTicket(data))
  }

  // Call api danh sach
  useEffect(() => {
    dispatch(ticketActions.getListTicket())
  }, [])

  // ** State
  const [isOpenModal, setIsOpenModal] = useState(false)

  const breadcrumbItems = [{ href: '', title: 'Company Active' }, { title: 'Ticket List' }]

  // tự render actions khi có thêm items mới
  const parseData = useCallback((item, field, index) => {
    if (field === 'index') {
      return index + 1
    }

    if (field === 'actions') {
      return (
        <>
          <Link href='' passHref>
            <IconButton color='secondary'>
              <EyeOutline style={{ fontSize: 18 }} />
            </IconButton>
          </Link>
          <IconButton
            onClick={() => {
              alert('delete')
            }}
            color='error'
          >
            <Delete style={{ fontSize: 18, color: 'red' }} color='red' />
          </IconButton>
        </>
      )
    }
    if (field === 'status') {
      if (item.status === 'Not Processed') {
        return (
          <div style={{ backgroundColor: 'rgb(244 196 196)', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
            <Typography sx={{ color: 'red', textAlign: 'center' }}>Not Processed</Typography>
          </div>
        )
      }
      if (item.status === 'In Processed') {
        return (
          <div style={{ backgroundColor: 'rgb(244 243 196)', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
            <Typography sx={{ color: 'warning.main', textAlign: 'center' }}>In Processed</Typography>
          </div>
        )
      }
      if (item.status === 'Processed') {
        return (
          <div style={{ backgroundColor: 'rgb(205 246 215)', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
            <Typography sx={{ color: 'success.main', textAlign: 'center' }}>Processed</Typography>
          </div>
        )
      }
    }

    return item[field]
  }, [])

  // fake data
  const fakeData = [{ ticket: 'tést' }]

  return (
    <div style={{ flex: 1 }}>
      <Breadcrumb items={breadcrumbItems} />
      {/* Button Add */}
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 50 }}
      ></div>
      {/* Search */}
      <div style={{ float: 'right', marginBottom: 15 }}>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            {inputSearchTicket.map(inputSearch => (
              <div key={`inputSearchTicket_${inputSearch.field}`}>
                <Controller
                  key={inputSearch.field}
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <TextField
                        placeholder={inputSearch.label}
                        name={inputSearch.field}
                        label={inputSearch.label}
                        value={value}
                        onChange={onChange}
                        required
                        fullWidth
                      />
                    )
                  }}
                  name={inputSearch.field}
                />
              </div>
            ))}
            <Button
              style={{ backgroundColor: '#9155FD', color: 'white' }}
              onClick={handleSubmit(onSubmit)}
              size='large'
              variant='contained'
            >
              <Magnify />
            </Button>
          </Stack>
        </form>
      </div>
      {/* Table */}
      <div className='table-data mt-3'>
        <TableCommon
        
          // data={dataTicket || []}
          data={fakeData}
          parseFunction={parseData}
          columns={colums}
          isShowPaging
          classNameTable='tblCampaignReport'
        />
      </div>
    </div>
  )
}

export default memo(TicketPendings)
