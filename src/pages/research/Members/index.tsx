import { MdEmail } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { 
  Container,
  Content, 
  Card, 
  CardContent, 
  Nets,
  Phone,
  Icons,
  IconLink 
} from './styles'

export function Members() {
  return (
    <Container>
      <Content>
        <h1>Integrantes e idealizadores</h1>

        <Card>
          <img 
            src='https://avatars.githubusercontent.com/u/46896206?v=4'
            alt='Felipe Costa Juliano'
          />

          <CardContent>
            <h2>Felipe Costa Juliano</h2>

            <p>
              Engenheiro de computação, São Paulo - BR
            </p>

            <span>
              Áreas de estudo com foco em arquitetura de computadores, eletrônica e engenharia de controle moderno, candidato a PhD em engenharia elétrica.
            </span>

            <Nets>
              <Phone>
                <BiPhone
                  className='icon'
                  size={25}
                />

                <a>
                  +55 (11) 95269-0323
                </a>
              </Phone>

              <Icons>
                <IconLink>
                  <AiFillGithub
                    className='icon'
                    size={25}
                  />
                </IconLink>

                <IconLink>
                  <AiFillLinkedin
                    className='icon'
                    size={25}
                  />
                </IconLink>

                <IconLink>
                  <MdEmail
                    className='icon'
                    size={25}
                  />
                </IconLink>

                <IconLink>
                  <AiOutlineInstagram
                    className='icon'
                    size={25}
                  />
                </IconLink>
              </Icons>
            </Nets>
          </CardContent>
        </Card>
      </Content>
    </Container>
  )
}