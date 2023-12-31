import { useParams } from 'react-router-dom'
import IssueArticle from '../../components/IssueArticle'
import { SectionContainer, SectionContent } from './styles'

export default function IssuePage() {
  const { issueId } = useParams()

  return (
    <SectionContainer>
      <SectionContent>
        <IssueArticle id={issueId} />
      </SectionContent>
    </SectionContainer>
  )
}
