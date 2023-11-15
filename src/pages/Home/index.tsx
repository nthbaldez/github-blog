import { useEffect, useState } from 'react'
import CardProfile from '../../components/CardProfile'
import IssuesList from '../../components/IssuesList'
import SearchForm from '../../components/SearchForm'
import { SectionContainer, SectionContent } from './styles'
import { getRepos } from '../../services/get-repos'
import { getIssues } from '../../services/get-issues'

interface UserDataProps {
  login: string
  avatarUrl: string
  followers: number
  company: string
  name: string
  htmlUrl: string
}

interface IssuesPromiseProps {
  title: string
  body: string
  id: number
  created_at: Date
}

export default function Home() {
  const [userData, setUserData] = useState({} as UserDataProps)
  const [issues, setIssues] = useState<IssuesPromiseProps[]>([])

  useEffect(() => {
    async function getUserData() {
      const data = await getRepos()

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

  useEffect(() => {
    async function getIssuesData() {
      const data = await getIssues()
      console.log(data)

      data?.items.forEach((item: IssuesPromiseProps) => {
        const issue = {
          title: item.title,
          body: item.body,
          id: item.id,
          created_at: item.created_at,
        }

        setIssues([...issues, issue])
      })
    }

    getIssuesData()
  }, [])

  return (
    <SectionContainer>
      <SectionContent>
        <CardProfile {...userData} />
        <SearchForm />
        <IssuesList issues={issues} />
      </SectionContent>
    </SectionContainer>
  )
}
