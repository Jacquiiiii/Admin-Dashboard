import { getUsersWithLoginCreds } from "./loginService"

// Handles HTTP POST request to filter users data from the database to compare against login credentials passed in through req.body
export const handlePostToCheckLoginCreds = async (req, res) => {
  try {
    const users = await getUsersWithLoginCreds(req.body.filters)
    if (!users) {
      return res.status(404).json({ error: 'No users found.' })
    }
    console.log('Successful user filtering POST request!')
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot GET users.' })
  }
}