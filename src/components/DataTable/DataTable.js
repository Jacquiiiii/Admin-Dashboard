import { useState } from "react"
import { TableWrapper, StyledTable, Caption, StyledTh, StyledTd, TableButton, UpdateButtonsContainer, AddWrapper, AddInput, AddButton, SaveButton } from "./styles"
import { deleteData } from "@/utils/deleteData"
import { fetchData } from "@/utils/fetchData"
import { updateData } from "@/utils/updateData"
import { addData } from "@/utils/addData"
import { columnMap, inventoryStatuses } from "@/constants/constants"

const DataTable = ({ data, caption, setUsers, setBooks, setReviews }) => {
  // Get current date and time for updating newRowData for a review
  const currentDate = new Date()
  const formattedDate = currentDate.toISOString().split('T')[0]
  
  const [showAddRow, setShowAddRow] = useState(false)
  const [newRowData, setNewRowData] = useState(caption === 'reviews' ? { review_date: formattedDate } : {})
  const sortedData = data.sort((a, b) => a.id - b.id)
  const headings = Object.keys(sortedData[0])

  const getUpdatedData = async () => {
    const users = await fetchData('/api/users')
    const books = await fetchData('/api/books')
    const reviews = await fetchData('/api/reviews?type=enhanced')

    setUsers(users)
    setBooks(books)
    setReviews(reviews)
  }

  const handleDelete = async (row, table) => {
    if (table === 'users') {
      await deleteData('/api/reviews', { data: { user_id: row.id } })
      const response = await deleteData('/api/users', { data: { id: row.id } })

      if (response) {
        getUpdatedData()
      }
    } else {
      const response = await deleteData(`/api/${table}`, { data: { id: row.id } })

      if (response) {
        getUpdatedData()
      }
    }
  }

  const handleInventoryStatusUpdate = async (id, newStatus) => {
    const response = await updateData('/api/books', { 
      data: { 
        id: id,
        column: 'inventory_status',
        newData: newStatus
      } 
    })

    if (response) {
      getUpdatedData()
    }
  }

  const handleSave = async (tableName) => {
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
      getUpdatedData()
    }

    setShowAddRow(false)
    setNewRowData({})
  }

  return (
    <TableWrapper>
      <StyledTable>
        <Caption>
          <div>
            {caption}
            {caption !== 'search results' &&
              <AddButton onClick={() => setShowAddRow(!showAddRow)}>{showAddRow ? 'x' : '+'}</AddButton>
            }
            {showAddRow && 
              <AddWrapper>
                {columnMap[caption].map((column, index) => {
                  if (column !== 'review_date') {
                    return (
                      <AddInput
                        key={index} 
                        type="text" 
                        placeholder={column}
                        value={newRowData[column]} 
                        onChange={e => setNewRowData({ ...newRowData, [column]: e.target.value })}
                      />
                    )
                  }
                })}
                <SaveButton onClick={() => handleSave(caption)}>
                  Save
                </SaveButton>
              </AddWrapper>
            }
          </div>
        </Caption>
        <thead>
          <tr>
            {headings.map((heading, index) => <StyledTh key={index}>{heading}</StyledTh>)}
            {caption === 'books' && caption !== 'search results' &&
              <StyledTh colSpan={headings.length}>Update Inventory Status</StyledTh>
            }
            { caption !== 'books' && caption !== 'search results' &&
              <StyledTh colSpan={headings.length}></StyledTh>
            }
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              {Object.entries(row).map(([key, value], i) => 
                key === 'book_img' && value ? 
                <StyledTd key={i}>
                  <a href={value} target="_blank" rel="noopener noreferrer">Link</a>
                </StyledTd> : 
                <StyledTd key={i}>{value}</StyledTd>
              )}
              {caption === 'books' && caption !== 'search results' &&
                <StyledTd colSpan={headings.length}>
                  <UpdateButtonsContainer>
                    {inventoryStatuses.map((status, index) => (
                      <TableButton key={index} onClick={() => handleInventoryStatusUpdate(row.id, status)}>{status}</TableButton>
                    ))}
                  </UpdateButtonsContainer>
                </StyledTd>
              }
              { caption !== 'books' && caption !== 'search results' &&
                <StyledTd colSpan={headings.length}>
                  <TableButton onClick={() => handleDelete(row, caption)}>Delete</TableButton>
                </StyledTd>
              }
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}

export default DataTable