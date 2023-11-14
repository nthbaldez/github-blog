import styled from 'styled-components'

export const IssuesContainerList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 4rem;
`

export const IssueCard = styled.div`
  height: 16.25rem;
  padding: 32px;
  border-radius: 10px;
  background: ${(props) => props.theme['blue-700']};

  display: grid;
  gap: 1rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      color: ${(props) => props.theme['gray-200']};
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      max-width: 283px;
    }

    span {
      padding-top: 5px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }
`
