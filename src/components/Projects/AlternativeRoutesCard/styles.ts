import styled from 'styled-components';


export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 9px;

  img {
    max-height: 300px;
    border-radius: 9px;
  }

  hr  {
    height: 80px;
    width: 15px;
    border: 0;
    border-radius: 0 9px 9px 0;

    background: var(--primary);
  }


  transition: all 0.4s ease;

  &:hover {
    box-shadow: 10px 15px 10px -5px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;

    hr  {
      height: 8px;
      width: 210px;
      border: 0;
      border-radius: 0 0 9px 9px;

      background: var(--primary);
    }
  }
`

export const Description = styled.div`
  padding: 2rem 4rem;

  h2 {
    font-weight: 550;
  }

  span {
    color: var(--secondary);

    a {
      padding-left: 8px;

      transition: all 0.5s ease;

      &:hover {
        text-decoration: underline;
        color: var(--primary);
      }
    }
  }

  @media (max-width: 820px) {
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`