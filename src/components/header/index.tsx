import headerImg from '../../assets/headerImg.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerImg} alt="" />
    </HeaderContainer>
  )
}
