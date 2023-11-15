import { formatDescription } from '../../utils/formatDescription'
import { IssueCard, IssuesContainerList } from './styles'

interface IssuesProps {
  title: string
  body: string
}

interface IssuesListProps {
  issues: IssuesProps[]
}

export default function IssuesList({ issues }: IssuesListProps) {
  return (
    <IssuesContainerList>
      {issues.map((issue) => (
        <IssueCard key={issue.title}>
          <header>
            <h3>{issue.title}</h3>
            <span>Há 3 dias</span>
          </header>
          <p>{formatDescription(issue.body)}</p>
        </IssueCard>
      ))}
    </IssuesContainerList>
  )
}
