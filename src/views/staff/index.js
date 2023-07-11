// ** React Imports
import { useState, Fragment, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import styles from './style.module.css'

import { EyeFilled } from '@ant-design/icons';

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { Button } from '@mui/material'
import { rows } from './constant'





const Row = props => {
  // ** Props
  const { row } = props


  // ** State
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.quantity}</TableCell>
        <TableCell align='right'>{row.kpi}</TableCell>
        <TableCell align='right'>{row.review}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell align='right' >Nation id</TableCell>
                    <TableCell align='right' >Address</TableCell>
                    <TableCell align='right' >Position
                    </TableCell>
                    <TableCell align='right' >Detail</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell align='left'>{historyRow.name}</TableCell>

                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell align='right'>{historyRow.amount}</TableCell>
                      <TableCell align='right'>{historyRow.date2}</TableCell>
                      <TableCell align='right'>{Math.round(historyRow.amount * row.kpi * 100) / 100}</TableCell>
                      <TableCell align='right'>
                        <Button
                          size='small'
                          variant='contained'
                          style={{ backgroundColor: '#9155FD', color: 'white' }}
                          sx={{ marginLeft: 10 }}
                        >
                          <EyeFilled />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}



const TableCollapsible = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Department</TableCell>
            <TableCell align='right'>Quantity of people</TableCell>
            <TableCell align='right'>KPI</TableCell>
            <TableCell align='right'>Evaluate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


export default TableCollapsible
