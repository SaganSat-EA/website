import { ContactCard } from './ContactCard'

import { Container, Content} from './styles'

export function Members() {
  return (
    <Container>
      <Content>
        <h1>Integrantes e idealizadores</h1>

        <ContactCard 
          name='Felipe Costa Juliano'
          avatar='https://avatars.githubusercontent.com/u/46896206?v=4'
          subTitle='Engenheiro de computação, São Paulo - BR'
          description='Áreas de estudo com foco em arquitetura de computadores, eletrônica e engenharia de controle moderno, candidato a PhD em engenharia elétrica.'
          phone='+55 (11) 95269-0323'
          gitHub='https://github.com/FelipeJuliano'
          linkedin='https://www.linkedin.com/in/felipe-c-juliano-ab8367161/'
          email='felipecostajuliano@live.com'
          instagram='https://www.instagram.com/felipe.costajuliano/'
        />
      </Content>
    </Container>
  )
}