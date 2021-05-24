import Image from 'next/image'

import { Container, Card, CardContent } from './styles'

export function ProjectTypesCard() {
  return(
    <Container>
      <Image 
        width={820}
        height={500}
        src='/hardware.jpg'
        objectFit='fill'
      />
      <Card>
        <CardContent alignItems='left'>
          <h2>
            Projeto aberto
          </h2>

          <span>
            Nosso projeto estará disponível no github quando finalizado, fique de olho e não deixe de acessar!
          </span>

          <hr />
        </CardContent>
      </Card>
      <Card>
        <CardContent alignItems='right'>
          <h2>
            Inteligência artificial
          </h2>

          <span>
            Nosso satélite conta com inteligência artifical para o pós-processamento da imagem.
          </span>

          <hr />
        </CardContent>
      </Card>
      <Image 
        width={820}
        height={500}
        src='/ia.jpg'
        objectFit='fill'
      />
    </Container>
  )
}