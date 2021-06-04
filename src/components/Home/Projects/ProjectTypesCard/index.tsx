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
            Projeto Open-source
          </h2>

          <span>
            Nosso projeto está disponível em nosso Github pois acreditamos que dessa maneira contribuímos em novos projetos e pesquisas em nosso país e no mundo inteiro.
            <a
              target='_blank'
              href='https://github.com/SaganSat-EA'
            >
              Acesse a organização.
            </a>
          </span>

          <hr />
        </CardContent>
      </Card>
      <Card>
        <CardContent alignItems='right'>
          <h2>
            Inteligência Artificial
          </h2>

          <span>
            Nosso satélite utiliza inteligência artificial, um dos pilares que guiam o nosso desenvolvimento.
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