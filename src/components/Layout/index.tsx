import { ToastContainer, Slide } from 'react-toastify'

import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

import { Container, Content } from './styles'

export function Layout({children}) {
  return (
    <Container id='topPage'>
      <Navbar />
      
      <Content>
        <ToastContainer 
          position='bottom-center'
          autoClose={3000}
          hideProgressBar={false}
          transition={Slide}
          pauseOnHover={false}
        />
        {children}
      </Content>

      <Footer />
    </Container>
  )
}