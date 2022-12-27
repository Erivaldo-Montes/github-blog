import notFoundImg from '../../assets/not-found-3.svg'
import { NotFoundContainer } from './styles'

export function NotFound() {
  return (
    <NotFoundContainer>
      <img src={notFoundImg} alt="" />
      <span>sem resultados, tente pesquisar outra coisa</span>
    </NotFoundContainer>
  )
}
