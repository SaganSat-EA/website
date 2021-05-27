import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

import {
  NavContainer, 
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
    <NavContainer navBackground={navBackground}>
      <NavContent>
        <Logo>
          <h1>
            SaganSat
          </h1>
        </Logo>
        <Hamburguer onClick={() => setHamburguerIsOpen(!hamburguerIsOpen)}>
          <FiMenu size={30} />
        </Hamburguer>
        <Menu isOpen={hamburguerIsOpen}>
          <MenuLink
            to='home' 
            smooth={true}
            duration={1000}
            spy={true}
            exact='true'
            offset={-80}
            activeClass='active'
          >
            Sobre a equipe
          </MenuLink>

          <Link href={'/pesquisa'}>
            <MenuLink>Sobre a pesquisa</MenuLink>
          </Link>

          <Link href={'/ajuda'}>
            <MenuLink>Como você pode ajudar?</MenuLink>
          </Link>
        </Menu>
      </NavContent>
    </NavContainer>
  )
}