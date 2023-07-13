// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { DownloadOutlined } from '@ant-design/icons';
import { EyeOutlined } from '@ant-design/icons';
import { Button } from '@mui/material'
import { rows } from './constant'




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },

    // hide last border
    '&:last-of-type td, &:last-of-type th': {
        border: 0
    }
}))



const TableCustomized = () => {
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name File</StyledTableCell>
                        <StyledTableCell align='center'>By</StyledTableCell>
                        <StyledTableCell align='right'>Date Issued</StyledTableCell>
                        <StyledTableCell align='right'>Date Action</StyledTableCell>
                        <StyledTableCell align='right'>Date Finished</StyledTableCell>
                        <StyledTableCell align='center'>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component='th' scope='row'>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align='right'>{row.author}</StyledTableCell>
                            <StyledTableCell align='right'>{row.dateissue}</StyledTableCell>
                            <StyledTableCell align='right'>{row.dateaction}</StyledTableCell>
                            <StyledTableCell align='right'>{row.datefinish}</StyledTableCell>
                            <StyledTableCell align='right'>
                                <Button>
                                    <DownloadOutlined />
                                </Button>

                                <Button>
                                    <EyeOutlined />
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableCustomized
