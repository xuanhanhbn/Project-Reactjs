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
  createData('HR Deparment', 159, 6.0, 'Very Good'),
  createData('Accouting Department', 237, 9.0, 'Good'),
  createData('Marketing Deparment', 262, 16.0, 'Bad')
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
    field: 'roles',
    placeHolder: 'Roler',
    type: 'SELECT',
    inputLabel: 'Roler :'
  },
  {
    field: 'department',
    placeHolder: 'Department',
    type: 'SELECT',
    inputLabel: 'Department :'
  }
]

export const roleAccount = [
  {
    field: 'manager',
    value: 'Manager'
  },
  {
    field: 'empolyee',
    value: 'Empolyee'
  }
]

export const roleDepartments = [
  {
    field: 'marketing',
    value: 'Marketing'
  },
  {
    field: 'humanResources',
    value: 'Human Resources'
  },
  {
    field: 'accounting',
    value: 'Accounting'
  }
]
