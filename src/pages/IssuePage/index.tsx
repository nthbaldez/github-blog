import CardIssue from '../../components/CardIssue'
import IssueArticle from '../../components/IssueArticle'
import { SectionContainer, SectionContent } from './styles'

export default function IssuePage() {
  return (
    <SectionContainer>
      <SectionContent>
        <CardIssue />
        <IssueArticle />
      </SectionContent>
    </SectionContainer>
  )
}
