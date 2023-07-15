// ** Custom Menu Components
import { useSelector } from 'react-redux'
import VerticalNavLink from './VerticalNavLink'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'
import { makeSelectLogin } from 'src/pages/pages/login/loginSlice'

const resolveNavItemComponent = item => {
  if (item.sectionTitle) return VerticalNavSectionTitle

  return VerticalNavLink
}

const VerticalNavItems = props => {
  const getDataGetMe = useSelector(makeSelectLogin)
  const dataUser = getDataGetMe?.dataUser
  const roleUser = dataUser?.roles

  // ** Props
  const { verticalNavItems } = props

  const RenderMenuItems = verticalNavItems?.map((item, index) => {
    const role = roleUser?.some(value => item?.role?.includes(value))

    if (item.isShowMenu && role) {
      const TagName = resolveNavItemComponent(item)

      return <TagName {...props} key={index} item={item} />
    }
  })

  return <>{RenderMenuItems}</>
}

export default VerticalNavItems
