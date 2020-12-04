import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
    background: black;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const NavList = styled.ul`
  display: flex;
`

const NavListItem = styled.li`
  list-style-type: none;

  & ~ & {
    margin-left: 10px;
  }
`

export default function Navbar() {
  return (
    <Nav>
      <h1>
        <StyledLink to="/">
          My blog
        </StyledLink>
      </h1>
      <NavList>
        <NavListItem>
          <StyledLink to="/posts">
            文章列表
          </StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/addpost">
            新增文章
          </StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/logout">
            登出
          </StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/login">
            登入
          </StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/register">
            註冊
          </StyledLink>
        </NavListItem>
      </NavList>
    </Nav>
  )
}