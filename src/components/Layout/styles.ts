import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  .Toastify__toast-container {
    width: 30rem;
  }

  .Toastify__progress-bar {
    background: var(--primary);
  }
`