import { handleGetUsers, handlePostToFilterUsers, handleDeleteUser, handlePostToAddUser, handleUpdateRole } from "@/apis/users/usersController"

const usersHandler = (req, res) => {
  if (req.method === 'GET') {
    handleGetUsers(req, res)
  } else if (req.method === 'POST') {
    if (req.body && req.body.requestType === 'filter user') {
      handlePostToFilterUsers(req, res)
    } 
    if (req.body && req.body.requestType === 'add user') {
      handlePostToAddUser(req, res)
    }
  } else if (req.method === 'DELETE') {
    handleDeleteUser(req, res)
  } else if (req.method === 'PATCH') {
    handleUpdateRole(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default usersHandler