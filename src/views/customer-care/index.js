// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Icon, Link } from '@mui/material'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import { Delete } from 'mdi-material-ui'

const columnsDefault = [
    {
        id: 'stt', label: 'stt', minWidth: 50,
    },

    {
        id: 'name', label: 'name', minWidth: 50, align: 'left',
    },
    {
        id: 'phone',
        label: 'phone',
        align: 'left',
        minWidth: 50,
    },
    {
        id: 'email',
        label: 'email',
        minWidth: 50,
        align: 'center',

    },
    {
        id: 'problem',
        label: 'problem',
        minWidth: 200,
        align: 'center',
    },
    {
        id: 'action',
        label: 'action',
        minWidth: 70,
        align: 'center',
    },
    {
        id: 'status',
        label: 'status',
        minWidth: 70,
        align: 'left',
    }
]
function createData(stt, name, phone, email, problem, action, status) {

    return { stt, name, phone, email, problem, action, status }
}



const TableStickyHeader = props => {
    const { rows, columns } = props
    const rowsDefault = rows ? rows : rowDefault || []
    const columsDefault = columns ? columns : columnsDefault || []

    // ** States

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            {columsDefault.map(column => (
                                <>
                                    <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                </>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsDefault.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                                    {columsDefault.map(column => {
                                        const value = row[column.id]

                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                {column.id === 'action' && (
                                                    <>
                                                        <Link href='/account-settings/'>
                                                            <HomeOutline style={{ fontSize: 18, marginRight: 5 }} />
                                                        </Link>
                                                        <Delete style={{ fontSize: 18, color: 'red' }} color='red' />
                                                    </>
                                                )}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={rowsDefault.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default TableStickyHeader
