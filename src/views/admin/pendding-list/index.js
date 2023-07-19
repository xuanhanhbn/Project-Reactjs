import React, { useCallback } from 'react'
import { Breadcrumb } from 'antd'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import { Delete } from 'mdi-material-ui'
import Link from 'next/link'

import CustomTable from 'src/components/TableCommon'
import { penddingList } from './constant'

function PenddingList() {
  const breadcrumbItems = [{ href: '', title: 'Company Active' }, { title: 'Approval Pending List' }]

  // Xử lí render ra STT & actions
  const parseData = useCallback((item, field, index) => {
    if (field === 'index') {
      return index + 1
    }

    if (field === 'actions') {
      return (
        <>
          <Link
            passHref
            href={{
              pathname: '/customer-dashboard/custommer-detail',
              query: { ...item, type: 'not' }
            }}
          >
            <EyeOutline style={{ fontSize: 18, marginRight: 5 }} />
          </Link>
          {/* </Button> */}
          <Delete style={{ fontSize: 18, color: 'red' }} color='red' />
        </>
      )
    }

    return item[field]
  }, [])

  const fakeData = [{ discription: 'test', createdBy: 'test', createdDate: 'test' }]

  return (
    <div className='container'>
      <Breadcrumb items={breadcrumbItems} />
      <div className='mt-3'>
        <CustomTable
          data={fakeData || []}
          columns={penddingList}
          parseFunction={parseData}
          isShowPaging
          classNameTable='tblCampaignReport'
        />
      </div>
    </div>
  )
}

export default PenddingList
