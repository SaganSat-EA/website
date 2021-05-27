import { useRef } from 'react'
import * as Yup from 'yup'
import { FiSend } from 'react-icons/fi'

import { Input } from '../../Form/input'
import { TextArea } from '../../Form/textArea'

import { Container, Content, Form, Button } from './styles'

interface Contact {
  email: string
  name: string
  question: string
}

export function ContactUs() {
  const formRef = useRef(null)

  async function handleSubmit(data: Contact, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        name: Yup.string()
          .min(5, 'Mínimo 5 caracteres')
          .required('O nome é obrigatório'),
        question: Yup.string()
          .min(10, 'Mínimo 10 caracteres')
          .required('Sua dúvida é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      formRef.current.setErrors({})
      
      reset()
    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })

        formRef.current.setErrors(errorMessages)
      }
    }
  }

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
        
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Digite seu e-mail"/>
          <Input name="name" placeholder="Digite seu nome"/>
          <TextArea name="question" placeholder="Digite sua dúvida"/>

          <Button type='submit'>
            <span>
              ENVIAR
            </span>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}