import styled from 'styled-components'

export const IssueArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  p {
    margin-top: 1rem;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding: 0 2rem 0.5rem;
  }

  pre {
    padding: 2rem;
    border-radius: 8px;
    background: ${(props) => props.theme['blue-700']};
    color: ${(props) => props.theme['gray-400']};
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`
