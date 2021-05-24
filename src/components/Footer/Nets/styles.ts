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

  border-bottom: 5px solid var(--primary);
  border-radius: 5px;

  background: var(--light);
  background-size: 200% 200%;
  background-image: linear-gradient(to top, var(--primary) 50%, transparent 50%);
  -webkit-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
  -moz-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
  -ms-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
  -o-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
  
  transition: all 300ms, color 300ms ease, border-color 300ms ease;

  .icon {
    color: var(--primary);
  }

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
  }

  &:hover {
    color: var(--black);
    border-color: var(--primary);
    background-image: linear-gradient(to top, var(--primary) 51%, transparent 50%);
    background-position: 0 100%;
    -webkit-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
    -moz-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
    -ms-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
    -o-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
    transition: background-position 300ms, color 300ms ease, border-color 300ms ease;

    .icon {
      color: var(--light);
    }

    hr {
      background: var(--light);
    }

    a {
      &:hover {
        text-decoration: underline;
      }
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