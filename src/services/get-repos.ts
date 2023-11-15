import { api } from './api'

export async function getRepos() {
  const data = await api.get('/users/nthbaldez')

  return data?.data
}
