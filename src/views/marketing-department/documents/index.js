import MarketingDepartmentHeader from '../marketingDepartmentHeader'
import { Button, IconButton } from '@mui/material'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { CircleSmall, Delete, EyeOutline, FileDocumentOutline } from 'mdi-material-ui'
import { Breadcrumb } from 'antd'
import { memo } from 'react'
import TableCommon from 'src/components/TableCommon'
import Link from 'next/link'
import React, { useCallback } from 'react'
import { columns } from './constants'

function MarketingDocuments() {
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
            <IconButton>
              <EyeOutline style={{ fontSize: 18 }} />
            </IconButton>
          </Link>
          <IconButton>
            <Delete style={{ fontSize: 18, color: 'red' }} />
          </IconButton>
        </>
      )
    }

    return item[field]
  }, [])

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item>Marketing Department</Breadcrumb.Item>
        <Breadcrumb.Item>Documents</Breadcrumb.Item>
      </Breadcrumb>
      {/* <MarketingDepartmentHeader /> */}
      <Card style={{ borderRadius: 10, marginTop: 30 }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='h6'>You are viewing all docs.</Typography>
          <Button
            size='large'
            variant='contained'
            sx={{ marginLeft: 10 }}
            href='/admin/create-documents'
            style={{
              minWidth: 150,
              minHeight: 40,
              marginTop: 5
            }}
          >
            Create New Docs
          </Button>
        </CardContent>
      </Card>
      <Card className='mt-4'>
        <TableCommon
          data={[]}
          parseFunction={parseData}
          columns={columns}
          isShowPaging
          classNameTable='tblCampaignReport'

          // onChangePage={page => onChangePage(page - 1)}
          // totalCountData={(dataList && dataList.totalElements) || 0}
          // defaultPage={dataRequest.page + 1}
          // currentPage={dataRequest.page + 1}
          // totalDisplay={dataRequest.size || 10}
        />
      </Card>
    </div>
  )
}

export default memo(MarketingDocuments)
