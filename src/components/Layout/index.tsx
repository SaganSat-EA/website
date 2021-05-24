import { Footer } from '../Footer'
import { Header } from '../Header'

import { Container, Content } from './styles'

export function Layout({children}) {
  return (
    <Container>
      <Header />
      
      <Content>
        {children}
      </Content>

      <Footer />
    </Container>
  )
}