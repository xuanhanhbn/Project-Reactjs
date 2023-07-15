import { Breadcrumb } from 'antd'
import Link from 'next/link'
import React from 'react'

function TransactionDetails() {
  return (
    <div>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item>
          <Link href='/admin/dashboard'>Company Active</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href='/transactions'>Transactions</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Transaction Details</Breadcrumb.Item>
      </Breadcrumb>

      
    </div>
  )
}

export default TransactionDetails
