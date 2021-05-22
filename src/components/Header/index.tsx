import { Navbar } from '../Navbar'

import {
  Container,
  HeaderContainer,
  HeaderContent,
  Button
} from './styles'

export function Header() {
  return (
    <Container>
      <Navbar />
      
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