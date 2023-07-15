// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import FaceAgent from 'mdi-material-ui/FaceAgent'

import {
  AccountGroupOutline,
  FileDocument,
  SwapHorizontal,
  AccountBoxMultipleOutline,
  ForumOutline,
  FileDocumentMultipleOutline
} from 'mdi-material-ui'
import { flip } from '@popperjs/core'

//  ** Components imports
import ListDocument from 'src/views/admin/documents'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/admin/dashboard',
      isShowMenu: true
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Customer',
      isShowMenu: true
    },
    {
      title: 'Account Staff',
      icon: AccountGroupOutline,
      path: 'account-staffs',
      isShowMenu: true
    },
    {
      title: 'Customer',
      icon: AccountCogOutline,
      path: '/customer-dashboard',
      isShowMenu: true
    },
    {
      sectionTitle: 'Marketing Department',
      isShowMenu: true
    },
    {
      title: 'Forums',
      icon: SwapHorizontal,
      path: '/marketing-department/forums',
      isShowMenu: true
    },
    {
      title: 'Members',
      icon: AccountBoxMultipleOutline,
      path: '/marketing-department/members',
      isShowMenu: true
    },
    {
      title: 'Messages',
      icon: ForumOutline,
      path: '/marketing-department/messages',
      isShowMenu: false
    },
    {
      title: 'Documents',
      icon: FileDocumentMultipleOutline,
      path: '/marketing-department/documents',
      isShowMenu: true
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
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
      isShowMenu: true
    },
    {
      title: 'Transactions',
      icon: Login,
      path: '/transactions',
      isShowMenu: true
    },

    // Document
    {
      sectionTitle: 'Documents',
      isShowMenu: true
    },
    {
      title: 'Documents',
      icon: FileDocument,
      path: '/admin/list-documents',
      isShowMenu: true
    },
    {
      sectionTitle: 'Customer Care',
      isShowMenu: true
    },
    {
      icon: CreditCardOutline,
      title: 'Customer Care',
      path: '/customer-care',
      isShowMenu: true
    },
    {
      title: 'Forgot Password',
      icon: Login,
      path: '/pages/forgot-password'
    },

    {
      sectionTitle: 'User Interface',
      isShowMenu: true
    },

    {
      icon: Table,
      title: 'Staff',
      path: '/staff',
      isShowMenu: true
    },

    {
      icon: CreditCardOutline,
      title: 'customer-care',
      path: '/customer-care',
      isShowMenu: true
    },
    {
      sectionTitle: 'Feedback',
      isShowMenu: true
    },
    {
      icon: CubeOutline,
      title: 'FeedBack',
      path: '/feedback',
      isShowMenu: true
    },
    {
      icon: CreditCardOutline,
      title: 'File',
      path: '/filemanager',
      isShowMenu: true

      // path: '/form-layouts',
      // isShowMenu: true
    },
    {
      icon: CreditCardOutline,
      title: 'customer-care',
      path: '/customer-care',
      isShowMenu: true
    }
  ]
}

export default navigation
