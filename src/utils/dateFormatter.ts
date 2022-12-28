import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function DistanceToNow(ISOString: string) {
  return formatDistanceToNow(new Date(ISOString), {
    addSuffix: true,
    locale: ptBR,
  })
}
