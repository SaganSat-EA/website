import Image from 'next/image'

import { 
  Container, 
  Content, 
  AlternativeRoutesCard,
  AlternativeRoutesDescription
} from './styles'

export function Projects() {
  return(
    <Container>
      <Content>
        <AlternativeRoutesCard>
          <Image 
            width={820}
            height={700}
            src='/routes.jpg'
            objectFit='cover'
          />
          <AlternativeRoutesDescription>
            <h2>Rotas Alternativas</h2>

            <span>
              No futuro, quando o SaganSat encontrar algum problema nas rotas comerciais das aeronaves, serão enviados avisos e sugestões de rotas alternativas pelo site!
            </span>
          </AlternativeRoutesDescription>
        </AlternativeRoutesCard>
      </Content>
    </Container>
  )
}