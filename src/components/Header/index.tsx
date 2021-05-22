import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import {
  Container,
  Nav, 
  NavContent, 
  Logo, 
  Hamburguer, 
  Menu, 
  MenuLink,
  HeaderContainer,
  HeaderContent,
  Button
} from './styles'

export function Header() {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)
  const [navBackground, setnavBackground] = useState('backgroundTransparent')

  useEffect(function mount() {
    function handleScroll() {
      if(window.scrollY >= 90) {
        setnavBackground('backgroundSolid')
      } else {
        setnavBackground('backgroundTransparent')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return function unMount() {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Container>
      <Nav navBackground={navBackground}>
        <NavContent>
          <Logo href="/">
            <h1>
              SaganSat
            </h1>
          </Logo>
          <Hamburguer onClick={() => setHamburguerIsOpen(!hamburguerIsOpen)}>
            <FiMenu size={30} />
          </Hamburguer>
          <Menu isOpen={hamburguerIsOpen}>
            <MenuLink href="/">Sobre a equipe</MenuLink>
            <MenuLink href="/">Sobre a pesquisa</MenuLink>
            <MenuLink href="/">Como você pode ajudar?</MenuLink>
          </Menu>
        </NavContent>
      </Nav>
      <HeaderContainer>
        <HeaderContent>
          <h1>SAGANSAT-EA</h1>
          <h3>Um nano satélite brasileiro com uma missão em todo o mundo.</h3>

          <Button>
            <span>SAIBA MAIS</span>
          </Button>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  )
}