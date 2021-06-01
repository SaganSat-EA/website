import { Header } from './Header'
import { Donate } from './Donate'

import { Container } from './styles'

export default function Help() {
  return (
    <Container id='help'>
      <Header />

      <Donate id='donate'/>
    </Container>
  )
}