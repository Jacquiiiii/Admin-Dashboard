import { handleAddBook, handleGetBooks, handleDeleteBook, handleUpdateBook } from "@/apis/books/booksController"

const booksHandler = (req, res) => {
  if (req.method === 'GET') {
    handleGetBooks(req, res)
  } else if (req.method === 'DELETE') {
    handleDeleteBook(req, res)
  } else if (req.method === 'PATCH') {
    handleUpdateBook(req, res)
  } else if (req.method === 'POST') {
    handleAddBook(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default booksHandler