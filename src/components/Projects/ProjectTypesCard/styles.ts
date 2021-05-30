import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  transition: all 1s ease-in-out;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem;
  z-index: 1;

  background: var(--black);
  background-size: 200% 200%;
  background-image: linear-gradient(to top, var(--light) 50%, transparent 50%);
  -webkit-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
  -moz-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
  -ms-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
  -o-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
  
  transition: all 300ms, color 300ms ease, border-color 300ms ease;

  &:hover {
    color: var(--light);
    border-color: var(--light);
    background-image: linear-gradient(to top, var(--light) 51%, transparent 50%);
    background-position: 0 100%;
    -webkit-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
    -moz-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
    -ms-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
    -o-transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
    transition: background-position 300ms, color 300ms ease, border-color 300ms ease;

    div {
      h2 {
        color: var(--black);
      }
    }
  }

  @media (max-width: 860px) {
    padding: 3rem;
  }
`

interface CardContentProps {
  alignItems: 'left' | 'center' | 'right'
}

export const CardContent = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({alignItems}) => alignItems === 'right' ? 'flex-end' : 'flex-start'};
  text-align: ${({alignItems}) => alignItems === 'right' ? alignItems : 'left'};

  transition: all 0.4s ease;

  @media (max-width: 860px) {
    align-items: flex-start;
    text-align: start;
  }

  h2 {
    color: var(--light);
    font-weight: 550;
  }

  span {
    padding-top: 0.6rem;
    padding-bottom: 0.8rem;
    font-size: 0.82rem;
    font-weight: 650;

    color: var(--secondary);

    display: flex;
    flex-direction: column;

    a {
      font-weight: bold;
      transition: all 0.5s ease;

      &:hover {
        text-decoration: underline;
        color: var(--primary);
      }
    }
  }

  hr {
    width: 150px;
    height: 5px;
    border: 0;
    border-radius: 0 0 9px 9px;

    background: var(--primary);

    @media (max-width: 860px) {
      width: 100px;
    }
  }
`