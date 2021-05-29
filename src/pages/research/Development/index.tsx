import Image from 'next/image'

import { Container, Content, Grid, Card } from './styles'

export function Development() {
  return (
    <Container>
      <Content>
        <h1>Desenvolvimento</h1>

        <span>
          De forma geral, nosso satélite pode ser dividido em 6 partes:
        </span>
        <Grid>
          <Card
            target='_blank'
            href='https://github.com/SaganSat-EA/obdh'
          >
            <Image 
              width={600}
              height={600}
              src='/obdh.png'
              alt="OBDH"
              objectFit='contain'
            />
            
            <h3>
              OBDH
            </h3>

            <p>
              Computador de bordo do satélite responsável por processar todas as informações geradas pela câmera.
            </p>
          </Card>

          <Card
            target='_blank'
            href='https://github.com/SaganSat-EA/ttc'
          >
            <Image 
              width={600}
              height={600}
              src='/ttec.png'
              alt="TT&C"
              objectFit='contain'
            />

            <h3>TT&C</h3>

            <p>
              Responsável por realizar a comunicação com a base terrestre.
            </p>
          </Card>

          <Card>
            <Image 
              width={600}
              height={600}
              src='/camera.png'
              alt="Câmera"
              objectFit='contain'
            />

            <h3>Câmera</h3>

            <p>
              Responsável pela captura de imagens.
            </p>
          </Card>

          <Card>
            <Image 
              width={600}
              height={600}
              src='/circuit.jpg'
              alt="ADCS"
              objectFit='contain'
            />

            <h3>ADCS</h3>

            <p>
              Responsável pelo controle de altitude.
            </p>
          </Card>

          <Card>
            <Image 
              width={600}
              height={600}
              src='/circuit.jpg'
              alt="PMAD"
              objectFit='contain'
            />

            <h3>PMAD</h3>

            <p>
              Responsável pelo gerenciamento da energia solar captada  através das placas fotovoltaicas, carregar as baterias e distribuir pelo satélite.
            </p>
          </Card>

          <Card>
            <Image 
              width={800}
              height={800}
              src='/cubesat.png'
              alt="Estrutura"
              objectFit='contain'
            />

            <h3>Estrutura</h3>

            <p>
              Responsável pela captura de imagens.
            </p>
          </Card>
        </Grid>
        <span>
          As etapas planejadas estão disponíveis em nosso <a>Roadmap</a> e você pode acompanhar o desenvolvimento em nosso <a target='_blank' href='https://github.com/SaganSat-EA'>Github</a>.
        </span>
      </Content>
    </Container>
  )
}