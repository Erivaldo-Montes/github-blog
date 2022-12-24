import { SearchPostsContainer } from './styles'

export function SearchPosts() {
  return (
    <SearchPostsContainer>
      <header>
        <span>Publicações</span>
        <span>6 publicações</span>
      </header>
      <textarea placeholder="Buscar conteúdo"></textarea>
    </SearchPostsContainer>
  )
}
