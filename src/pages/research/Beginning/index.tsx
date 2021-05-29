import { Container, Content } from './style'

export function Beginning({id}) {
  return (
    <Container id={id}>
      <Content>
        <h1>Como tudo começou</h1>

        <p>
          O SaganSat foi idealizado e iniciado por amigos universitários que possuem em comum um grande interesse por ciência e tecnologia. A equipe sempre estudou e participou de outras pesquisas e iniciativas na faculdade, mas o espaço estava presente apenas nas discussões cotidianas sobre os avanços da área e o que ainda está por vir.
        </p>

        <p>
          Em uma discussão no ano de 2019, surgiu a ideia de uma pesquisa e desenvolvimento de um CubeSat, tema que foi tomando forma conforme estudaremos mais sobre. Procuramos orientação dos nossos professores e vimos uma oportunidade de nos prepararmos para nossas futuras carreiras. O primeiro passo foi dado quando nosso orientador e amigo se uniu conosco nesta aventura.
        </p>

        <p>
          A equipe já havia trabalhado junto na competição de aerodesign e por meio deste surgiu nossa missão. O nome da equipe foi escolhido em homenagem a Carl Sagan.
        </p>
      </Content>
    </Container>
  )
}