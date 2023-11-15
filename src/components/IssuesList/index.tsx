import { Link } from 'react-router-dom'
import { formatDescription } from '../../utils/formatDescription'
import { getDate } from '../../utils/getDate'
import { IssueCard, IssuesContainerList } from './styles'

interface IssuesProps {
  title: string
  body: string
  id: number
  created_at: Date
  number: number
}

interface IssuesListProps {
  issues: IssuesProps[]
}

export default function IssuesList({ issues }: IssuesListProps) {
  return (
    <IssuesContainerList>
      {issues.map((issue) => (
        <Link
          to={issue.number.toString()}
          key={issue.id}
          target="_blank"
          rel="noreferrer noopener"
        >
          <IssueCard>
            <header>
              <h3>{issue.title}</h3>
              <span>{getDate(issue.created_at).toString()}</span>
            </header>
            <p>{formatDescription(issue.body)}</p>
          </IssueCard>
        </Link>
      ))}
    </IssuesContainerList>
  )
}
