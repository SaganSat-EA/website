import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
`

export const Copyright = styled.section`
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--black);

  h4 {
    font-weight: 600;
    color: var(--secondary);
  }
`