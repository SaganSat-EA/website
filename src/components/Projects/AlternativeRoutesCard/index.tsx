import Image from 'next/image'

import { Container, Description } from './styles'

export function AlternativeRoutesCard() {
  return (
    <Container>
      <Image 
        width={820}
        height={700}
        src='/routes.jpg'
        objectFit='cover'
      />
      <Description>
        <h2>Rotas Alternativas</h2>

        <span>
          No futuro, quando o SaganSat encontrar algum problema nas rotas comerciais das aeronaves, serão enviados avisos e sugestões de rotas alternativas pelo site!
        </span>
      </Description>
    </Container>
  )
}