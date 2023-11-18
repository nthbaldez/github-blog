import styled from 'styled-components'

export const CardIssueContainer = styled.div`
  width: 864px;
  min-height: 10.5rem;
  border-radius: 10px;

  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme['blue-800']};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h2 {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }
  }

  footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        color: ${(props) => props.theme['gray-300']};
      }
    }

    span {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
