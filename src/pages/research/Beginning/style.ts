import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  padding: 5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--light);

  transition: all 0.6s ease;

  @media (max-width: 800px) {
    transition: all 0.6s ease;
    
    height: 100%;
    padding: 0rem;
  }
`

export const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  border-radius: 15px;

  background: var(--light);

  transition: all 0.8s ease;

  @media (max-width: 800px) {
    box-shadow: none;
  }

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