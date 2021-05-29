import styled from 'styled-components'

export const Container = styled.section`
  height: 100%;

  background: var(--black);

  border-top: 1px solid var(--gray-dark);
`

export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding: 5rem 3rem;

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

    @media (max-width: 650px) {
      font-size: .9rem;
    }
  }

  @media (max-width: 1150px) {
    width: 100%;
  }
`

export const CardsContainer = styled.div`
  padding-top: 1.5rem;
`