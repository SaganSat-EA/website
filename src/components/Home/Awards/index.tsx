import { Container, Content, Description } from './styles'

export function Awards() {
  return (
    <Container>
      <Content>
        <h2>
          2º lugar na Olimpíada Brasileira De Satélites
        </h2>

        <Description>
          <span>
            Em 2020, nosso CubeSat foi o 2º colocado na primeira edição da OBSAT. Foi uma grande satisfação receber esse reconhecimento e começar a ver o fruto da evolução da nossa pesquisa. Essa premiação mostra que a equipe está no rumo certo para concluir a missão e que somos capazes de alcançar novas altitudes.
          </span>
          <a
            target='_blank'
            href='https://obsat.org.br/snct2020/rank_17snct.html'
          >
            Acesse aqui o resultado da OBSAT.
          </a>
        </Description>

        <img src="/nanosat.png" alt="NanoSat" />
      </Content>
    </Container>
  )
}