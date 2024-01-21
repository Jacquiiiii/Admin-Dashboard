import { addDataToDb } from "../../../db/utils/dbPost"
import { getDataFromDb } from "../../../db/utils/dbGet"
import { removeDataFromDb } from "../../../db/utils/dbDelete"

// Retrieves all users from the database
export const getUsers = async () => getDataFromDb('users')

// Retrieves users from the database filtered by params
export const getFilteredUsers = async (params) => getDataFromDb('users', params)

// Adds a user to the database
export const addUser = async (params) => addDataToDb('users', params)

// Deletes a user from the database
export const deleteUser = async (params) => removeDataFromDb('users', params)