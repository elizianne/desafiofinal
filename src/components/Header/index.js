import React from 'react';
import Menu from './components/Menu';
import { Logo, Container, Top } from './styles';

import Cart from './components/Cart';

const Header = () => (
  <Container>
    <Top>
      <Logo>Book Friend</Logo>
      <Cart />
    </Top>
    <Menu />
  </Container>
);

export default Header;
