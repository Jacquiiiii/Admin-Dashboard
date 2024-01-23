import { DataContext } from "@/context/DataContext"
import { addData } from "@/utils/addData"
import { deleteData } from "@/utils/deleteData"
import { fetchAllData } from "@/utils/fetchAllData"
import { fetchData } from "@/utils/fetchData"
import { updateData } from "@/utils/updateData"
import { useContext, useState } from "react"

export const useDataTable = (caption) => {
  // Get current date and time for updating newRowData for a review
  const currentDate = new Date()
  const formattedDate = currentDate.toISOString().split('T')[0]
  
  const [showAddRow, setShowAddRow] = useState(false)
  const [newRowData, setNewRowData] = useState(caption === 'reviews' ? { review_date: formattedDate } : {})
  const { setData } = useContext(DataContext)

  // Gets all data from the database and sets it to the data state
  // TODO: Add error handling
  const setAndFetchAllData = async () => {
    const data = await fetchAllData()
    console.log(data)
    setData({
      users: data.users,
      books: data.books,
      reviews: data.reviews,
    })
  }

  // Handles button click to delete row(s) from the database and refresh the data
  // TODO: Add error handling
  const handleDelete = async (id) => {
    // If table is users, delete associated services first then delete user
    if (caption === 'users') {
      await deleteData('/api/reviews', { data: { user_id: id } })
      const response = await deleteData('/api/users', { data: { id: id } })

      if (response && response.length > 0) {
        setAndFetchAllData()
      }
    } else {
      const response = await deleteData(`/api/${caption}`, { data: { id: id } })

      if (response && response.length > 0) {
        setAndFetchAllData()
      }
    }
  }

  // Handles button click to add data to the database and refresh the data
  // TODO: Add error handling and data validation
  const handleSave = async (tableName, newRowData) => {
    let response
    if (tableName === 'users') {
      response = await addData(`/api/${tableName}`, { 
        userData: newRowData,
        requestType: 'add user'
      })
    } else {
      response = await addData(`/api/${tableName}`, { data: newRowData })
    }

    if (response) {
      setAndFetchAllData()
    }

    setShowAddRow(false)
    setNewRowData({})
  }

  // Handles button click to update inventory status and refresh the data
  // TODO: Add error handling
  const handleInventoryStatusUpdate = async (id, newStatus) => {
    const response = await updateData('/api/books', { 
      data: { 
        id: id,
        column: 'inventory_status',
        newData: newStatus
      } 
    })

    if (response && response.length > 0) {
      const books = await fetchData('/api/books')
      setData(prev => ({...prev, books: books}))
    }
  }

  return { 
    handleDelete, 
    handleSave,
    handleInventoryStatusUpdate,
    showAddRow, 
    setShowAddRow, 
    newRowData, 
    setNewRowData 
  }
}