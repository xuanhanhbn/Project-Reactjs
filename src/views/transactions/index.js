import React, { memo, useCallback, useEffect, useState } from 'react'
import { Breadcrumb, Typography } from 'antd'
import Link from 'next/link'
import { Delete, EyeOutline } from 'mdi-material-ui'
import TableCommon from 'src/components/TableCommon'
import { columns } from './constants'
import { transactionActions, makeSelectTransaction } from './transactionSlice'
import { useDispatch, useSelector } from 'react-redux'

function Transactions() {
  const dispatch = useDispatch()

  const globalData = useSelector(makeSelectTransaction)
  const dataTransaction = globalData?.dataTransaction
  console.log('dataTransaction: ', dataTransaction)

  // Call api danh sach
  useEffect(() => {
    dispatch(transactionActions.getListTransaction())
  }, [])

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
    <div>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item>
          <Link href='/admin/dashboard'>Company Active</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Transactions</Breadcrumb.Item>
      </Breadcrumb>

      <TableCommon
        data={dataTransaction || []}
        parseFunction={parseData}
        columns={columns}
        isShowPaging
        classNameTable='tblCampaignReport'
      />
    </div>
  )
}

export default memo(Transactions)
