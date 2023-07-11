import React, { memo } from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import MarketingDepartmentHeader from '../marketingDepartmentHeader'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { listTopic } from 'src/views/marketing-department/forums/constants'
import Paper from '@mui/material/Paper'
import { Input } from 'antd'
import CardActions from '@mui/material/CardActions'
import Link from 'next/link'
import { Breadcrumb } from 'antd'
import TableCommon from 'src/components/TableCommon'
import { Delete } from 'mdi-material-ui'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import { useCallback } from 'react'
import { columns } from './constants'

const { TextArea } = Input

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

function MarketingForums() {
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
        <Breadcrumb.Item>Marketing Department</Breadcrumb.Item>
        <Breadcrumb.Item>Forums</Breadcrumb.Item>
      </Breadcrumb>
      {/* <MarketingDepartmentHeader /> */}
      <Card className='mt-4'>
        <TableCommon
          data={[]}
          parseFunction={parseData}
          columns={columns}
          isShowPaging
          classNameTable='tblCampaignReport'
        />
      </Card>
      <Card style={{ borderRadius: 10, marginTop: '20px' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
          <Typography variant='h4' sx={{ marginBottom: 2, fontWeight: 600 }}>
            Create New Topic
          </Typography>
          <Divider sx={{ marginBottom: 10, borderColor: 'black' }} />
          <Typography variant='h5' sx={{ marginBottom: 2, fontWeight: 600 }}>
            Topic Title
          </Typography>
          <Input style={{ borderRadius: 6, marginTop: 10, padding: '10px 20px' }} />
          <TextArea rows={6} style={{ marginTop: 30, borderRadius: 6 }} />

          <CardActions>
            <Button size='large' type='submit' sx={{ padding: '10px 20px' }} variant='contained'>
              Submit
            </Button>
            <Button size='large' color='secondary' variant='outlined' sx={{ padding: '10px 20px' }}>
              Cancel
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
}

export default memo(MarketingForums)
