import styled from 'styled-components'

export const Container = styled.a`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  border-radius: 8px;

  background: rgba(32,34,39,0.5);

  transition: all 0.5s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  img {
    width: 9rem;

    border: 3px solid var(--primary) !important;
    border-radius: 10rem;
    background: var(--light);
  }

  h3 {
    padding: 1rem;

    color: var(--light);
  }

  p {
    font-size: 1.1rem;
    text-align: center;
    
    color: var(--secondary);
  }
`