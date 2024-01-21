import db from "../db"

// Excepts a string for a query and queries the database. Returns the rows from the query.
export const generalDbQuery = async (query) => {
  try {
    const { rows } = await db.query(query)
    return rows
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}