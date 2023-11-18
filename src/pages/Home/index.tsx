import { useContext, useEffect, useState } from 'react'
import CardProfile from '../../components/CardProfile'
import IssuesList from '../../components/IssuesList'
import SearchForm from '../../components/SearchForm'
import { SectionContainer, SectionContent } from './styles'
import { getUser } from '../../services/get-user'
import { IssuesContext } from '../../contexts/IssuesContext'

interface UserDataProps {
  login: string
  avatarUrl: string
  followers: number
  company: string
  name: string
  htmlUrl: string
}

export default function Home() {
  const [userData, setUserData] = useState({} as UserDataProps)

  const { issues } = useContext(IssuesContext)

  useEffect(() => {
    async function getUserData() {
      const data = await getUser()

      setUserData({
        login: data.login,
        avatarUrl: data.avatar_url,
        followers: data.followers,
        company: data.company,
        name: data.name,
        htmlUrl: data.html_url,
      })
    }
    getUserData()
  }, [])

  return (
    <SectionContainer>
      <SectionContent>
        <CardProfile {...userData} />
        <SearchForm quantityOfArticles={issues.length} />
        <IssuesList />
      </SectionContent>
    </SectionContainer>
  )
}
