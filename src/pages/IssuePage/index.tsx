import { useParams } from 'react-router-dom'
import CardIssue from '../../components/CardIssue'
import IssueArticle from '../../components/IssueArticle'
import { SectionContainer, SectionContent } from './styles'

export default function IssuePage() {
  const { issueId } = useParams()

  return (
    <SectionContainer>
      <SectionContent>
        <CardIssue />
        <IssueArticle id={issueId} />
      </SectionContent>
    </SectionContainer>
  )
}
