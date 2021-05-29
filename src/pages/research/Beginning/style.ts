import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;

  background: linear-gradient(to bottom, #000000 0%, #fff 100%, rgba(0, 0, 0, 0.1) 100%);

  @media (max-width: 500px) {
    height: 100%;
  }
`

export const Content = styled.div`
  max-width: 720px;
  height: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: var(--light);
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.8), -12px 0 8px -4px rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 2rem;
    font-weight: 650;

    color: var(--primary);

    transition: all 0.8s ease;

    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
  }

  p {
    padding: 1rem 0;
  }
`