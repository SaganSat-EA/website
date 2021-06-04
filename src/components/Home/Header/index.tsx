import { Link as Scroll } from 'react-scroll'

import {
  Container,
  HeaderContainer,
  HeaderContent,
  Button
} from './styles'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <h1>SAGANSAT-EA</h1>
          <h3>Um nano satélite brasileiro com uma missão em todo o mundo.</h3>

          <Scroll
            to='home' 
            smooth={true}
            duration={1000}
            spy={true}
            exact='true'
            offset={-80}
          >
            <Button>
              <span>SAIBA MAIS</span>
            </Button>
          </Scroll>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  )
}