import { MdEmail } from 'react-icons/md'
import { AiOutlineInstagram, AiFillGithub, AiFillHeart, AiFillLinkedin } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'

import { Card, Container, SocialContainer, DeveloperContainer, IconLink } from './styles'

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

      <SocialContainer>
        <IconLink href=''>
          <IoLogoTwitter 
            className='icon'
            size={20}
          />
        </IconLink>
          
        <IconLink href=''>
          <AiOutlineInstagram
            className='icon'
            size={20}
          />
        </IconLink>

        <IconLink href=''>
          <AiFillGithub
            className='icon'
            size={20}
          />
        </IconLink>
      </SocialContainer>

      <DeveloperContainer>
        <div className='card-front'>
          <h4>Desenvolvido com</h4>
          <AiFillHeart 
            className='icon'
            size={15}
            color='red'
          />
          <h4>por Lissone</h4>
        </div>

        <div className='card-back'>
          <h4>Redes para contato</h4>
          <div className='row'>
            <IconLink
              target='_blank'
              href='https://www.linkedin.com/in/lissone/'
            >
              <AiFillLinkedin
                className='icon'
                size={20}
              />
            </IconLink>

            <IconLink
              target='_blank' 
              href='https://github.com/Lissone'
            >
              <AiFillGithub
                className='icon'
                size={20}
              />
            </IconLink>
          </div>
        </div>
      </DeveloperContainer>
    </Container>
  )
}