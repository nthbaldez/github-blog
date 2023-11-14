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
  }

  footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
  }
`
