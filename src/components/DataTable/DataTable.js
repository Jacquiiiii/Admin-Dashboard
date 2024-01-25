import { TableWrapper, StyledTable, Caption, StyledTh, StyledTd, TableButton, UpdateButtonsContainer, AddWrapper, AddInput, AddButton, SaveButton } from "./styles"
import { columnMap, inventoryStatuses } from "@/constants/constants"
import { DataContext } from "@/context/DataContext"
import { useDataTable } from "@/hooks/useDataTable"
import { useContext } from "react"

const DataTable = ({ caption, tableData }) => {
  const sortedData = tableData.sort((a, b) => a.id - b.id)
  const headings = Object.keys(sortedData[0])
  const { data } = useContext(DataContext)

  const {
    handleDelete,
    handleSave,
    handleInventoryStatusUpdate,
    showAddRow,
    setShowAddRow,
    newRowData,
    setNewRowData
  } = useDataTable(caption)

  return (
    <TableWrapper>
      <StyledTable>

        <Caption>
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span>{caption}</span>
              {caption !== 'search results' &&
                <AddButton onClick={() => setShowAddRow(!showAddRow)}>{showAddRow ? 'x' : '+'}</AddButton>
              }
            </div>
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
                <SaveButton onClick={() => handleSave(caption, newRowData)}>
                  Save
                </SaveButton>
              </AddWrapper>
            }
          </div>
        </Caption>

        <thead>
          <tr>
            {headings.map((heading, index) => <StyledTh key={index}>{heading}</StyledTh>)}
            { caption === 'users' &&
              <StyledTh colSpan={headings.length}>Number of reviews</StyledTh>
            }
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
              {caption === 'users' &&
                <StyledTd colSpan={headings.length}>
                  {data.reviews.filter((review) => review.user_id === row.id).length}
                </StyledTd>
              }
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
                  <TableButton onClick={() => handleDelete(row.id)}>Delete</TableButton>
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