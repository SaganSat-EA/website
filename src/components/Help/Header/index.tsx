import { useEffect, useState } from 'react'
import { Link as Scroll } from 'react-scroll'
import { IoArrowUpCircleOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Circle } from 'rc-progress'

import { Container, Content, Chart, ProgressBar, ChartTitle } from './styles'

export function Header() {
  const [amount, setAmount] = useState(0)
  const [percentAmount, setPercentAmount] = useState(0)

  useEffect(() => {
    function percentAmountProgress() {
      const expectedAmount = 150000
      const percent = (amount * 100) / expectedAmount
  
      setPercentAmount(Math.floor(percent))
    }

    percentAmountProgress()
  }, [])

  return(
    <Container>
      <Content>
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

          <ProgressBar>
            <Circle
              className='progress-circle'
              percent={percentAmount} 
              strokeWidth={6}
              strokeLinecap='round'
              strokeColor='#64a19d'
            />

            <h5>{percentAmount}%</h5>
          </ProgressBar>
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
      </Content>
    </Container>
  )
}