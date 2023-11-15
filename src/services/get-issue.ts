import { api } from './api'

export async function getIssue(id: number) {
  // Example
  //  https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1

  const data = await api.get(`/repos/nthbaldez/github-blog/issues/${id}`)
  return data
}
