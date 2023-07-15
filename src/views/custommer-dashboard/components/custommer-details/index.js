import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import React, { useEffect } from 'react'
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
import { listOder } from './constant'
import { Breadcrumb } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { customerActions, makeSelectCustomer } from '../../customerSlice'
import { useRouter } from 'next/router'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

function CustommerDetails(props) {
  const router = useRouter()
  const globalData = router?.query

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item>Marketing Department</Breadcrumb.Item>
        <Breadcrumb.Item>Custommer Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Custommer Detail</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={3} sx={{ padding: '10px 20px' }}>
                <div style={{ borderRight: '1px solid  #3a35411f' }}>
                  <Typography variant='h5' sx={{ marginBottom: 8, color: 'black' }}>
                    Total Cost
                  </Typography>
                  <Typography variant='h3' sx={{ marginBottom: 2, color: 'black' }}>
                    $10404.2
                  </Typography>
                  <p style={{ color: '#3a354161' }}>New cost last 365 days</p>
                </div>
              </Grid>
              <Grid item xs={3} sx={{ padding: '10px 20px' }}>
                <div style={{ borderRight: '1px solid  #3a35411f' }}>
                  <Typography variant='h5' sx={{ marginBottom: 8, color: 'black' }}>
                    Total Oder
                  </Typography>
                  <Typography
                    variant='h3'
                    sx={{ marginBottom: 2, color: 'black', display: 'flex', alignItems: 'center' }}
                  >
                    127
                    <div
                      style={{ width: 13, height: 13, borderRadius: '50%', backgroundColor: 'orange', marginLeft: 10 }}
                    ></div>
                  </Typography>
                  <p style={{ color: '#3a354161' }}>Total oder last 365 days</p>
                </div>
              </Grid>
              <Grid item xs={3} sx={{ padding: '10px 20px' }}>
                <div style={{ borderRight: '1px solid  #3a35411f' }}>
                  <Typography variant='h5' sx={{ marginBottom: 8, color: 'black' }}>
                    Completed
                  </Typography>
                  <Typography
                    variant='h3'
                    sx={{ marginBottom: 2, color: 'black', display: 'flex', alignItems: 'center' }}
                  >
                    100
                    <div
                      style={{ width: 13, height: 13, borderRadius: '50%', backgroundColor: 'green', marginLeft: 10 }}
                    ></div>
                  </Typography>
                  <p style={{ color: '#3a354161' }}>Completed last 365 days</p>
                </div>
              </Grid>
              <Grid item xs={3} sx={{ padding: '10px 20px' }}>
                <div>
                  <Typography variant='h5' sx={{ marginBottom: 8, color: 'black' }}>
                    Canceld
                  </Typography>
                  <Typography
                    variant='h3'
                    sx={{ marginBottom: 2, color: 'black', display: 'flex', alignItems: 'center' }}
                  >
                    27
                    <div
                      style={{ width: 13, height: 13, borderRadius: '50%', backgroundColor: 'red', marginLeft: 10 }}
                    ></div>
                  </Typography>
                  <p style={{ color: '#3a354161' }}>Canceld oder last 365 days</p>
                </div>
              </Grid>
            </Grid>
            <Box sx={{ padding: 20, paddingTop: 10 }}>
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
                        <TableContainer component={Paper}>
                          <Table aria-label='simple table'>
                            <TableHead>
                              <TableRow>
                                <TableCell align='left'>Product name</TableCell>
                                <TableCell align='left'>Date</TableCell>
                                <TableCell align='left'>Status</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {listOder.map(oder => (
                                <TableRow
                                  key={oder.id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, p: 10 }}
                                >
                                  <TableCell align='left'>
                                    <p style={{ color: 'black', fontWeight: 500 }}>{oder.productName}</p>
                                  </TableCell>
                                  <TableCell align='left'>{oder.date}</TableCell>
                                  <TableCell align='left'>
                                    <p style={{ color: ` ${oder.corlo}`, fontWeight: 500 }}>{oder.status}</p>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

export default CustommerDetails
