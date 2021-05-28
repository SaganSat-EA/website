import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.header`
  display: inline-block;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 75%, #000000 100%), url('/bg-research.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
`

export const HeaderContainer = styled.div`
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  transition: all 0.8s ease;

  h1 {
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: .2rem;
    text-transform: uppercase;
    color: var(--primary);
  }

  p {
    padding-bottom: 2rem; 
    font-size: 1.3rem;
    width: 70%;
    color: var(--light);
  }

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;

    p {
      font-size: 1rem;
      width: 100%;
      text-align: center;
    }
  }
`

export const Button = styled.button`
  padding: 1.5rem 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${transparentize(0.2, '#64a19d')};

  border: 0;
  border-radius: 8px;

  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);

    background: ${transparentize(0.5, '#64a19d')};
  }

  span {
    width: 100%;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15rem;

    color: var(--light);
  }

  @media (max-width: 750px) {
    padding: 1rem 2rem;

      span {
      font-size: 0.5rem;
      font-weight: 500;
      letter-spacing: 0.15rem;

      color: var(--light);
    }
  }
`