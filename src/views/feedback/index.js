// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { Carousel, Button, Breadcrumb } from 'antd'
import { useRef, useState } from 'react'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import Avatar from '@mui/material/Avatar'
import Link from 'next/link'

const FeedBacks = () => {
  const ref = useRef()

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item>
          <Link href='/admin/dashboard'>Company Acttive</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Feed Backs</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Grid container spacing={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Grid item xs={10} sm={3}>
            <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
              <Typography variant='h4' sx={{ marginBottom: 10.5 }}>
                Top FeedBacks
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                    <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                    <Typography variant='body2'>Full Access</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                    <Typography variant='body2'>15 Members</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                    <StarOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                    <Typography variant='body2'>Access all Features</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TrendingUp sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                    <Typography variant='body2'>Lifetime Free Update</Typography>
                  </Box>
                </Grid>
              </Grid>{' '}
            </CardContent>
          </Grid>
          <Grid item sm={7} xs={12}>
            <CardContent>
              <Carousel autoplay={2000} ref={ref}>
                <div>
                  <Card
                    sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'info.main', height: 200 }}
                  >
                    <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            alt='Mary Vaughn'
                            src='/images/avatars/3.png'
                            sx={{ width: 34, height: 34, marginRight: 2.75 }}
                          />
                          <Typography variant='body2' sx={{ color: 'common.white' }}>
                            Mary Vaughn
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
                        Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                        invalid as well.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card
                    sx={{
                      border: 0,
                      boxShadow: 0,
                      color: 'common.white',
                      backgroundColor: '#9155FD',
                      height: 200
                    }}
                  >
                    <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            alt='Mary Vaughn'
                            src='/images/avatars/2.png'
                            sx={{ width: 34, height: 34, marginRight: 2.75 }}
                          />
                          <Typography variant='body2' sx={{ color: 'common.white' }}>
                            Mary Vaughn
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
                        Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                        invalid as well.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card
                    sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#56CA00', height: 200 }}
                  >
                    <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            alt='Mary Vaughn'
                            src='/images/avatars/1.png'
                            sx={{ width: 34, height: 34, marginRight: 2.75 }}
                          />
                          <Typography variant='body2' sx={{ color: 'common.white' }}>
                            Mary Vaughn
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
                        Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                        invalid as well.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card
                    sx={{
                      border: 0,
                      boxShadow: 0,
                      color: 'common.white',
                      backgroundColor: '#20c997',
                      height: 200
                    }}
                  >
                    <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            alt='Mary Vaughn'
                            src='/images/avatars/4.png'
                            sx={{ width: 34, height: 34, marginRight: 2.75 }}
                          />
                          <Typography variant='body2' sx={{ color: 'common.white' }}>
                            Mary Vaughn
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
                        Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                        invalid as well.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Carousel>
              {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => {
                  ref.current.prev()

                  // setCurrImg(currImg - 1)
                }}
              >
                <ArrowLeft />
              </Button>
              <Button
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => {
                  ref.current.next()

                  // setCurrImg(currImg + 1)
                }}
              >
                <ArrowRight />
              </Button>
            </div> */}
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

export default FeedBacks
