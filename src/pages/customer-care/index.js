import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'


import TableStickyHeader from 'src/views/customer-care'

const MUITable = () => {

    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader title='Customer Care' titleTypographyProps={{ variant: 'h6' }} />
                {/* <TableStickyHeader /> */}
            </Card>
        </Grid>
    )
}

export default MUITable