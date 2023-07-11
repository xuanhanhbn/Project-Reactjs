import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'


import TableCustomized from 'src/views/filemanager'

const MUITable = () => {

    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader title='Mangager File' titleTypographyProps={{ variant: 'h6' }} />
                <TableCustomized />
            </Card>
        </Grid>
    )
}

export default MUITable
