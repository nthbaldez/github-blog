import { api } from './api'

export async function getIssues() {
  const data = await api.get('/search/issues?q=%20repo:nthbaldez/github-blog')
  return data?.data
}
