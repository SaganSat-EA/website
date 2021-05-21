import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import { 
  Container, 
  Content, 
  Logo, 
  Hamburguer, 
  Menu, 
  MenuLink 
} from './styles'

export function Header() {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)
  const [headerBackground, setHeaderBackground] = useState('backgroundTransparent')

  useEffect(function mount() {
    function handleScroll() {
      if(window.scrollY >= 150) {
        setHeaderBackground('backgroundSolid')
      } else {
        setHeaderBackground('backgroundTransparent')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return function unMount() {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Container headerBackground={headerBackground}>
      <Content>
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
      </Content>
    </Container>
  )
}