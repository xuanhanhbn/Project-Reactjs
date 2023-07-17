// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

import {
  AccountGroupOutline,
  FileDocument,
  SwapHorizontal,
  AccountBoxMultipleOutline,
  ForumOutline,
  FileDocumentMultipleOutline
} from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/admin/dashboard',
      isShowMenu: true,
      role: ['Admin']
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings',
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      sectionTitle: 'Customer',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },

    // {
    //   title: 'Account Staff',
    //   icon: AccountGroupOutline,
    //   path: 'account-staffs',
    //   isShowMenu: true,
    //   role: ['Admin', 'Manager', 'EMPOYLEE']
    // },
    {
      title: 'Customer',
      icon: AccountCogOutline,
      path: '/customer-dashboard',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      sectionTitle: 'Marketing Department',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      title: 'Forums',
      icon: SwapHorizontal,
      path: '/marketing-department/forums',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      title: 'Members',
      icon: AccountBoxMultipleOutline,
      path: '/marketing-department/members',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      title: 'Messages',
      icon: ForumOutline,
      path: '/marketing-department/messages',
      isShowMenu: false,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      title: 'Documents',
      icon: FileDocumentMultipleOutline,
      path: '/marketing-department/documents',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },

    // {
    //   sectionTitle: 'User Interface',
    //   isShowMenu: true
    // },
    // {
    //   title: 'Create User',
    //   icon: Login,
    //   path: '/admin/create-account',
    //   isShowMenu: true
    // },
    {
      sectionTitle: 'Transactions',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      title: 'Transactions',
      icon: FileDocumentMultipleOutline,
      path: '/transactions',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE'],
      disabled: true
    },

    // Document
    {
      sectionTitle: 'Documents',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      title: 'Documents',
      icon: FileDocument,
      path: '/admin/list-documents',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      sectionTitle: 'Customer Care',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      icon: CreditCardOutline,
      title: 'Customer Care',
      path: '/customer-care',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },
    {
      title: 'Forgot Password',
      icon: Login,
      path: '/pages/forgot-password',
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },

    {
      sectionTitle: 'User Interface',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },

    {
      icon: Table,
      title: 'Staff',
      path: '/staff',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    },

    // {
    //   sectionTitle: 'Feedback',
    //   isShowMenu: true,
    //   role: ['Admin', 'Manager', 'EMPOYLEE']
    // }

    {
      icon: CubeOutline,
      title: 'FeedBack',
      path: '/feedback',
      isShowMenu: true,
      role: ['Admin', 'Manager', 'EMPOYLEE']
    }
  ]
}

export default navigation
