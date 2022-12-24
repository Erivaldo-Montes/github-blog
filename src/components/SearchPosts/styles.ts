import styled from 'styled-components'

export const SearchPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    & > :nth-child(1) {
      font-weight: bold;
      font-size: 1.125rem;
    }

    & > :nth-child(2) {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  textarea {
    margin-top: 1.5rem;
    background: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    resize: none;
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 0.75rem 1rem;
    height: 3.125rem;
    overflow: hidden;
    display: flex;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
