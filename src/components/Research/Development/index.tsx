import { Card } from './Card'

import { Container, Content, Grid } from './styles'

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
            link='https://github.com/SaganSat-EA/obdh'
            imageSrc='/obdh.png'
            title='OBDH'
            description='Computador de bordo do satélite responsável por processar todas as informações geradas pela câmera.'
          />

          <Card
            link='https://github.com/SaganSat-EA/ttc'
            imageSrc='/ttec.png'
            title='TT&C'
            description='Responsável por realizar a comunicação com a base terrestre.'
          />

          <Card
            link=''
            imageSrc='/camera.png'
            title='Câmera'
            description='Responsável pela captura de imagens.'
          />

          <Card
            link=''
            imageSrc='/circuit.jpg'
            title='ADCS'
            description='Responsável pelo controle de altitude.'
          />
          
          <Card
            link=''
            imageSrc='/circuit.jpg'
            title='PMAD'
            description='Responsável pelo gerenciamento da energia solar captada  através das placas fotovoltaicas, carregar as baterias e distribuir pelo satélite.'
          />

          <Card
            link=''
            imageSrc='/cubesat.png'
            title='Estrutura'
            description='Responsável pela captura de imagens.'
          />
        </Grid>

        <span>
          As etapas planejadas estão disponíveis em nosso <a>Roadmap</a> e você pode acompanhar o desenvolvimento em nosso <a target='_blank' href='https://github.com/SaganSat-EA'>Github</a>.
        </span>
        
      </Content>
    </Container>
  )
}