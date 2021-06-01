import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.header`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000000 100%), url('/bg-help.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  max-width: 1000px;
  padding: 10rem 1.5rem; 
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.3rem;
    font-weight: 650;

    color: var(--primary);

    transition: all 0.6s ease;

    @media (max-width: 500px) {
      font-size: 1.8rem;
    }
  }

  span {
    padding-top: 1rem;

    text-align: center;
    font-size: 1.3rem;
    color: ${lighten(0.2, '#6c757d')};

    transition: all 0.6s ease;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

  .icon {
    cursor: pointer;

    color: var(--light);
  }
`

export const Chart = styled.div`
  margin: 5rem 0;

  padding: 2rem 4rem;

  justify-content: flex-start;
  align-items: flex-start;

  border-radius: 15px;

  opacity: 0.7;
  background: var(--gray-dark);

  h5 {
    font-weight: 600;
    font-size: 5rem;

    color: var(--light);

    transition: all 0.6s ease;

    @media (max-width: 600px) {
      font-size: 3rem;
    }

    @media (max-width: 430px) {
      font-size: 2.6rem;
    }
  }
`

export const ChartTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: .9rem;
    

    opacity: 0.8;
    color: var(--primary);
  }

  .icon {
    cursor: default;

    color: var(--primary);
  }
`