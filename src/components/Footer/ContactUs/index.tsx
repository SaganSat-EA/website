import { FiSend } from 'react-icons/fi'

import { Container, Content, Button } from './styles'

export function ContactUs() {
  return (
    <Container>
      <Content>
        <FiSend 
          size={45}
          color='white'
        />
        <h1>
          Faça contato conosco
        </h1>
        
        <form action="post">
          <input type="text" placeholder="Digite sua dúvida" name="question" />
          <input type="email" placeholder="Digite seu e-mail" name="email" />
          <input type="text" placeholder="Digite seu nome" name="name" />

          <Button type="submit">
            <span>
              ENVIAR
            </span>
          </Button>
        </form>
      </Content>
    </Container>
  )
}