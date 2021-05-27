import styled from 'styled-components'
import { Link as Scroll } from 'react-scroll'
import { lighten } from 'polished'

interface NavProps {
  navBackground: 'backgroundTransparent' | 'backgroundSolid'
}

interface MenuProps {
  isOpen: boolean
}

export const NavContainer = styled.nav<NavProps>`
  background: ${({navBackground}) => 
    navBackground == 'backgroundTransparent' 
      ? 'rgba(0, 0, 0, 0)' 
      : 'var(--light)'
  };

  color: ${({navBackground}) => 
    navBackground == 'backgroundTransparent' 
      ? `${lighten(0.4, '#6c757d')}`
      : 'var(--black)'
  };

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

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
  padding: 0 1rem;
`

export const Logo = styled.a`
  font-size: 0.8rem;
  padding: 1.7rem 2rem;
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

export const Menu = styled.div<MenuProps>`
  display: flex;
  list-style-type: none;

  a.active {
    color: var(--primary);
    border-bottom: 5px solid var(--primary);

    cursor: default;
  }

  @media (max-width: 860px) {
    width: 100%;
    overflow: hidden;
    flex-direction: column;

    max-height: ${({isOpen}) => (isOpen ? '300px' : '0')};
    margin-top: ${({isOpen}) => (isOpen ? '1.5rem' : '0')};

    transition: all 0.4s ease;

    a.active {
      border: 0;
    }
  }
`

export const MenuLink = styled(Scroll)`
  height: 100%;
  padding: 1.7rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${lighten(0.1, '#64a19d')};
  }

  @media (max-width: 860px) {
    justify-content: flex-start;
    padding: 1rem 2rem;
    width: 40%;

    &:hover {
      color: var(--primary);
    }
  }
`