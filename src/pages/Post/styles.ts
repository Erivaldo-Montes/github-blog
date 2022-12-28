import styled from 'styled-components'

export const PublicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  margin: 0 auto;
  position: relative;
  margin-top: calc(5rem - 10.5rem);
`

export const PublicationInfo = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  & > span {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-span']};

  span {
    display: flex;
    gap: 0.5rem;
  }
`

export const PublicationInfoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 0.5rem;

    &::after {
      content: '';
      bottom: 0;
      left: 0;
      position: absolute;
      width: 0px;
      height: 1px;
      background: ${(props) => props.theme.blue};
    }

    &:hover {
      ::after {
        width: 100%;
        transition: width 200ms;
      }
    }
  }
`

export const Content = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2rem 0;
  }

  p {
    margin-top: 1rem;
  }
  padding: 2.5rem 2rem;
  img {
    width: 100%;
  }
`
