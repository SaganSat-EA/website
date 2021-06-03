import { Header } from '../../components/Help/Header'
import { Donate } from '../../components/Help/Donate'

import { Container } from '../../styles/help'

export default function Help() {
  return (
    <Container id='help'>
      <Header />

      <Donate id='donate'/>
    </Container>
  )
}