import { Header } from './Header'
import { Beginning } from './Beginning'
import { Development } from './Development'

import { Container } from './styles'

export default function Research() {
  return (
    <Container id='research'>
      <Header />

      <Beginning id='beginning' />

      <Development />
    </Container>
  )
}