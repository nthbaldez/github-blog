import { SearchFormContainer } from './styles'

interface SearchFormProps {
  quantityOfArticles: number
}

export default function SearchForm({ quantityOfArticles }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <div>
        <h3>Publicações</h3>
        {quantityOfArticles === 1 ? (
          <span>1 publicação</span>
        ) : (
          <span>{quantityOfArticles} publicações</span>
        )}
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
