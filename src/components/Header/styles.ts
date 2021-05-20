import styled from 'styled-components'

import { lighten } from 'polished'

export const Container = styled.header`
  background: var(--black);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`

export const Content = styled.div`
  height: 4.8rem;
  margin: 0 auto;

  color: var(--secondary);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  ul {
    display: flex;
    list-style-type: none;

    li {
      padding: 0 2rem;

      &:hover {
        color: ${lighten(0.3, '#6c757d')};
      }

      &:last-child {
        margin-right: 5rem;
      }
    }
  }
`
export const Logo = styled.a`
  font-size: 0.65rem;
  padding-left: 17px;
`