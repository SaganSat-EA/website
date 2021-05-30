import Link from 'next/link'

import { ContactCard } from './ContactCard'

import { Container, Content, CardsContainer, BecomeSupporterContent, Button } from './styles'

export function Members() {
  return (
    <>
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

      <Container>
        <Content>
          <h1>Orientadores</h1>

          <span>
            Tal como não existe missão sem tripulantes, não existe tripulação sem treino e preparação! Conheça um pouco mais sobre aqueles que os conduzem.
          </span>
          <CardsContainer>
            <ContactCard 
              name='Edilson Alexandre Camargo'
              subTitle='Doutor em Engenharia Eletrônica - Fotônica, São Paulo - BR'
              description='Pesquisador do Instituto de Aeronáutica e Espaço, uma instituição que pertence ao Departamento de Ciência e Tecnologia Aeroespacial, em São José dos Campos, Brasil, onde vem desenvolvendo pesquisas sobre a aplicação de Análise Modal Operacional aplicado a Estruturas Aeronáuticas e Espaciais.'
              linkedin='https://www.linkedin.com/in/edilson-alexandre-95483a26/'
              externalLink='http://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=6F62CD655C09E64F05C8952FB3BA96F6.buscatextual_0'
            />
          </CardsContainer>
        </Content>
      </Container>

      <Container>
        <Content>
          <h1>Apoiadores</h1>

          <span>
            Do início ao fim, os apoiadores da pesquisa são primordiais para incentivar e colaborar para tirar o projeto do papel e comemorar juntos as conquistas da equipe. A SaganSat é grata por todos que colaboram de alguma forma com o projeto. Veja abaixo aqueles que nos ajudam nessa missão.
          </span>
          <CardsContainer>
            <ContactCard 
              name='Leonardo Dias Lissone Santomero'
              avatar='https://avatars.githubusercontent.com/u/57052110?s=400&u=38e03d1d4f61b1552e69e7b5b8f46c938f97d80c&v=4'
              subTitle='Estudante de Sistemas de Informação, São Paulo - BR'
              description='Desenvolvedor front-end com conhecimento de experiência e interface de usuário.'
              phone='+55 (11) 91048-7619'
              gitHub='https://github.com/Lissone'
              linkedin='https://www.linkedin.com/in/lissone/'
              email='leonardo.lissonez@gmail.com'
              instagram='https://www.instagram.com/lissoninho_/'
            />
          </CardsContainer>

          <BecomeSupporterContent>
            <img width='300px' src="/rocket-animated.gif" alt="Rocket" />

            <h3>
              Seja um apoiador da pesquisa e contribua com nossa missão!
            </h3>

            <Link href={'/help'}>
              <Button>
                <span>Conferir</span>
              </Button>
            </Link>
          </BecomeSupporterContent>
        </Content>
      </Container>
    </>
  )
}