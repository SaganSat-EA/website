import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { CardDonate } from './CardDonate'

import { Container, Content, CardsRow } from './styles'
import { useState } from 'react'

export function Donate({ id }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    loop: false,
    rtl: false,
    slidesPerView: 3,
    spacing: 30,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    )
  }
  
  function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    )
  }

  return (
    <Container id={id}>
      <Content>
        <h1>Doe como puder</h1>

        <span>
          Você pode doar o valor que puder para nos ajudar a concluir nossa missão.
        </span>

        <CardsRow ref={sliderRef} className="keen-slider">
          <CardDonate
            className="keen-slider__slide number-slide1"
            title='vakinha'
            link='https://www.vakinha.com.br/vaquinha/sagansat-ea'
          />

          <CardDonate 
            className="keen-slider__slide number-slide2"
            title='pix'
            link='02422004-3c2f-4f97-a1fb-c2b8c50bad7c'
          />

          <CardDonate
            className="keen-slider__slide number-slide3"
            title='bitcoin'
            link='https://www.blockchain.com/pt/btc/address/bc1qt7jvy2fkncaye0jx5m0g4pcez3rz0sc04xnkha'
          />

          <CardDonate
            className="keen-slider__slide number-slide4"
            title='ethereum'
            link='https://etherscan.io/address/0xd3B29C2F87EB36367a23e9B023B23C450f54fA6D'
          />

          <CardDonate
            className="keen-slider__slide number-slide5"
            title='cardano'
            link='https://cardanoscan.io/address/012e0dd1eb70c2083332df98c77703f739a0fa88064145d49297c2bac02e0dd1eb70c2083332df98c77703f739a0fa88064145d49297c2bac0'
          />

          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </>
          )}
        </CardsRow>
      </Content>
    </Container>
  )
}