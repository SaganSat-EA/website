import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()

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
        <Logo 
          to='main' 
          smooth={true}
          duration={1000}
          spy={false}
          exact='true'
          offset={-80}
        >
          <h1>
            SaganSat
          </h1>
        </Logo>
        <Hamburguer onClick={() => setHamburguerIsOpen(!hamburguerIsOpen)}>
          <FiMenu size={30} />
        </Hamburguer>
        <Menu isOpen={hamburguerIsOpen}>
          <Link href={'/'}>
            <MenuLink
              to='home' 
              smooth={true}
              duration={1000}
              spy={true}
              exact='true'
              offset={-80}
              activeClass={router.pathname === '/' ? 'active' : 'disable'}
            >
              Sobre a equipe
            </MenuLink>
          </Link>

          <Link href={'/research'}>
            <MenuLink
              to='research' 
              smooth={true}
              duration={1000}
              spy={true}
              exact='true'
              offset={-80}
              activeClass={router.pathname === '/research' ? 'active' : 'disable'}
            >
              Sobre a pesquisa
            </MenuLink>
          </Link>

          <Link href={'/help'}>
            <MenuLink
              to='help' 
              smooth={true}
              duration={1000}
              spy={true}
              exact='true'
              offset={-80}
              activeClass={router.pathname === '/help' ? 'active' : 'disable'}
            >Como você pode ajudar?</MenuLink>
          </Link>
        </Menu>
      </NavContent>
    </NavContainer>
  )
}