import { addDataToDb } from "../../../db/utils/dbPost"
import { getDataFromDb } from "../../../db/utils/dbGet"
import { removeDataFromDb } from "../../../db/utils/dbDelete"
import { updateDataInDb } from "../../../db/utils/dbUpdate"

// Retrieves all users from the database
export const getUsers = async () => getDataFromDb('users', {
  columns: 'users.id, users.user_name, users.age, users.email, users.address, users.user_role'
})

// Retrieves users from the database filtered by params
export const getFilteredUsers = async (params) => getDataFromDb('users', params)

// Adds a user to the database
export const addUser = async (params) => addDataToDb('users', params)

// Deletes a user from the database
export const deleteUser = async (params) => removeDataFromDb('users', params)

// Updates a role in the database
export const updateRole = async (params) => updateDataInDb('users', params)
