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
import { Post } from './Post'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src="https://github.com/Erivaldo-Montes.png" alt="" />
        <ProfileInfo>
          <header>
            <span>User Name</span>
            <a href="#">
              GITHUB <ArrowSquareOut size={12} weight="bold" />
            </a>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            aliquam perferendis ipsam, a, esse repudiandae vel illum id earum
            amet recusandae dolorem. Provident dolore eaque sapiente vel magni
            doloremque vitae?
          </p>
          <GithubInfo>
            <span>
              <img src={githubImg} alt="" />
              github
            </span>
            <span>
              <img src={followersImg} alt="" />
              empresa
            </span>
            <span>
              <img src={buildImg} alt="" />
              seguidores
            </span>
          </GithubInfo>
        </ProfileInfo>
      </ProfileContainer>
      <SearchPosts />
      <PostsContanier>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContanier>
    </HomeContainer>
  )
}
