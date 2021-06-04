import { Header } from '../components/HomeHeader'
import { Awards } from '../components/Awards'
import { Projects } from '../components/Projects'

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
