import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 72px;

  div {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;

    h3 {
      color: ${(props) => props.theme['gray-300']};
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
    }

    span {
      color: ${(props) => props.theme['gray-500']};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['black-200']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
