import { formatDescription } from '../../utils/formatDescription'
import { getDate } from '../../utils/getDate'
import { IssueCard, IssuesContainerList } from './styles'

interface IssuesProps {
  title: string
  body: string
  id: number
  created_at: Date
}

interface IssuesListProps {
  issues: IssuesProps[]
}

export default function IssuesList({ issues }: IssuesListProps) {
  return (
    <IssuesContainerList>
      {issues.map((issue) => (
        <IssueCard key={issue.id}>
          <header>
            <h3>{issue.title}</h3>
            <span>{getDate(issue.created_at).toString()}</span>
          </header>
          <p>{formatDescription(issue.body)}</p>
        </IssueCard>
      ))}
    </IssuesContainerList>
  )
}
