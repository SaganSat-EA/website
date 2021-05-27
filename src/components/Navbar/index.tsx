import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
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
          <Scroll
            to='awards' 
            smooth={true}
            duration={1000}
            spy={true}
            exact='true'
            offset={-80}
          >
            <MenuLink>Sobre a equipe</MenuLink>
          </Scroll>

          <Link href={'/pesquisa'}>
            <MenuLink href="/">Sobre a pesquisa</MenuLink>
          </Link>

          <Link href={'/ajuda'}>
            <MenuLink href="/">Como você pode ajudar?</MenuLink>
          </Link>
        </Menu>
      </NavContent>
    </Nav>
  )
}