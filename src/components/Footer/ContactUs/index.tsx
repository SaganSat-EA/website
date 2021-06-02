import { useRef, useState } from 'react'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import { FiSend } from 'react-icons/fi'

import { Input } from '../Form/input'
import { TextArea } from '../Form/textArea'

import { Container, Content, Form, Button } from './styles'
import { toast } from 'react-toastify'

interface Contact {
  email: string
  name: string
  message: string
}

export function ContactUs({ id }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const formRef = useRef(null)

  async function handleSubmit(data: Contact, { reset }) {
    try {
      setIsButtonDisabled(true)

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        name: Yup.string()
          .min(5, 'Mínimo 5 caracteres')
          .required('O nome é obrigatório'),
        message: Yup.string()
          .min(10, 'Mínimo 10 caracteres')
          .required('Sua mensagem é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })
      
      await sendEmail(data)

      formRef.current.setErrors({})
      
      reset()
    } catch (err) {
      setIsButtonDisabled(false)
      
      if(err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })

        formRef.current.setErrors(errorMessages)
      } else {
        console.log(err)
      }
    }
  }

  function sendEmail(data: Contact) {
    emailjs.send('gmailLis', 'template_8lfaufr', data, 'user_dS1fuSIzGZhrq6PvGmtOV')
      .then(() => {
        toast.dark('Sua mensagem foi enviada para equipe Sagan ✔')
        setIsButtonDisabled(false)
      }, (error) => {
        toast.error('Erro ao enviar e-mail para equipe Sagan', {
          hideProgressBar: true
        })
        throw new Error(error.text)
      })
  }

  return (
    <Container id={id}>
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
          <TextArea name="message" placeholder="Digite sua mensagem"/>

          <Button 
            type='submit'
            disabled={isButtonDisabled}
          >
            <span>
              ENVIAR
            </span>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}