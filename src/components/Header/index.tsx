import { Container, Content, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo href="/">
          <h1>
            SaganSat
          </h1>
        </Logo>
        <ul>
          <li>
            <a href="/">Sobre a equipe</a>
          </li>
          <li>
            <a href="/">Sobre a pesquisa</a>
          </li>
          <li>
            <a href="/">Como você pode ajudar?</a>
          </li>
        </ul>
      </Content>
    </Container>
  )
}