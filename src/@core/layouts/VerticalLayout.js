// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Components
import AppBar from './components/vertical/appBar'
import Navigation from './components/vertical/navigation'
import Footer from './components/shared-components/footer'
import ScrollToTop from 'src/@core/components/scroll-to-top'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { makeSelectLogin } from 'src/pages/pages/login/loginSlice'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const VerticalLayout = props => {
  // ** Props
  const { settings, children, scrollToTop, verticalNavItems } = props

  const getDataGetMe = useSelector(makeSelectLogin)
  const dataUser = getDataGetMe?.dataUser
  const roleUser = dataUser?.roles

  const [login, setLogin] = useState()

  // ** Vars
  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize

  // ** States
  const [navVisible, setNavVisible] = useState(false)

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  useEffect(() => {
    const dataLoginPage = JSON.parse(localStorage.getItem('loginPage'))
    setLogin(dataLoginPage)
  }, [])

  const handleCheckRole = verticalNavItems.map(item => {
    const role = roleUser?.some(value => item?.role?.includes(value))

    return role
  })

  return (
    <>
      <VerticalLayoutWrapper className='layout-wrapper'>
        {login && (
          <>
            <Navigation
              navWidth={navWidth}
              navVisible={navVisible}
              setNavVisible={setNavVisible}
              toggleNavVisibility={toggleNavVisibility}
              {...props}
            />
            <MainContentWrapper className='layout-content-wrapper'>
              <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />

              <ContentWrapper
                className='layout-page-content'
                sx={{
                  ...(contentWidth === 'boxed' && {
                    mx: 'auto',
                    '@media (min-width:1440px)': { maxWidth: 1440 },
                    '@media (min-width:1200px)': { maxWidth: '100%' }
                  })
                }}
              >
                {children}
              </ContentWrapper>

              <Footer {...props} />

              <DatePickerWrapper sx={{ zIndex: 11 }}>
                <Box id='react-datepicker-portal' />
              </DatePickerWrapper>
            </MainContentWrapper>
          </>
        )}
      </VerticalLayoutWrapper>
      {!login && (
        <Box
          className='app-content d-flex justify-content-center align-items-center'
          sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
        >
          <Typography>Plesae Login</Typography>
        </Box>
      )}
      {!login && handleCheckRole?.filter(roles => roles === false) && (
        <Box
          className='app-content d-flex justify-content-center align-items-center'
          sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
        >
          <Typography>ccc</Typography>
        </Box>
      )}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  )
}

export default VerticalLayout
