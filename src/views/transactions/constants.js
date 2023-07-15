export const columns = [
  {
    field: 'index',
    maxWidth: 170,
    name: 'STT',
    align: 'center'

    // isSort: true,
  },
  { field: 'name', name: 'Customer', minWidth: 170 },
  { field: 'email', name: 'Email', minWidth: 170 },

  { field: 'address', name: 'Address', minWidth: 170 },
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

export const inputCreate = [
  {
    field: 'contentSubTransactions',
    lable: 'Content SubTransactions'
  },
  {
    field: 'totalSubTransactions',
    lable: 'Total SubTransactions'
  },
  {
    field: 'remarksTitle',
    lable: 'Remarks Title'
  },
  {
    field: 'remarksContent',
    lable: 'Remarks Content'
  }
]
