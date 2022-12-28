import { createContext, ReactNode, useEffect, useState } from 'react'
import { API } from '../lib/axios'

interface PostContextProps {
  children: ReactNode
}

interface PostContextTypes {
  userGithubProfile: any
  posts: any[]
  showPost: any
  totalCount: number
  getPostsUser: (text: string) => void
  getPostComplete: (number: number) => void
}

export const postContext = createContext({} as PostContextTypes)

export function PostContext({ children }: PostContextProps) {
  const [userGithubProfile, setUserGithubProfile] = useState({})
  const [posts, setPosts] = useState([])
  const [showPost, setShowPost] = useState()
  const [totalCount, setTotalCount] = useState(0)

  async function getUserGithubProfile() {
    const response = await API.get('/users/Erivaldo-Montes')
    setUserGithubProfile(response.data)
  }

  async function getPostsUser(text?: string) {
    const response = await API.get(
      `search/issues?q=${
        text ? encodeURI(text) : ''
      }%20repo:Erivaldo-Montes/github-blog`,
    )

    setTotalCount(response.data.total_count)
    setPosts(response.data.items)
  }

  async function getPostComplete(number: number) {
    const response = await API.get(
      `/repos/Erivaldo-Montes/github-blog/issues/${number}`,
    )
    setShowPost((state) => {
      return response.data
    })
  }

  useEffect(() => {
    getUserGithubProfile()
    getPostsUser()
  }, [])

  return (
    <postContext.Provider
      value={{
        totalCount,
        posts,
        userGithubProfile,
        getPostsUser,
        getPostComplete,
        showPost,
      }}
    >
      {children}
    </postContext.Provider>
  )
}
