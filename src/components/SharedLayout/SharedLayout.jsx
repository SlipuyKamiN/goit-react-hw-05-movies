import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  NavList,
  NavigationLink,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/movies">Movies</NavigationLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
