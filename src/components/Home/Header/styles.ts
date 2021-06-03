import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.header`
  display: inline-block;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000000 100%), url('/bg-home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
`

export const HeaderContainer = styled.div`
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderContent = styled.div`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;

  h1 {
    font-size: 5rem;
    letter-spacing: 1rem;
    font-weight: 550;

    background-color: var(--dark);
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    transition: all 0.4s ease;

    @media (max-width: 860px) {
      font-size: 2.7rem;
    }

    @media (max-width: 450px) {
      font-weight: 650;
      font-size: 1.2rem;
    }
  }

  h3 {
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 4rem;

    color: rgba(255, 255, 255, 0.8);

    transition: all 0.4s ease;

    @media (max-width: 860px) {
      font-size: 0.8rem;
    }

    @media (max-width: 450px) {
      font-size: 0.5rem;
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
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15rem;

    color: var(--light);
  }

  @media (max-width: 450px) {
    padding: 1rem 2rem;

      span {
      font-size: 0.5rem;
      font-weight: 500;
      letter-spacing: 0.15rem;

      color: var(--light);
    }
  }
`