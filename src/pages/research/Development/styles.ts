import styled from 'styled-components'

export const Container = styled.section`
  background: var(--black);

  border-top: 1px solid var(--gray-dark);
`

export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding: 5rem 3rem;

  @media (max-width: 1150px) {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;

    color: var(--light);

    transition: all 0.6s ease;

    @media (max-width: 650px) {
      font-size: 1.8rem;
    }
  }

  span {
    font-size: 1.2rem;
    
    color: var(--secondary);

    transition: all 0.6s ease;

    a {
      font-weight: 650;

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
`

export const Grid = styled.div`
  padding: 1.8rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  transition: all 0.8s ease;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`