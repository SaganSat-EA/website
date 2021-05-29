import { ContactCard } from './ContactCard'

import { Container, Content, CardsContainer} from './styles'

export function Members() {
  return (
    <Container>
      <Content>
        <h1>Integrantes e idealizadores</h1>

        <span>
          Não existe missão sem tripulantes! Conheça um pouco mais sobre aqueles que conduzem a nave espacial nessa jornada.
        </span>

        <CardsContainer>
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

          <ContactCard 
            name='Jonathan Martins Ferro'
            avatar='https://avatars.githubusercontent.com/u/82853784?v=4'
            subTitle='Estudante de engenharia mecatrônica, São Paulo - BR'
            description='Interessado em projetos extra curriculares; áreas de estudo eletrônica, física, programação, design toys, empreendedorismo.'
            phone='+55 (11) 94276-3782'
            gitHub='https://github.com/jone-lego'
            linkedin='https://www.linkedin.com/in/jonathan-martins-ferro-4a357520b/'
            email='jonebom99@gmail.com'
            instagram='https://www.instagram.com/jonebom/'
          />

          <ContactCard 
            name='Matheus Nobre Gomes'
            avatar='https://avatars.githubusercontent.com/u/46218218?v=4'
            subTitle='Engenheiro da Computação, São Paulo - BR'
            description='Atuante na área de desenvolvimento e dados com experiência em planejamento e negócios e empolgado com todos os avanços e descobertas que virão através da ciência e tecnologia.'
            phone='+55 (11) 99566-0126'
            gitHub='https://github.com/ccr5'
            linkedin='https://www.linkedin.com/in/mattnobre'
            email='matt-gomes@live.com'
            instagram='https://www.instagram.com/nobre.py/'
          />

          <ContactCard 
            name='João Victor M. S. Dias'
            subTitle='Estudante de engenharia da computação, São Paulo - BR'
            description='Lorem ipsum dolor sit amet consectetur adipiscing elit nunc suspendisse senectus, mattis nostra arcu purus dapibus fusce interdum semper vel.'
          />
        </CardsContainer>
      </Content>
    </Container>
  )
}