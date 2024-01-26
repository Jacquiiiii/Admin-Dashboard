import { getDataFromDb } from "../../../db/utils/dbGet"

// Retrieves users from the database filtered by params with login credentials
export const getUsersWithLoginCreds = async (params) => getDataFromDb('users', params)