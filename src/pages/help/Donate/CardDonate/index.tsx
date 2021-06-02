import { toast } from 'react-toastify'
import { BiBitcoin } from 'react-icons/bi'
import { RiPixelfedLine, RiHandCoinLine } from 'react-icons/ri'
import { SiEthereum } from 'react-icons/si'

import { Container, IconHexagon } from './styles'

interface CardDonateProps {
  title: string
  link: string
  className: string
}

export function CardDonate({ title, link, className }: CardDonateProps) {
  const isLinkUrl = link.substr(0,4) === 'http'

  function handleCardClick() {
    if(isLinkUrl) {
      window.open(link, '_blank')
    } else {
      navigator.clipboard.writeText(link)

      toast.info('Link copiado!', {
        hideProgressBar: true
      })
    }
  }

  return (
    <Container
      className={className}
      onClick={handleCardClick}
    >
      {title === 'vakinha' ? 
        <IconHexagon
          background='#11998e'
          gradient='#38ef7d'
        >
          <RiHandCoinLine
            className='icon'
            color='white' 
            size={60}
          />
        </IconHexagon>
      : null}

      {title === 'pix' ? 
        <IconHexagon
          background='#2980b9'
          gradient='#6dd5fa'
        >
          <RiPixelfedLine
            className='icon'
            color='white' 
            size={60}
          />
        </IconHexagon>
      : null}

      {title === 'bitcoin' ? 
        <IconHexagon
          background='#fdc830'
          gradient='#f37335'
        >
          <BiBitcoin
            className='icon'
            color='white' 
            size={60}
          />
        </IconHexagon>
      : null}

      {title === 'ethereum' ? 
        <IconHexagon
          background='#0f2027'
          gradient='#2c5364'
        >
          <SiEthereum
            className='icon'
            color='white' 
            size={60}
          />
        </IconHexagon>
      : null}
      
      {title === 'cardano' ? 
        <IconHexagon
          background='#642b73'
          gradient='#c6426e'
        >
          <img
            className='icon'
            width={60}
            height={60}
            src='/cardano-logo.svg'
          />
        </IconHexagon>
      : null}

      <h3>
        {title}
      </h3>

      <img src={`/${title}-qr.svg`} alt='QrCode' />
    </Container>
  )
}