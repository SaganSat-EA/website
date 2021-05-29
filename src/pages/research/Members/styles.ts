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
    padding-bottom: 1.5rem;

    font-size: 2rem;
    font-weight: 600;

    color: var(--light);

    transition: all 0.6s ease;

    @media (max-width: 530px) {
      font-size: 1.7rem;
    }

    @media (max-width: 470px) {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1150px) {
    width: 100%;
  }
`