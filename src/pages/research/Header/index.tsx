import { Container, HeaderContainer, HeaderContent, Button } from './style'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <h1>Nossa missão</h1>

          <p> 
            Desenvolver um CubeSat capaz de monitorar a emissão de plumas vulcânicas e notificar os orgões e empresas responsáveis por rotas comerciais de aeronaves no intuito de evitar possíveis acidentes.
          </p>

          <Button>
            <span>SAIBA MAIS</span>
          </Button>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  )
}