import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 4rem;
  background: linear-gradient(45deg, #131f34, #060a11);
  display: flex;
  align-items: center;
  padding: 0 2.5rem;

  & a {
    text-decoration: none;
  }
`

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.gray};
  font-family: 'Cinzel', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
`
export const HeaderNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 3rem;

  & a {
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.gray};
    font-size: 1.2rem;
  }
`
