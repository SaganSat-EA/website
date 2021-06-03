import Image from 'next/image'

import { Container, Description } from './styles'

export function AlternativeRoutesCard() {
  return (
    <Container>
      <Image 
        width={1200}
        height={700}
        src='/routes.jpg'
        objectFit='fill'
      />

      <hr />

      <Description>
        <h2>Rotas Alternativas</h2>

        <span>
          O SaganSat auxilia nas rotas comerciais de aeronaves monitorando a emissão de plumas vulcânicas e enviando avisos e sugestões de rotas alternativas para as companhias aéreas.
          <a href='/research'>
            Acesse aqui para saber mais sobre a pesquisa.
          </a>
        </span>
      </Description>
    </Container>
  )
}