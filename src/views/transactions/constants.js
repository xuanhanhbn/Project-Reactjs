export const columns = [
  {
    field: 'index',
    maxWidth: 170,
    name: 'STT',
    align: 'center'

    // isSort: true,
  },
  { field: 'name', name: 'Customer', minWidth: 170 },
  { field: 'total', name: 'Total', minWidth: 100 },
  {
    field: 'date',
    name: 'Date',
    minWidth: 170
  },
  {
    field: 'createdByName',
    name: 'Created',
    minWidth: 170
  },
  {
    field: 'actions',
    name: 'Actions',
    minWidth: 170,
    align: 'center'
  }
]
