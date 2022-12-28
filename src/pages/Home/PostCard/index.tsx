import { PostContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { useContext, useEffect, useState } from 'react'
import { DistanceToNow } from '../../../utils/dateFormatter'
import { postContext } from '../../../contexts/PostContext'

interface PostsProps {
  title: string
  body: string
  number: number
  createdAt: string
}

export function PostCard({ title, body, createdAt, number }: PostsProps) {
  const [bodyFormat, setBody] = useState('')

  useEffect(() => {
    setBody((state) => {
      const bodyString = body.substring(0, 105).replace('**', '').concat(' ...')

      return bodyString
    })
  }, [body])

  return (
    <PostContainer
      to={`post/${number}/${title.toLocaleLowerCase().replace(/ /g, '-')}`}
    >
      <header>
        <span>
          <ReactMarkdown>{title}</ReactMarkdown>
        </span>
        <span>
          {' '}
          <ReactMarkdown>{DistanceToNow(createdAt)}</ReactMarkdown>
        </span>
      </header>
      <p>
        <ReactMarkdown>{bodyFormat}</ReactMarkdown>
      </p>
    </PostContainer>
  )
}
