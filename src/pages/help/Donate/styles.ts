import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.section`
  height: 100%;

  background: var(--black);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  section {
    padding-bottom: 2.5rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;

    color: var(--light);

    transition: all 0.6s ease;

    @media (max-width: 650px) {
      font-size: 1.8rem;
    }

    @media (max-width: 470px) {
      font-size: 1.3rem;
    }
  }

  span {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    
    color: var(--secondary);

    transition: all 0.6s ease;

    a {
      font-weight: bold;
      
      color: ${lighten(0.1, '#64a19d')};
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        text-decoration: underline;
        color: var(--primary);
      }
    }

    @media (max-width: 650px) {
      font-size: .9rem;
    }
  }

  @media (max-width: 1150px) {
    max-width: 800px;
    width: 100%;
  }
`

export const DonateCards = styled.section`
  padding: 2rem 0;
  display: flex;

  .donate_card {
    margin: 1rem 0;
  }

  @media (max-width: 1110px) {
    max-width: 700px;
    margin: 0 auto;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    .arrow {
      cursor: default !important;
      opacity: 0;
    }
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`
