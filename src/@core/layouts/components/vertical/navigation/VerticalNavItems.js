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
  // ** Props
  const { verticalNavItems } = props

  const RenderMenuItems = verticalNavItems?.map((item, index) => {
    if (item.isShowMenu) {
      const TagName = resolveNavItemComponent(item)

      return <TagName {...props} key={index} item={item} />
    }
  })

  return <>{RenderMenuItems}</>
}

export default VerticalNavItems
