import { Header } from '../components/Home/Header'
import { Awards } from '../components/Home/Awards'
import { Projects } from '../components/Home/Projects'

import { Container } from '../styles/home'

export default function Home() {
  return (
    <Container>
      <Header />

      <main id='home'>
        <Awards/>

        <Projects />
      </main>
    </Container>
  )
}
