import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 3.5rem;

  display: flex;
  width: 100%;

  border-radius: 8px;
  border: 0px solid var(--primary);

  background: rgba(32,34,39,0.5);

  transition: border 0.3s ease-in-out;

  &:hover {
    border-right: 18px solid var(--primary);
  }

  &:last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 350px;
    object-fit: cover;

    border-radius: 18px;

    transition: all 0.6s ease;

    background: var(--gray-dark);
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      border-right: 0px solid var(--primary);
      border-bottom: 18px solid var(--primary);
    }

    img {
      margin-top: 3rem;

      max-width: 100%;
      width: 50%;

      border-radius: 18px;

      background: var(--gray-dark);
    }
  }
  
  @media (max-width: 530px) {
    img {
      margin: 0;
      width: 100%;

      border-radius: 18px;

      background: var(--gray-dark);
    }
  }
`

export const Content = styled.div`
  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;

  transition: all 0.6 ease;

  h2 {
    font-size: 2rem;
    font-weight: 600;

    transition: all 0.6s ease;

    color: var(--light);
  }

  p {
    color: var(--gray-dark);

    transition: all 0.6s ease;
  }

  span {
    padding: 2rem 0;

    font-size: 1.3rem;

    transition: all 0.6s ease;

    color: var(--secondary);
  }

  @media (max-width: 1100px) {
    text-align: center;
  }

  @media (max-width: 530px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 390px) {
    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.6rem;
    }

    span {
      font-size: 0.7rem;
    }
  }
`

export const Nets = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.6s ease;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const Phone = styled.div`
  display: flex;
  align-items: center;

  transition: all 0.6s ease;

  .icon {
    color: var(--primary);
  }

  a {
    padding: 0 .5rem;

    font-size: 1.2rem;

    color: var(--secondary);

    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      text-decoration: underline;

      color: var(--primary);
    }

    @media (max-width: 390px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 700px) {
    padding-bottom: 1.3rem;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
`

export const IconLink = styled.a`
  margin: 0 0.5rem;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background: var(--gray-dark);

  border-radius: 100px;

  transition: all 0.2s ease-in-out;

  .icon {
    transition: color 0.5s ease;

    color: var(--secondary);
  }

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);

    .icon {
      color: var(--primary);
    }
  }

  @media (max-width: 390px) {
    padding: .5rem;
  }
`