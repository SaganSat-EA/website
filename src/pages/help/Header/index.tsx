import { Link as Scroll } from 'react-scroll'
import { IoArrowUpCircleOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { Container, Chart, ChartTitle } from './styles'

export function Header() {
  return(
    <Container>
      <h1>
        Ajude nos em nossa missão
      </h1>

      <span>
        O desenvolvimento segue a toda propulsão e precisamos de recursos para a construção. Estamos levantando recursos através de parcerias, divulgação e afins. Contamos com você para contribuir com nossa missão com o que for possível!
      </span>

      <Chart>
        <ChartTitle>
          <h3>Total arrecadado</h3>

          <IoArrowUpCircleOutline 
            className='icon'
            size={25}
          />
        </ChartTitle>

        <h5>R$ 10.000,00</h5>
      </Chart>

      <Scroll
        to='donate' 
        smooth={true}
        duration={1000}
        spy={true}
        exact='true'
        offset={-80}
      >
        <MdKeyboardArrowDown 
          className='icon'
          size={70}
        />
      </Scroll>
    </Container>
  )
}