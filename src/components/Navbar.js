import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../context';

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
  const history = useHistory();
  
  const handleLogOut = () => {
    window.localStorage.removeItem('token');
    setUser(null);
    if (history[history.length - 1] !== '/') {
      history.push('/');
    }
  }

  const {user, setUser} = useContext(UserContext);

  return (
    <Nav>
      <h1>
        <StyledLink to="/">
          My blog
        </StyledLink>
      </h1>
      <NavList>
        <NavListItem>
          {console.log(user)}
          <span><b>{user ? user.data.nickname : ''}</b></span>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/posts">
            文章列表
          </StyledLink>
        </NavListItem>
        
        { user && <NavListItem>
          <StyledLink to="/addpost">
            新增文章
          </StyledLink>
        </NavListItem>}
        { user && <NavListItem>
          <StyledLink to="/" onClick={handleLogOut}>
            登出
          </StyledLink>
        </NavListItem>}
        {!user && <NavListItem>
          <StyledLink to="/login">
            登入
          </StyledLink>
        </NavListItem>}
        {!user && <NavListItem>
          <StyledLink to="/register">
            註冊
          </StyledLink>
        </NavListItem>}
      </NavList>
    </Nav>
  )
}