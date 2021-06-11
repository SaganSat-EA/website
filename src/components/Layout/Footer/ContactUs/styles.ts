import { darken, transparentize } from 'polished'
import { Form as Unform } from '@unform/web'
import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 75%, #000000 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 75%, #000000 100%),
    url('/images/bg-contact-us.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding-top: 1rem;
    font-size: 2.5rem;
    font-weight: 550;
    color: var(--light);

    transition: all 0.8s ease;

    @media (max-width: 430px) {
      font-size: 1.8rem;
    }
  }
`

export const Form = styled(Unform)`
  width: 100%;
  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.8s ease;

  div {
    width: 100%;

    input, textarea {
      width: 100%;
      padding: 1rem 1.5rem;
      margin: .5rem 0;
      border-radius: 0.25rem;

      color: var(--light);

      border: 1px solid var(--primary);
      background: ${transparentize(0.8, '#f8f9fa')};

      font-weight: 300;
      font-size: 1rem;

      transition: border-color 0.2s ease-in-out;

      &:hover {
        border-color: ${darken(0.2, '#f8f9fa')}
      }

      &::placeholder {
        color: var(--light);
      }
    }

    textarea {
      height: 8rem;
      resize: none;
    }

    span {
      color: #cc0033;
    }
  }

  @media (max-width: 430px) {
    width: 80%;
  }
`

export const Button = styled.button`
  padding: 0.7rem 2rem;
  margin-top: 0.5rem; 

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${transparentize(0.4, '#64a19d')};

  border: 0;
  border-radius: 8px;

  transition: all 0.4s ease;

  &:hover {
    background: ${darken(0.3, '#64a19d')}
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15rem;

    color: var(--light);
  }
`