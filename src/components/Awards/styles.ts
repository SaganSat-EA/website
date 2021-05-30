import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 0.8) 100%);
`

export const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  h2 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 480;
    padding: 25px;
  }

  img {
    margin-top: 3.5rem;
    width: 75%;
  }
`

export const Description = styled.div`
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    font-weight: 500;
    color: var(--secondary);
  }

  a {
    font-weight: 500;
    color: var(--primary);
    padding-left: 8px;

    transition: all 0.5s ease;

    &:hover {
      text-decoration: underline;
      color: ${darken(0.2, '#64a19d')};
    }
  }
`