import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  max-width: 864px;
  height: 212px;

  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme['blue-800']};

  display: flex;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme['gray-200']};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      text-decoration: none;
      color: ${(props) => props.theme['blue-200']};
    }
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
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
