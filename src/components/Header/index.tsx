import { NavLink } from 'react-router-dom'
import { HeaderContainer, HeaderNav, HeaderTitle } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <HeaderTitle>Affectus Ψ</HeaderTitle>
      </NavLink>
      <HeaderNav>
        <NavLink to="/sobre" title="Sobre">
          Sobre
        </NavLink>
        <NavLink to="/contato" title="Contato">
          Contato
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
