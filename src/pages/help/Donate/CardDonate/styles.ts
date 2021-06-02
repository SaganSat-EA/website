import { lighten } from 'polished'
import styled from 'styled-components'

interface IconHexagonProps {
  background: string
  gradient: string
}

export const Container = styled.a`
  padding: 2rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 3px solid ${lighten(0.1, '#202227')};
  border-radius: 8px;

  background: #202227;

  transition: all 0.6s ease;

  h3 {
    padding: 1.5rem 0;

    text-transform: capitalize;
    font-size: 2.5rem;
    font-weight: 600;

    color: var(--light);
  }

  img {
    border-radius: 20px;

    transition: all 0.6s ease;
  }

  &:hover {
    border: 3px solid var(--primary);

    img, .icon {
      transition: all 0.6s ease;

      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media (max-width: 410px) {
    padding: 2rem;
  }
`

export const IconHexagon = styled.div<IconHexagonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px 0;
  width: 104px;
  height: 60px;
  background-color: green;
  border-color: green;
  position: relative;
  display: inline-block;

  background: ${({background}) => background};
  background: linear-gradient${({gradient ,background}) => `(to bottom, ${gradient}, ${background})`};
  background: -webkit-linear-gradient${({gradient ,background}) => `(to bottom, ${gradient}, ${background})`};
  border-top-color: ${({background}) => background};
  border-bottom-color: ${({gradient}) => gradient};
  
  &:before {
    content: " ";
    width: 0; height: 0;
    border-bottom: 30px solid;
    border-color: inherit;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    position: absolute;
    top: -30px;
  }

  &:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -30px;
    right: 0px;
    border-top: 30px solid;
    border-color: inherit;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
  }

  .icon {
    position: absolute;
    left: 22px;

    transition: all 0.6s ease;
  }
`