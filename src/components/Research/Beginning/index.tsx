import { Container, Content } from './style'

export function Beginning({ id }) {
  return (
    <Container id={id}>
      <Content>
        <h1>Como tudo começou</h1>
        
        <p>
          O SaganSat foi idealizado e iniciado por amigos universitários que possuem em comum uma grande paixão por ciência e tecnologia. A equipe sempre estudou e participou de outras pesquisas e iniciativas, mas o espaço estava presente apenas nas discussões cotidianas sobre os avanços da área e o que ainda está por vir.
        </p>

        <p>
          A ideia de uma pesquisa e desenvolvimento de um CubeSat sempre nos rodeou, até que em 2020, surgiu a primeira olimpíada brasileira de satélites. Vimos nessa competição, a oportunidade de expandir nossos conhecimentos, nos prepararmos para nossas futuras carreiras e contribuir para o desenvolvimento na área no país. 
        </p>

        <p>
          O primeiro passo foi dado quando nosso orientador e amigo completou nossa equipe e então embarcamos nesta aventura. A equipe utilizou os conhecimentos adquiridos durante as competições de aerodesign para definir nossa missão e nomeamos a equipe em homenagem a Carl Sagan.
        </p>
      </Content>
    </Container>
  )
}