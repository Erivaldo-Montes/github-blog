import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  margin: 0 auto;
`

export const ProfileContainer = styled.div`
  position: relative;
  top: calc(7.25rem - 13.25rem);
  background: ${(props) => props.theme['base-profile']};
  display: flex;
  width: 100%;
  height: 13.25rem;
  gap: 2rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;

  & > img {
    max-width: 9.25rem;
    max-height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  & > header {
    display: flex;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      position: relative;

      svg {
        line-height: 160%;
      }

      &::after {
        content: '';
        bottom: 0;
        position: absolute;
        width: 0;
        height: 1px;
      }

      &:hover {
        &::after {
          height: 1px;
          width: 100%;
          background: ${(props) => props.theme.blue};
          transition: width 200ms;
        }
      }
    }
  }
`

export const GithubInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  bottom: 0;
  color: ${(props) => props.theme['base-subtitle']};

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`
