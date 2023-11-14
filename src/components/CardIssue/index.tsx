import { NavLink } from 'react-router-dom'
import { CardIssueContainer } from './styles'
import { FaCalendarDay, FaComment, FaGithub } from 'react-icons/fa'

export default function CardIssue() {
  return (
    <CardIssueContainer>
      <header>
        <NavLink to="/">Voltar</NavLink>
        <NavLink to="https://github.com/nthbaldez">Ver no Github</NavLink>
      </header>

      <h2>JavaScript data types and data structures</h2>

      <footer>
        <a href="https://github.com/nthbaldez">
          <FaGithub color="#3A536B" size={18} />
          <span>nthbaldez</span>
        </a>

        <span>
          <FaCalendarDay color="#3A536B" size={18} />
          Há 1 dia
        </span>

        <span>
          <FaComment color="#3A536B" size={18} />4 comentários
        </span>
      </footer>
    </CardIssueContainer>
  )
}
