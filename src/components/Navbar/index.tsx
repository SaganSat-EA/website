import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import {
  Nav, 
  NavContent, 
  Logo, 
  Hamburguer, 
  Menu, 
  MenuLink
} from './styles'

type NavBackground = 'backgroundTransparent' | 'backgroundSolid'

export function Navbar() {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)
  const [navBackground, setnavBackground] = useState<NavBackground>('backgroundTransparent')

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
  )
}