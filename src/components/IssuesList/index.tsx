import { Link } from 'react-router-dom'
import { formatDescription } from '../../utils/formatDescription'
import { getDate } from '../../utils/getDate'
import { IssueCard, IssuesContainerList } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'

export default function IssuesList() {
  const { issues } = useContext(IssuesContext)
  console.log(issues)
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
