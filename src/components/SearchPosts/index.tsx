import { SearchPostsContainer } from './styles'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { postContext } from '../../contexts/PostContext'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DotsThreeOutlineVertical } from 'phosphor-react'

const searchPostsSchema = zod.object({
  textSearch: zod.string(),
})
type SearchPostsInput = zod.infer<typeof searchPostsSchema>

export function SearchPosts() {
  const { register, handleSubmit } = useForm<SearchPostsInput>({
    resolver: zodResolver(searchPostsSchema),
  })
  const { getPostsUser, totalCount } = useContext(postContext)

  async function handleSearchPosts(data: SearchPostsInput) {
    getPostsUser(data.textSearch)
  }

  return (
    <SearchPostsContainer>
      <header>
        <span>Publicações</span>
        <span>{totalCount} Publicações</span>
      </header>
      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input placeholder="Busque algo" {...register('textSearch')} />
      </form>
    </SearchPostsContainer>
  )
}
