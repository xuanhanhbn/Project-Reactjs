const createData = (name, quantity, kpi, review) => {
  return {
    name,
    quantity,
    kpi,
    review,
    history: [
      {
        name: 'Tú',
        date: '27',
        date2: 7,
        amount: 3
      },
      {
        name: 'Dương',
        date: '28',
        date2: 5,
        amount: 4
      }
    ]
  }
}

export const rows = [
  createData('Phòng Nhân Sự', 159, 6.0, 'Xuất Sắc'),
  createData('Phòng Kế Toán', 237, 9.0, 'Trung Bình'),
  createData('Phòng Kinh Tế', 262, 16.0, 'Yếu')
]

export const columns = [
  {
    field: 'index',
    maxWidth: 170,
    name: 'STT',
    align: 'center'

    // isSort: true,
  },
  { field: 'fullName', name: 'Name', minWidth: 170 },
  { field: 'employeeCode', name: 'Employee Code', minWidth: 100 },

  {
    field: 'roles',
    name: 'Roles',
    minWidth: 170
  },
  {
    field: 'deparment',
    name: 'Deparment',
    minWidth: 170
  },
  {
    field: 'actions',
    name: 'Actions',
    minWidth: 170,
    align: 'center'
  }
]

export const inputCreateUser = [
  {
    field: 'firstName',
    placeHolder: 'First Name',
    type: 'INPUT',
    inputLabel: 'First Name :'
  },
  {
    field: 'lastName',
    placeHolder: 'Last Name',
    type: 'INPUT',
    inputLabel: 'Last Name :'
  },
  {
    field: 'username',
    placeHolder: 'User Name',
    type: 'INPUT',
    inputLabel: 'User Name :'
  },
  {
    field: 'email',
    placeHolder: 'Email',
    type: 'INPUT',
    inputLabel: 'Email :'
  },
  {
    field: 'password',
    placeHolder: 'Password',
    type: 'PASSWORD',
    inputLabel: 'Password :'
  },
  {
    field: 'roler',
    placeHolder: 'Roler',
    type: 'SELECT',
    inputLabel: 'Roler :'
  }
]

export const roleAccount = [
  {
    field: 'admin',
    value: 'Admin'
  },
  {
    field: 'author',
    value: 'Author'
  },
  {
    field: 'editor',
    value: 'Editor'
  },
  {
    field: 'maintainer',
    value: 'Maintainer'
  }
]
