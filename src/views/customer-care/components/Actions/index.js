import React, { useState } from 'react'
import { Dropdown, Space } from 'antd'
import { Button } from '@mui/material'
import { AccountOutline, Delete, DotsHorizontal, EyeOutline } from 'mdi-material-ui'
import Link from 'next/link'
import CustommerSeveviceStaff from '../MenuStatus/CustomerServiceStaff'

const view = <Link href=''>View</Link>

function Actions(props) {
  const { role } = props
  let items = []
  if (role === 'admin') {
    items = [
      {
        key: 'view',
        label: view,
        icon: <EyeOutline />
      },
      {
        key: 'delete',
        label: 'Delete',
        icon: <Delete />
      },
      {
        key: 'processingStaff',
        label: 'Processing staff',
        icon: <AccountOutline />
      },
      {
        key: 'status',
        label: 'Status',
        children: [
          {
            key: 'notProcessed',
            label: 'Not Processed'
          },
          {
            key: 'inProcessed',
            label: 'In Processed'
          },
          {
            key: 'processed',
            label: 'Processed'
          }
        ]
      }
    ]
  }

  if (role === 'employee') {
    items = [
      {
        key: 'view',
        label: view,
        icon: <EyeOutline />
      },
      {
        key: 'delete',
        label: 'Delete',
        icon: <Delete />
      },
      {
        key: 'status',
        label: 'Status',
        children: [
          {
            key: 'notProcessed',
            label: 'Not Processed'
          },
          {
            key: 'inProcessed',
            label: 'In Processed'
          },
          {
            key: 'processed',
            label: 'Processed'
          }
        ]
      }
    ]
  }

  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleDropdownItemClick = e => {
    if (e.key === 'delete') {
      console.log(e.key)
    }

    if (e.key === 'notProcessed') {
      console.log(e.key)
    }

    if (e.key === 'processed') {
      console.log(e.key)
    }

    if (e.key === 'inProcessed') {
      console.log(e.key)
    }

    if (e.key === 'processingStaff') {
      handleOpenModal()
    }
  }

  // Xử lí mở modal
  const handleOpenModal = () => setIsOpenModal(true)

  // Xử lí đóng modal
  const handleCloseModal = () => setIsOpenModal(false)

  return (
    <>
      <Dropdown
        menu={{
          onClick: handleDropdownItemClick,
          items
        }}
      >
        <Button variant='outline'>
          <Space>
            <DotsHorizontal />
          </Space>
        </Button>
      </Dropdown>
      {isOpenModal && (
        <CustommerSeveviceStaff
          onOpen={isOpenModal}
          onClose={() => handleCloseModal()}
          title='Send request'
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          style={{ minWidth: 340 }}
        />
      )}
    </>
  )
}

export default Actions
