import { fetchData } from "./fetchData"

export const fetchAllData = async () => {
  const users = await fetchData('/api/users')
  const books = await fetchData('/api/books')
  const reviews = await fetchData('/api/reviews')

  return { users, books, reviews }
}