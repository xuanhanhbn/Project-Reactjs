export const custommerFeedBack = [
  {
    avatar: '/images/avatars/1.png',
    custommerName: 'Eugene Clarke',
    feedback:
      'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
  },
  {
    avatar: '/images/avatars/4.png',
    custommerName: 'Mary Vaughn',
    feedback:
      'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
  },
  {
    avatar: '/images/avatars/8.png',
    custommerName: 'Anne Burke',
    feedback:
      'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
  }
]

export const inputCustommerRequestr = [
  {
    field: 'fullName',
    label: 'Full Name',
    type: 'INPUT',
    inputLabel: 'Full Name :'
  },
  {
    field: 'email',
    label: 'Email',
    type: 'INPUT',
    inputLabel: 'Email :'
  },
  {
    field: 'telephone',
    label: 'Phone No.',
    type: 'INPUT',
    inputLabel: 'Phone :'
  },
  {
    field: 'message',
    label: 'Message',
    type: 'MESSAGE',
    inputLabel: 'Message :'
  }
]

export const columns = [
  {
    field: 'index',
    maxWidth: 170,
    name: 'STT',
    align: 'center'

    // isSort: true,
  },
  { field: 'req', name: 'Request', minWidth: 370 },
  { field: 'status', name: 'Status', minWidth: 100 },

  {
    field: 'details',
    name: 'Details',
    minWidth: 170
  },
  {
    field: 'actions',
    name: 'Actions',
    minWidth: 170,
    align: 'center'
  }
]

export const fakeDataRequest = [
  {
    req: 'abcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    status: 'loading'
  }
]

export const itemsDrop = [
  {
    key: 'edit',
    label: 'Edit'
  },
  {
    key: 'delete',
    label: 'Delete'
  }
]
