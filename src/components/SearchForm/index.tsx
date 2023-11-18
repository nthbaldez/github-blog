import { useContext } from 'react'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { IssuesContext } from '../../contexts/IssuesContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface SearchFormProps {
  quantityOfArticles: number
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export default function SearchForm({ quantityOfArticles }: SearchFormProps) {
  const { fetchIssues } = useContext(IssuesContext)
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInput) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onBlur={handleSubmit(handleSearchIssues)}>
      <div>
        <h3>Publicações</h3>
        {quantityOfArticles === 1 ? (
          <span>1 publicação</span>
        ) : (
          <span>{quantityOfArticles} publicações</span>
        )}
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
