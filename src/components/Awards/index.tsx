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
            No ano de 2020 o nosso CubeSat foi o 2º colocado na primeira edição da OBSAT. Tal colocação é fruto da evolução de nossas pesquisas e é apenas uma amostra do SaganSat.
          </span>
          <a href=''>Acesse aqui o resultado da OBSAT.</a>
        </Description>

        <img src="/nanosat.png" alt="NanoSat" />
      </Content>
    </Container>
  )
}