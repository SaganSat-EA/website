import styled from 'styled-components'

export const Container = styled.section`
  background: var(--black);
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
  }

  span {
    font-size: 1.2rem;
    
    color: var(--secondary);

    a {
      font-weight: 650;

      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        text-decoration: underline;
        color: var(--primary);
      }
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
    grid-template-columns: 1fr;
  }
`

export const Card = styled.a`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  border-radius: 8px;

  background: rgba(32,34,39,0.5);

  transition: all 0.5s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  img {
    width: 9rem;

    border: 3px solid var(--primary) !important;
    border-radius: 10rem;
    background: var(--light);
  }

  h3 {
    padding: 1rem;

    color: var(--light);
  }

  p {
    font-size: 1.1rem;
    text-align: center;
    
    color: var(--secondary);
  }
`