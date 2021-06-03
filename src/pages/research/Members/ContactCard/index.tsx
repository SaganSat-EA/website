import { MdEmail } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin, AiOutlineLink } from 'react-icons/ai'

import { 
  Container,
  Content, 
  Nets,
  Phone,
  Icons,
  IconLink 
} from './styles'

interface ContactCardProps {
  avatar?: string
  name: string
  subTitle: string
  description: string
  phone?: string
  gitHub?: string
  linkedin?: string
  email?: string
  instagram?: string
  externalLink?: string
}

export function ContactCard(props: ContactCardProps) {
  const phone = props.phone?.replace(/([^\d])+/gim, '')

  return (
    <Container>
      <img 
        src={props.avatar ? props.avatar : '/user.png'}
        alt={props.name}
      />

      <Content>
        <h2>{props.name}</h2>

        <p>
          {props.subTitle}
        </p>

        <span>
          {props.description}
        </span>

        <Nets>
          <Phone>
            {props.phone ?
              <>
                <BiPhone
                  className='icon'
                  size={25}
                />

                <a
                  target='_blank'
                  href={'https://api.whatsapp.com/send?phone='+phone}
                >
                  {props.phone}
                </a>
              </>
            : null}
          </Phone>

          <Icons>
            {props.gitHub ?
              <IconLink
                target='_blank'
                href={props.gitHub}
              >
                <AiFillGithub
                  className='icon'
                  size={25}
                />
              </IconLink>
            : null}

            {props.linkedin ?
              <IconLink
                target='_blank'
                href={props.linkedin}
              >
                <AiFillLinkedin
                  className='icon'
                  size={25}
                />
              </IconLink>
            : null}

            {props.email ?
              <IconLink
                href={'mailto:'+props.email}
              >
                <MdEmail
                  className='icon'
                  size={25}
                />
              </IconLink>
            : null}

            {props.instagram ?
              <IconLink
                target='_blank'
                href={props.instagram}
              >
                <AiOutlineInstagram
                  className='icon'
                  size={25}
                />
              </IconLink>
            : null}

            {props.externalLink ?
              <IconLink
                target='_blank'
                href={props.externalLink}
              >
                <AiOutlineLink
                  className='icon'
                  size={25}
                />
              </IconLink>
            : null}
          </Icons>
        </Nets>
      </Content>
    </Container>
  )
}