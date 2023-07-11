const { Decagram } = require("mdi-material-ui");

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'


import TableCollapsible from 'src/views/staff'

const MUITable = () => {
    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader title='Staff Manager' titleTypographyProps={{ variant: 'h6' }} />
                <TableCollapsible />
            </Card>
        </Grid>
    )
}

export default MUITable
