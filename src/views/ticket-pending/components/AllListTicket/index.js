/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Stack from '@mui/material/Stack'
import { Controller, useForm } from 'react-hook-form'
import { Button, IconButton, Typography } from '@mui/material'
import { Delete, EyeOutline, Magnify, Reload } from 'mdi-material-ui'
import { columsAllTicket, inputSearchTicket, statusTicket } from '../../constants'
import TableCommon from 'src/components/TableCommon'
import Link from 'next/link'
import Select from 'react-select'
import ModalCreate from './components/ModalCreate'
import { useDispatch, useSelector } from 'react-redux'
import { makeSelectStaff, staffActions } from 'src/views/staff/staffSlice'
import { makeSelectTicket, ticketActions } from '../../ticketSlice'
import Actions from '../Actions'
import Loading from 'src/components/Loading'
import { useSnackbar } from 'notistack'

function AllTicketList() {
  const { control, handleSubmit, setValue } = useForm()
  const dispatch = useDispatch()

  const globalDataStaff = useSelector(makeSelectStaff)
  const dataStaff = globalDataStaff?.dataStaff
  const globalDataTicket = useSelector(makeSelectTicket)
  const { isLoading, isError, isSuccess, isChangeSuccess } = globalDataTicket

  const baseDataRequest = {
    fullName: ''
  }
  const [dataRequest, setDataRequest] = useState(baseDataRequest)
  const dataTicket = globalDataTicket?.dataTicket
  const [valueTicket, setValueTicket] = useState({})
  const [valueEmployee, setValueEmployee] = useState({})
  const [defaultValue, setDefaultValue] = useState(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [valueStaff, setValueStaff] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const handleShowSnackbar = (message, variant = 'success') => enqueueSnackbar(message, { variant })

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '200px',
      height: '50px'
    })
  }

  useEffect(() => {
    // dispatch(staffActions.getListStaff())
    dispatch(staffActions.getListStaff())

    setTimeout(() => {
      dispatch(ticketActions.getListTicket())
    }, 1000)
  }, [])

  useEffect(() => {
    if (isError) {
      dispatch(ticketActions.clear())
      handleShowSnackbar('There was an error. Please try again.', 'error')
    }
  }, [isError])

  useEffect(() => {
    if (isChangeSuccess) {
      dispatch(ticketActions.clear())
      dispatch(ticketActions.getListTicket())
      handleShowSnackbar('Success')
    }
  }, [isChangeSuccess])

  const onSubmit = data => {
    dispatch(ticketActions.getListTicket())
    setValueTicket({})
  }

  const handleChangeSelectEmployee = selectedOption => {
    const selectedValue = selectedOption

    setValueEmployee(selectedValue)
    setValue('fullName', selectedValue?.value, { shouldValidate: true })
  }

  // const handleGetValueStaff = async () => {
  //   try {
  //     const url = 'Employee'
  //     const res = await getApiDefault(url)
  //     if (res && res.status === 200) {
  //       setValueStaff(res?.data)
  //     }
  //   } catch (error) {
  //     console.log('error: ', error)
  //   }
  // }

  // const handleGetOptionsSelect = () => dataTicket

  // const handleSetDefaultValue = () => {
  //   if (Array.isArray(dataTicket) && dataTicket.length > 0) {
  //     const formattedOptions = dataTicket.map(item => ({
  //       value: item?.resolver.id,
  //       label: item?.resolver.fullName
  //     }))

  //     return formattedOptions
  //   }
  // }

  // const handleGetValue = field => {
  //   const data = handleSetDefaultValue()

  //   return data.find(obj => obj.label === dataTicket?.resolver?.fullName)
  // }

  // tự render actions khi có thêm items mới
  const parseData = useCallback((item, field, index) => {
    // if (Array.isArray(dataTicket) && dataTicket.length > 0) {
    if (field === 'index') {
      return index + 1
    }
    if (field === 'actions') {
      return <Actions item={item} />
    }
    if (field === 'status') {
      if (item.status === 'Opened') {
        return (
          <div style={{ backgroundColor: 'rgb(244 196 196)', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
            <Typography sx={{ color: 'red', textAlign: 'center' }}>Open</Typography>
          </div>
        )
      }
      if (item.status === 'Pending') {
        return (
          <div style={{ backgroundColor: 'rgb(244 243 196)', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
            <Typography sx={{ color: 'warning.main', textAlign: 'center' }}>Pending</Typography>
          </div>
        )
      }
      if (item.status === 'Processing') {
        return (
          <div style={{ backgroundColor: 'rgb(205 246 215)', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
            <Typography sx={{ color: 'success.main', textAlign: 'center' }}>Processing</Typography>
          </div>
        )
      }
      if (item.status === 'Done') {
        return (
          <div style={{ backgroundColor: 'rgb(205 246 215)', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
            <Typography sx={{ color: 'success.main', textAlign: 'center' }}>Done</Typography>
          </div>
        )
      }
      if (item.status === 'Closed') {
        return (
          <div style={{ backgroundColor: 'rgb(205 246 215)', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }}>
            <Typography sx={{ color: 'success.main', textAlign: 'center' }}>Closed</Typography>
          </div>
        )
      }
    }
    if (field === 'fullName') {
      return (
        <div>{item?.resolver?.fullName}</div>

        // <Select
        //   onChange={handleChangeSelectEmployee()}
        //   options={handleGetOptions() || []}
        //   value={valueEmployee}
        //   getOptionLabel={option => option?.fullName}
        //   getOptionValue={option => option?.id}
        //   isSearchable
        //   className='z-2'
        // />
      )
    }
    if (field === 'name') {
      return <div>{item?.requestor?.name}</div>
    }
    if (field === 'email') {
      return <div>{item?.requestor?.email}</div>
    }

    // }

    return item[field]
  }, [])

  const handleGetOptions = () => {
    const formattedOptions = dataStaff?.map(item => ({
      value: item?.id,
      label: item?.fullName
    }))

    return formattedOptions
  }

  const handleSelectChange = selectedOption => {
    const newDataRequest = {
      status: selectedOption?.value
    }
    dispatch(ticketActions.getListTicket(newDataRequest))

    const selectedValue = selectedOption
    setValue('status', selectedValue?.value, { shouldValidate: true })
    setValueTicket(selectedValue)
  }

  const handleOpenModalCreateCustomer = () => setIsOpenModal(true)
  const handleCloseModalCreate = () => setIsOpenModal(false)

  return (
    <div>
      {/* Search */}
      <div style={{ float: 'right', marginBottom: 15 }}>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            {inputSearchTicket.map(inputSearch => (
              <div key={`inputSearchTicket_${inputSearch.field}`}>
                <Controller
                  key={inputSearch.field}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Select
                        {...field}
                        onChange={handleSelectChange}
                        options={statusTicket}
                        placeholder='Search Status'
                        value={valueTicket}
                        isSearchable
                        className='z-3'
                        styles={customStyles}
                      />
                    )
                  }}
                  name={inputSearch.field}
                />
              </div>
            ))}
            <Button onClick={handleSubmit(onSubmit)} size='large' variant='outlined'>
              <Reload />
            </Button>
            <Button size='large' variant='contained' onClick={() => handleOpenModalCreateCustomer()}>
              Create New
            </Button>
          </Stack>
        </form>
      </div>
      {/* Table */}
      <div className='table-data mt-3'>
        <TableCommon
          data={dataTicket || []}
          parseFunction={parseData}
          columns={columsAllTicket}
          isShowPaging
          classNameTable='tblCampaignReport'
        />
      </div>
      {isOpenModal && (
        <ModalCreate
          onOpen={isOpenModal}
          onClose={() => handleCloseModalCreate()}
          title='Add Ticket'
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        />
      )}
      <Loading isLoading={isLoading} />
    </div>
  )
}

export default AllTicketList
