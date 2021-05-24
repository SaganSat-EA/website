import { Awards } from '../components/Awards'
import { Projects } from '../components/Projects'

import { Container } from '../styles/home'

export default function Home() {
  return (
    <Container>
      <Awards />

      <Projects />
    </Container>
  )
}
