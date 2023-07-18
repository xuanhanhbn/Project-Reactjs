import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

function FeedBackTicKets() {
  return (
    <div>
      <Card>
        <CardHeader title='Feed back ticket' />
        <CardContent>
          
        </CardContent>
        <CardActions className='card-action-dense'>
          <Button variant='contained'>Submit</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default FeedBackTicKets
