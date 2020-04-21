import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  activePage: 'import' | 'dashboard';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  activePage,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          activeClassName="current"
        >
          Listagem
        </NavLink>

        <NavLink
          to="/import"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          activeClassName="current"
        >
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
