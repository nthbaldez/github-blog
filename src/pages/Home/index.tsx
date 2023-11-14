import CardProfile from '../../components/CardProfile'
import IssuesList from '../../components/IssuesList'
import SearchForm from '../../components/SearchForm'
import { SectionContainer, SectionContent } from './styles'

export default function Home() {
  return (
    <SectionContainer>
      <SectionContent>
        <CardProfile />
        <SearchForm />
        <IssuesList />
      </SectionContent>
    </SectionContainer>
  )
}
