import { useEffect, useState } from 'react'
import CardProfile from '../../components/CardProfile'
import IssuesList from '../../components/IssuesList'
import SearchForm from '../../components/SearchForm'
import { SectionContainer, SectionContent } from './styles'
import { api } from '../../services/api'

interface UserDataProps {
  login: string
  avatarUrl: string
  followers: number
  company: string
}

export default function Home() {
  const [userData, setUserData] = useState({} as UserDataProps)
  // const [issues, setIssues] = useState<>([])

  useEffect(() => {
    async function getUserData() {
      const data = await api.get('/nthbaldez')

      console.log(data?.data)

      setUserData({
        login: data?.data.login,
        avatarUrl: data?.data.avatar_url,
        followers: data?.data.followers,
        company: data?.data.company,
      })
    }

    getUserData()
  }, [])

  return (
    <SectionContainer>
      <SectionContent>
        <CardProfile {...userData} />
        <SearchForm />
        <IssuesList />
      </SectionContent>
    </SectionContainer>
  )
}
