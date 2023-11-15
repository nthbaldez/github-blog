import { useEffect, useState } from 'react'
import { getIssue } from '../../services/get-issue'
import { IssueArticleContainer } from './styles'
import Markdown from 'react-markdown'
import ReactMarkdown from 'react-markdown'

interface IssueArticleProps {
  id: string | undefined
}
export default function IssueArticle({ id }: IssueArticleProps) {
  const [article, setArticle] = useState('')

  useEffect(() => {
    async function getIssueData() {
      const data = await getIssue(+id)
      setArticle(data?.data.body)
      console.log(data)
    }
    getIssueData()
  }, [])

  return (
    <IssueArticleContainer>
      <ReactMarkdown>{article}</ReactMarkdown>
    </IssueArticleContainer>
  )
}
