/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useState } from 'react'
import { Breadcrumb, Typography } from 'antd'
import Link from 'next/link'
import { Delete, EyeOutline } from 'mdi-material-ui'
import TableCommon from 'src/components/TableCommon'
import { columns, fakeData } from './constants'
import { transactionActions, makeSelectTransaction } from './transactionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button, IconButton } from '@mui/material'
import FormCreate from './components/ModalCreate'
import Actions from './components/Actions'
import Loading from 'src/components/Loading'

function Transactions() {
  // Khai báo BreadCrumb
  const breadcrumbItems = [{ title: 'Company Active' }, { title: 'Transaction List' }]
  const dispatch = useDispatch()

  const [isOpenModal, setIsOpenModal] = useState(false)

  const globalData = useSelector(makeSelectTransaction)
  const { isCreate, isLoading } = globalData
  const dataTransaction = globalData?.dataTransaction

  const handleGetList = () => {
    dispatch(transactionActions.getListTransaction())
  }

  // Call api danh sach
  useEffect(() => {
    handleGetList()
  }, [])

  useEffect(() => {
    if (isCreate) {
      dispatch(transactionActions.clear())
      handleGetList()
      setIsOpenModal(false)
    }
  }, [isCreate])

  const parseData = useCallback((item, field, index) => {
    if (field === 'index') {
      return index + 1
    }

    if (field === 'actions') {
      return (
        <>
          <Actions />
        </>
      )
    }
    if (field === 'name') {
      return <Typography>{item?.customer?.name}</Typography>
    }
    if (field === 'email') {
      return <Typography>{item?.customer?.email}</Typography>
    }
    if (field === 'address') {
      return <Typography>{item?.customer?.address}</Typography>
    }

    return item[field]
  }, [])

  const handleOpenModalCreate = () => setIsOpenModal(true)
  const handleCloseModalCreate = () => setIsOpenModal(false)

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }} items={breadcrumbItems} />

      <div className='d-flex justify-content-end mb-3'>
        <Button size='large' variant='contained' sx={{ marginLeft: 10 }} onClick={() => handleOpenModalCreate()}>
          Create New
        </Button>
      </div>
      <Loading isLoading={isLoading} />
      <TableCommon
        data={dataTransaction || []}
        parseFunction={parseData}
        columns={columns}
        isShowPaging
        classNameTable='tblCampaignReport'
      />
      {isOpenModal && (
        <FormCreate
          onOpen={isOpenModal}
          onClose={() => handleCloseModalCreate()}
          title='Add Transaction'
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          style={{ minWidth: 340 }}
        />
      )}
    </div>
  )
}

export default memo(Transactions)
