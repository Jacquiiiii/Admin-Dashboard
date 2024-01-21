import { deleteBook, getBooks, updateBook, addBook } from "./booksService"

// Handles HTTP GET request to retrieve books data from database
export const handleGetBooks = async (req, res) => {
  try {
    const books = await getBooks()

    if (!books) {
      return res.status(404).json({ error: 'No books found.' })
    }

    console.log(`Successful GET request! There are ${books.length} books in the database`)
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot GET books.' })
  }
}

// Handles HTTP DELETE request to delete a book from the database
export const handleDeleteBook = async (req, res) => {
  try {
    const book = await deleteBook(req.body.data)

    if (!book) {
      return res.status(404).json({ error: 'No book found.' })
    }

    console.log(`Successful DELETE request!`)
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot DELETE book.' })
  }
}

// Handles HTTP PATCH request to update a book's data in the database
export const handleUpdateBook = async (req, res) => {
  try {
    const book = await updateBook(req.body.data)

    if (!book) {
      return res.status(404).json({ error: 'No book found.' })
    }

    res.status(200).json(book)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while updating the book.' })
  }
}

// Handles HTTP POST request to add a book to the database
export const handleAddBook = async (req, res) => {
  try {
    const book = await addBook(req.body.data)

    if (!book) {
      return res.status(404).json({ error: 'No book found.' })
    }

    res.status(200).json(book)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while adding the book.' })
  }
}