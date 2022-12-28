import { Link, useParams } from 'react-router-dom'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import githubImg from '../../assets/github_icon.svg'
import calendarImg from '../../assets/calendar_icon.svg'
import commentIcon from '../../assets/comment_icon.svg'
import {
  PublicationContainer,
  PublicationInfo,
  PublicationInfoHeader,
  Info,
  Content,
} from './styles'
import { useContext, useEffect } from 'react'
import { postContext } from '../../contexts/PostContext'
import { DistanceToNow } from '../../utils/dateFormatter'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export function Post() {
  const { showPost, getPostComplete } = useContext(postContext)
  const { slug } = useParams()

  useEffect(() => {
    getPostComplete(Number(slug))
  }, [slug])

  return (
    <PublicationContainer>
      <PublicationInfo>
        <PublicationInfoHeader>
          <Link to={'/'}>
            <CaretLeft size={12} weight="bold" />
            VOLTAR
          </Link>
          <a href="https://github.com">
            VER NO GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </PublicationInfoHeader>
        <span>{showPost.title}</span>
        <Info>
          <span>
            <img src={githubImg} alt="" />
            {showPost.user.login}
          </span>
          <span>
            <img src={calendarImg} alt="" />
            {DistanceToNow(showPost.created_at)}
          </span>
          <span>
            <img src={commentIcon} alt="" />
            {showPost.comments} comentários
          </span>
        </Info>
      </PublicationInfo>
      <Content>
        <ReactMarkdown>{showPost.body}</ReactMarkdown>
      </Content>
    </PublicationContainer>
  )
}
