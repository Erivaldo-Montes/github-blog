import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;

  span {
    font-size: 2rem;
    color: ${(props) => props.theme['base-span']};
  }
  img {
    opacity: 0.6;
    width: 15rem;
  }
`
