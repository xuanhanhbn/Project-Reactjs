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
            },
        ]
    }
}

export const rows = [
    createData('Phòng Nhân Sự', 159, 6.0, 'Xuất Sắc'),
    createData('Phòng Kế Toán', 237, 9.0, 'Trung Bình'),
    createData('Phòng Kinh Tế', 262, 16.0, 'Yếu'),
]