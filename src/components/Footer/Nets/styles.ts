import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.section`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--black);
`

export const Card = styled.div`
  padding: 1.5rem 3.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--light);

  border-bottom: 5px solid var(--primary);
  border-radius: 5px;

  transition: all 0.8s ease;

  h4 {
    padding-top: 1rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
  }

  hr {
    margin: 1rem;
    width: 100px;
    height: 4px;
    border: 0;
    border-radius: 8px;

    background: var(--primary);
  }

  a {
    padding: 0.1rem;

    font-size: 0.8rem;
    font-weight: 500;
    
    transition: all 0.4s ease;

    &:hover {
      text-decoration: underline;
      color: var(--primary);
    }
  }

  @media (max-width: 340px) {
    padding: 1.5rem;
  }
`

export const Social = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: row;
`

export const Icon = styled.a`
  margin: 0 0.5rem;
  padding: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${darken(0.1, '#343a40')};

  border-radius: 100px;

  transition: all 0.2s ease-in-out;

  .icon {
    color: var(--secondary);
  }

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);

    .icon {
      color: ${lighten(0.3, '#6c757d')};
    }
  }
`