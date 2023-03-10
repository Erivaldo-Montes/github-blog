import githubImg from '../../assets/github_icon.svg'
import followersImg from '../../assets/followers_icon.svg'
import buildImg from '../../assets/build_icon.svg'
import { ArrowSquareOut } from 'phosphor-react'
import {
  ProfileContainer,
  HomeContainer,
  ProfileInfo,
  GithubInfo,
  PostsContanier,
} from './styles'
import { SearchPosts } from '../../components/SearchPosts'
import { PostCard } from './PostCard'
import { useContext } from 'react'
import { postContext } from '../../contexts/PostContext'
import { NotFound } from '../../components/notFound'

export function Home() {
  const { posts, userGithubProfile } = useContext(postContext)

  return (
    <HomeContainer>
      <ProfileContainer>
        <img src="https://github.com/Erivaldo-Montes.png" alt="" />
        <ProfileInfo>
          <header>
            <span>{userGithubProfile.name}</span>
            <a href={`http://github.com/${userGithubProfile.login}`}>
              GITHUB
              <ArrowSquareOut size={12} weight="bold" />
            </a>
          </header>
          <p>{userGithubProfile.bio}</p>
          <GithubInfo>
            <span>
              <img src={githubImg} alt="" />
              <span>{userGithubProfile.login}</span>
            </span>
            <span>
              <img src={buildImg} alt="" />
              <span>
                {userGithubProfile.company
                  ? userGithubProfile.company
                  : 'sem empresa'}
              </span>
            </span>
            <span>
              <img src={followersImg} alt="" />
              <span>{userGithubProfile.followers} seguidores</span>
            </span>
          </GithubInfo>
        </ProfileInfo>
      </ProfileContainer>
      <SearchPosts />
      {posts.length !== 0 ? (
        <PostsContanier>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                body={post.body}
                createdAt={post.created_at}
                number={post.number}
                title={post.title}
              />
            )
          })}
        </PostsContanier>
      ) : (
        <NotFound />
      )}
    </HomeContainer>
  )
}
