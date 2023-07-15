import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { replyTopic } from '../../constants'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { Input } from 'antd'
import { Breadcrumb } from 'antd'
import { memo } from 'react'
import Link from 'next/link'

const { TextArea } = Input

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

function ViewTopics() {
  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item>
          <Link href='/admin/dashboard'>Company Acttive</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href='/marketing-department/forums'>Marketing Department</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Forums</Breadcrumb.Item>
      </Breadcrumb>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box>
              <Typography variant='h3' sx={{ marginBottom: 2, fontWeight: 600 }}>
                Creative ideas to help tell your company story
              </Typography>

              <Typography sx={{ marginBottom: 2 }}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
                elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
                habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ borderRadius: 2, marginTop: 30 }}>
        {replyTopic.map(rep => {
          return (
            <CardContent key={rep.id} sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box sx={{ marginRight: 10 }}>
                  <ImgStyled
                    src={rep.avatar}
                    alt='Profile Pic'
                    style={{ borderRadius: '50%', width: 70, height: 70, margin: 0 }}
                  />
                  <Typography variant='h5' sx={{ marginBottom: 2, fontWeight: 600, textAlign: 'center', marginTop: 2 }}>
                    {rep.userName}
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ marginBottom: 2, border: '1px solid grey', borderRadius: 2, padding: 10 }}>
                    {rep.message}
                  </Typography>
                  <Typography sx={{ marginBottom: 4 }}>{rep.replyTime}</Typography>
                </Box>
              </Box>
            </CardContent>
          )
        })}
      </Card>
      <Card style={{ borderRadius: 10, marginTop: '20px' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
          <Typography variant='h4' sx={{ marginBottom: 2, fontWeight: 600 }}>
            Reply To: Creative ideas to help tell your company story
          </Typography>

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

export default memo(ViewTopics)
