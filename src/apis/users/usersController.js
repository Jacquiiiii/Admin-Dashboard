import { getUsers, getFilteredUsers, addUser, deleteUser } from "./usersService"

// Handles HTTP GET request to retrieve users data from database
export const handleGetUsers = async (req, res) => {
  try {
    const users = await getUsers()
    if (!users) {
      return res.status(404).json({ error: 'No users found.' })
    }
    console.log(`Successful GET request! There are ${users.length} users in the database`)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot GET users.' })
  }
}

// Handles HTTP POST request to retrieve filtered users data from the database
export const handlePostToFilterUsers = async (req, res) => {
  try {
    const users = await getFilteredUsers(req.body.filters)
    if (!users) {
      return res.status(404).json({ error: 'No users found.' })
    }
    console.log('Successful user filtering POST request!')
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot GET users.' })
  }
}

// Handles HTTP POST request to add a user to the database
export const handlePostToAddUser = async (req, res) => {
  try {
    const users = await addUser(req.body.userData)
    if (!users) {
      return res.status(404).json({ error: 'No users found.' })
    }
    console.log('Successful user adding POST request!')
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot POST user.' })
  }
}

// Handles HTTP DELETE request to delete a user from the database
export const handleDeleteUser = async (req, res) => {
  try {
    const user = await deleteUser(req.body.data)
    if (!user) {
      return res.status(404).json({ error: 'No users found.' })
    }
    console.log('Successful DELETE request!')
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot POST user.' })
  }
}