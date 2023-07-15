// ** React Imports
import { memo, useCallback, useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Button, TextField, Link } from '@mui/material'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import { Delete } from 'mdi-material-ui'
import { Magnify } from 'mdi-material-ui'
import { Breadcrumb } from 'antd'
import Stack from '@mui/material/Stack'
import { Controller, useForm } from 'react-hook-form'
import TableCommon from 'src/components/TableCommon'
import { listCustomerService } from './constant'
import EyeOutline from 'mdi-material-ui/EyeOutline'

const CustomerCare = () => {
  const { control, handleSubmit } = useForm()

  const onSubmit = data => console.log('data: ', data)

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
    <div style={{ flex: 1 }}>
      <Breadcrumb>
        <Breadcrumb.Item>Customer</Breadcrumb.Item>
        <Breadcrumb.Item>Customer Service</Breadcrumb.Item>
      </Breadcrumb>
      {/* Button Add */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 50 }}>
        {/* <Loading isLoading={isLoading} /> */}
        {/* <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            {listCustomerService.map(inputSearch => (
              <div key={`inputSearchCustormer_${inputSearch.field}`}>
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
            <Button
              size='large'
              variant='contained'
              sx={{ marginLeft: 10 }}
              onClick={() => handleOpenModalCreateCustomer()}
            >
              Thêm mới
            </Button>
          </Stack>
        </form> */}
      </div>
      {/* Table */}
      <div className='table-data mt-3'>
        <TableCommon
          data={[]}
          parseFunction={parseData}
          columns={listCustomerService}
          isShowPaging
          classNameTable='tblCampaignReport'

          // onChangePage={page => onChangePage(page - 1)}
          // totalCountData={(dataList && dataList.totalElements) || 0}
          // defaultPage={dataRequest.page + 1}
          // currentPage={dataRequest.page + 1}
          // totalDisplay={dataRequest.size || 10}
        />
      </div>
    </div>
  )
}

export default memo(CustomerCare)
