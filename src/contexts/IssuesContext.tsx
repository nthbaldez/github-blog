import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface IssuesProps {
  title: string
  body: string
  id: number
  created_at: Date
  number: number
}

interface IssuesContextType {
  issues: IssuesProps[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  async function fetchIssues(query?: string) {
    if (query) {
      const response = await api.get(
        `/search/issues?q=${query} repo:nthbaldez/github-blog`,
      )
      setIssues(response.data.items)
    } else {
      const response = await api.get(
        `/search/issues?q= repo:nthbaldez/github-blog`,
      )

      setIssues(response.data.items)
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
