import Image from 'next/image'

import { Container } from './styles'

export function Card({ imageSrc, title, description, link }) {
  return (
    <Container
      target='_blank'
      href={link}
    >
      <Image 
        width={600}
        height={600}
        src={imageSrc}
        alt={title}
        objectFit='contain'
      />

      <h3>{title}</h3>

      <p>
        {description}
      </p>
    </Container>
  )
}