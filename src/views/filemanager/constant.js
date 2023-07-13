const createData = (name, author, dateissue, dateaction, datefinish) => {
    return { name, author, dateissue, dateaction, datefinish }
}

export const rows = [
    createData('Quản lí sơ bộ ', 'Giám đốc điều hành', '21/2/2023', '25/2/2023', '30/2/2023'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
]