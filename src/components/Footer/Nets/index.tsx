import { MdEmail } from 'react-icons/md'
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'

import { Card, Container, Social, Icon } from './styles'

export function Nets() {
  return (
    <Container>
      <Card>
        <MdEmail
          className='icon'
          size={30}
        />

        <h4>E-MAIL</h4>

        <hr />

        <a href=''>
          felipe.juliano@sagansat.com
        </a>

        <a href=''>
          jonathan.ferro@sagansat.com
        </a>
      </Card>

      <Social>
        <Icon href=''>
          <IoLogoTwitter 
            className='icon'
            size={20}
          />
        </Icon>
          
        <Icon href=''>
          <AiOutlineInstagram
            className='icon'
            size={20}
          />
        </Icon>

        <Icon href=''>
          <AiFillGithub
            className='icon'
            size={20}
          />
        </Icon>
      </Social>
    </Container>
  )
}