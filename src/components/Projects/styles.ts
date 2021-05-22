import styled from 'styled-components';

export const Container = styled.section`
  background: var(--background);
`

export const Content = styled.div`
  max-width: 1120px;
  height: 150vh;
  margin: 0 auto;
  padding: 5.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const AlternativeRoutesCard = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 9px;

  img {
    border-radius: 9px;
  }

  transition: all 0.4s ease;

  &:hover {
    box-shadow: 10px 15px 10px -5px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`

export const AlternativeRoutesDescription = styled.div`
  padding: 0 4rem;
  border-left: 8px solid var(--primary);

  h2 {
    font-weight: 550;
  }

  span {
    color: var(--secondary);
  }
`