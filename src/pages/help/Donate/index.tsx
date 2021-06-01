import { CardDonate } from './CardDonate'

import { Container, Content, CardsRow } from './styles'

export function Donate({ id }) {
  return (
    <Container id={id}>
      <Content>
        <CardsRow>
          <CardDonate 
            title='vakinha'
            link='https://www.vakinha.com.br/vaquinha/sagansat-ea'
          />

          <CardDonate 
            title='pix'
            link='02422004-3c2f-4f97-a1fb-c2b8c50bad7c'
          />

          <CardDonate 
            title='bitcoin'
            link='https://www.blockchain.com/pt/btc/address/bc1qt7jvy2fkncaye0jx5m0g4pcez3rz0sc04xnkha'
          />

          <CardDonate 
            title='ethereum'
            link='https://etherscan.io/address/0xd3B29C2F87EB36367a23e9B023B23C450f54fA6D'
          />

          <CardDonate 
            title='cardano'
            link='https://cardanoscan.io/address/012e0dd1eb70c2083332df98c77703f739a0fa88064145d49297c2bac02e0dd1eb70c2083332df98c77703f739a0fa88064145d49297c2bac0'
          />
        </CardsRow>
      </Content>
    </Container>
  )
}