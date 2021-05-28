import { ContactUs } from './ContactUs'
import { Nets } from './Nets'

import { Container, Copyright } from './styles'

export function Footer() {
  return (
   <Container>
    <ContactUs />

    <Nets />

    <Copyright>
      <h4>
      Copyright © Sagan {new Date().getFullYear()}
      </h4>
    </Copyright>
   </Container> 
  )
}