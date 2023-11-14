import { HeaderContainer } from './styles'
import Banner from './../../assets/cover.png'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Banner} alt="" />
    </HeaderContainer>
  )
}
