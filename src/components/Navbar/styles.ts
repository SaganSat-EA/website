import styled from 'styled-components'

import { lighten } from 'polished'

interface NavProps {
  navBackground: string
}

export const Nav = styled.nav<NavProps>`
  background: ${({navBackground}) => 
    navBackground == 'backgroundTransparent' 
      ? 'rgba(0, 0, 0, 0)' 
      : 'var(--light)'
  };

  color: ${({navBackground}) => 
    navBackground == 'backgroundTransparent' 
      ? `${lighten(0.3, '#6c757d')}`
      : 'var(--black)'
  };

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  transition: all 0.5s ease;

  @media (max-width: 860px) {
    background: var(--light);
    color: var(--black);
  }
`

export const NavContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1.7rem 1rem;
`

export const Logo = styled.a`
  font-size: 0.8rem;
  padding-left: 2rem;
`

export const Hamburguer = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 860px) {
    padding-right: 2rem;
    display: flex;
  }

  &:hover {
    color: ${lighten(0.1, '#6c757d')};
  }
`

interface MenuProps {
  isOpen: boolean
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  list-style-type: none;

  @media (max-width: 860px) {
    width: 100%;
    overflow: hidden;
    flex-direction: column;

    max-height: ${({isOpen}) => (isOpen ? '300px' : '0')};
    margin-top: ${({isOpen}) => (isOpen ? '1.5rem' : '0')};

    transition: all 0.4s ease;
  }
`

export const MenuLink = styled.a`
  padding: 0 2rem;
  font-weight: 500;

  @media (max-width: 860px) {
    padding: 0.5rem 2rem;
  }

  &:hover {
    color: ${lighten(0.1, '#6c757d')};
  }
`