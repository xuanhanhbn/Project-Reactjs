export const columns = [
  {
    field: 'index',
    maxWidth: 170,
    name: 'STT',
    align: 'center'

    // isSort: true,
  },
  { field: 'topicTitle', name: 'Topic Title', minWidth: 170 },
  { field: 'voices', name: 'Voices', minWidth: 100 },
  {
    field: 'post',
    name: 'Post',
    minWidth: 170
  },
  {
    field: 'lastPost',
    name: 'Last Post',
    minWidth: 170
  },
  {
    field: 'actions',
    name: 'Actions',
    minWidth: 170,
    align: 'center'
  }
]

export const listTopic = [
  {
    id: 1,
    topicTitle: 'Creative ideas to help tell your company story',
    started: {
      avatar: '/images/avatars/1686130680-bpfull.jpg',
      name: 'Joseph'
    },
    voices: 4,
    post: 43,
    lastPost: '1 month, 1 week ago'
  },
  {
    id: 2,
    topicTitle: 'Taxes and Incomes',
    started: {
      avatar: '/images/avatars/1686130680-bpfull.jpg',
      name: 'Roxy'
    },
    voices: 2,
    post: 7,
    lastPost: '1 year, 8 months ago'
  },
  {
    id: 3,
    topicTitle: 'Building a Great Team',
    started: {
      avatar: '/images/avatars/1686130680-bpfull.jpg',
      name: 'Kevin'
    },
    voices: 10,
    post: 22,
    lastPost: '1 year, 5 months ago'
  }
]

export const replyTopic = [
  {
    id: 0,
    userName: 'Jonh',
    avatar: '/images/avatars/1686130680-bpfull.jpg',
    message:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.',
    replyTime: 'January 18, 2022 at 3:04 pm'
  },
  {
    id: 1,
    userName: 'Jonh1',
    avatar: '/images/avatars/1686130680-bpfull.jpg',
    message: 'loooooooooo',
    replyTime: 'January 18, 2022 at 3:04 pm'
  },
  {
    id: 2,
    userName: 'Jonh2',
    avatar: '/images/avatars/1686130680-bpfull.jpg',
    message: 'good job',
    replyTime: 'January 18, 2022 at 3:04 pm'
  },
  {
    id: 3,
    userName: 'Jonh3',
    avatar: '/images/avatars/1686130680-bpfull.jpg',
    message: 'aaaaaaaaaaaa',
    replyTime: 'January 18, 2022 at 3:04 pm'
  },
  {
    id: 4,
    userName: 'Jonh4',
    avatar: '/images/avatars/1686130680-bpfull.jpg',
    message: '.',
    replyTime: 'January 18, 2022 at 3:04 pm'
  },
  {
    id: 5,
    userName: 'Jonh5',
    avatar: '/images/avatars/1686130680-bpfull.jpg',
    message: '!!!!!!!!!!!!!!',
    replyTime: 'January 18, 2022 at 3:04 pm'
  }
]
