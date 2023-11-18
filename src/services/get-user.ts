import { api } from './api'

export async function getUser() {
  const data = await api.get('/users/nthbaldez')

  return data?.data
}
