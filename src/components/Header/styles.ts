import styled from 'styled-components'
import { lighten, transparentize } from 'polished'

export const Container = styled.header`
  display: inline-block;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000000 100%), url('https://i.imgur.com/ahYRGLZ.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
`

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

  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

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
    color: ${lighten(0.4, '#6c757d')};
  }
`

export const HeaderContainer = styled.div`
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;

  h1 {
    font-size: 5rem;
    letter-spacing: 1rem;
    font-weight: 550;

    background-color: var(--dark);
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    transition: all 0.4s ease;

    @media (max-width: 860px) {
      font-size: 3rem;
    }
  }

  h3 {
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 4rem;

    color: rgba(255, 255, 255, 0.8);

    transition: all 0.4s ease;

    @media (max-width: 860px) {
      font-size: 0.8rem;
    }
  }
`

export const Button = styled.button`
  width: 200px;
  padding: 1.3rem;
  background: ${transparentize(0.2, '#64a19d')};

  border: 0;
  border-radius: 8px;

  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15rem;

    color: var(--light);
  }
`