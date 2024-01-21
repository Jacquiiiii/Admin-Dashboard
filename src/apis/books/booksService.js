import { getDataFromDb } from "../../../db/utils/dbGet"
import { addDataToDb } from "../../../db/utils/dbPost"
import { updateDataInDb } from "../../../db/utils/dbUpdate"
import { removeDataFromDb } from "../../../db/utils/dbDelete"

// Retrieves book data from the database
export const getBooks = async () => getDataFromDb('books')

// Deletes a book from the database
export const deleteBook = async (params) => removeDataFromDb('books', params)

// Updates a book in the database
export const updateBook = async (params) => updateDataInDb('books', params)

// Adds a book to the database
export const addBook = async (params) => addDataToDb('books', params)