import { darken, transparentize } from 'polished'
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

export const BecomeSupporterContent = styled.div`
  padding-top: 3.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    padding: 1rem;

    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;

    background-color: var(--black);
    background-image: linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255, 0));
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    transition: all 0.6 ease;

    @media (max-width: 420px) {
      font-size: 1.3rem;
    }
  }
`

export const Button = styled.button`
  padding: 1rem 4rem;
  margin-top: 0.5rem; 

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${transparentize(0.4, '#64a19d')};

  border: 0;
  border-radius: 8px;

  transition: all 0.4s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);

    background: ${darken(0.3, '#64a19d')}
  }

  span {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.15rem;

    color: var(--light);
  }
`