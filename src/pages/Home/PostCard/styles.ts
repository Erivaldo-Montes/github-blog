import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostContainer = styled(Link)`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  max-width: 26rem;
  max-height: 16.25rem;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    span:nth-child(1) {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    span:nth-child(2) {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      white-space: nowrap;
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};

    display: flex;
    align-items: baseline;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 100ms, transform 200ms;
    cursor: pointer;
    transform: scale(1.01);
  }
`
