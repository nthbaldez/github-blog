import { useEffect, useState } from 'react'
import { getIssue } from '../../services/get-issue'
import { IssueArticleContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import CardIssue from '../CardIssue'

interface IssueArticleProps {
  id: string | undefined
}
export default function IssueArticle({ id }: IssueArticleProps) {
  const [article, setArticle] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    async function getIssueData() {
      const data = await getIssue(+id)
      setArticle(data?.data.body)
      setTitle(data?.data.title)
    }
    getIssueData()
  }, [id])

  return (
    <IssueArticleContainer>
      <CardIssue title={title} />
      <ReactMarkdown>{article}</ReactMarkdown>
    </IssueArticleContainer>
  )
}
