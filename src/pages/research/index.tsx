import { Header } from '../../components/Research/Header'
import { Beginning } from '../../components/Research/Beginning'
import { Development } from '../../components/Research/Development'
import { Members } from '../../components/Research/Members'

import { Container } from '../../styles/research'

export default function Research() {
  return (
    <Container id='research'>
      <Header />

      <Beginning id='beginning' />

      <Members />

      <Development />
    </Container>
  )
}