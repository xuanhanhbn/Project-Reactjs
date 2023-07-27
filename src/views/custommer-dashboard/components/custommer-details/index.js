/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import React, { useCallback, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { columns, listOder } from './constant'
import { Breadcrumb } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { customerActions, makeSelectCustomer } from '../../customerSlice'
import { ticketActions, makeSelectTicket } from './ticketListSlice'
import { useRouter } from 'next/router'
import Loading from 'src/components/Loading'
import CustomTable from 'src/components/TableCommon'
import moment from 'moment'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

function CustommerDetails(props) {
  const breadcrumbItems = [
    { title: 'Company Active' },
    { href: '/customer-dashboard', title: 'Custommer List' },
    { title: 'Custommer Detail' }
  ]

  const router = useRouter()
  const globalData = router?.query
  const dispatch = useDispatch()

  const globalDataDetails = useSelector(makeSelectTicket)
  const { isLoading } = globalDataDetails

  const ticketDetails = globalDataDetails?.dataTicket

  const listTicket = []

  for (let i = 0; i < ticketDetails.length; i++) {
    if (ticketDetails[i].requestor.customerId == globalData.customerId) {
      listTicket.push(ticketDetails[i])
    }
  }

  // for (let i = 0; i < listTicket.length; i++) {
  //   listTicket[i].createdAt = moment(listTicket[i].createdAt).format('DD/MM/YYY')
  // }

  console.log('list Ticket', listTicket)

  // Call api danh sach
  useEffect(() => {
    dispatch(ticketActions.getListTicket())
  }, [])

  const parseData = useCallback((item, field, index) => {
    if (field === 'index') {
      return index + 1
    }

    // if (field === 'actions') {
    //   return (
    //     <>
    //       <Link
    //         passHref
    //         href={{
    //           pathname: '/customer-dashboard/custommer-detail',
    //           query: { ...item, type: 'not' }
    //         }}
    //       >
    //         <Button>
    //           <EyeOutline style={{ fontSize: 18, marginRight: 5 }} />
    //         </Button>
    //       </Link>
    //       {/* </Button> */}

    //       <IconButton>
    //         <Delete style={{ fontSize: 18, color: 'red' }} color='red' />
    //       </IconButton>

    //       {/* <Delete style={{ fontSize: 18, color: 'red' }} color='red' /> */}
    //     </>
    //   )
    // }

    if (field === 'fullName') {
      const name = item.resolver.fullName

      return <div>{name}</div>
    }

    if (field === 'createdAt') {
      const formatDate = moment(item?.createdAt).format('YYYY/MM/DD')

      return <div>{formatDate}</div>
    }

    return item[field]
  }, [])

  console.log('globalData: ', globalData)

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }} items={breadcrumbItems} />

      <Card>
        <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h2'>Customer Details</Typography>
            <Box sx={{ paddingTop: 10 }}>
              <div style={{ borderTop: '1px solid  #3a35411f', paddingTop: 30 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={{ xs: 16, sm: 8, md: 12 }}>
                    <Grid item xs={4} sx={{ paddingRight: 5 }}>
                      <Typography variant='h4' sx={{ marginBottom: 6, color: 'black' }}>
                        Customer Information
                      </Typography>
                      <div
                        style={{
                          border: '1px solid  #3a35411f',
                          borderRadius: 4,
                          padding: '10px 15px',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                          <div>
                            <span style={{ color: '#3a354161' }}>Name</span>
                            <p style={{ fontWeight: 600, marginTop: 4 }}>{globalData.name}</p>
                          </div>
                          <div>
                            <ImgStyled
                              sx={{ borderRadius: 50, width: 40, height: 40 }}
                              src='/images/avatars/1686130680-bpfull.jpg'
                              alt='Profile Pic'
                            />
                          </div>
                        </div>
                        <div style={{ marginBottom: 8 }}>
                          <span style={{ color: '#3a354161' }}>Email</span>
                          <p style={{ fontWeight: 600, marginTop: 3 }}>{globalData.email}</p>
                        </div>
                        <div style={{ marginBottom: 8 }}>
                          <span style={{ color: '#3a354161' }}>Phone</span>
                          <p style={{ fontWeight: 600, marginTop: 3 }}>{globalData.telephone}</p>
                        </div>
                        <div style={{ marginBottom: 8 }}>
                          <span style={{ color: '#3a354161' }}>Address</span>
                          <p style={{ fontWeight: 600, marginTop: 3 }}>{globalData.address}</p>
                        </div>
                      </div>
                      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                        <Button style={{ border: '1px solid  #3a35411f', padding: '5px 25px' }}>Call</Button>
                        <Button
                          style={{
                            border: '1px solid  #3a35411f',
                            padding: '5px 50px',
                            backgroundColor: '#9155FD',
                            color: 'white',
                            marginLeft: 10
                          }}
                        >
                          Message
                        </Button>
                      </div>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant='h4' sx={{ marginBottom: 6, color: 'black' }}>
                        Oders
                      </Typography>
                      <div style={{ border: '1px solid  #3a35411f', borderRadius: 4 }}>
                        <CustomTable columns={columns} data={listTicket || []} parseFunction={parseData} />
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <div></div>
      <Loading isLoading={isLoading} />
    </div>
  )
}

export default CustommerDetails
