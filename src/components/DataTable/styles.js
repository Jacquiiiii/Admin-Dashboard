import styled from "styled-components"

export const TableWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  min-width: 90%;
  overflow-x: auto;
  margin: 1em auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const StyledTable = styled.table`
  border: 1px solid #5f6769;
  font-family: monospace;
  max-width: 100%;
  min-width: 100%;
  font-size: 16px;
`

export const Caption = styled.caption`
  background-color: #2c5d63;
  color: white;
  text-align: left;
  padding: 10px;
  font-size: 20px;
`

export const StyledTh = styled.th`
  background-color: #615E66;
  border: 1px solid #5f6769;
  color: white;
  padding: 8px;
  text-align: left;
`

export const StyledTd = styled.td`
  padding: 6px;
  text-align: left;
  border: 1px solid #5f6769;

  a {
    color: black;
    &:hover {
      color: rgb(146, 73, 88);
    }
  }
`

export const UpdateButtonsContainer = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 970px) {
    flex-direction: column;
  }
`

export const TableButton = styled.button`
  font-family: monospace;
  font-size: 16px;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px;
  color: black;
  &:hover {
    color: rgb(146, 73, 88);
    border-color: rgb(146, 73, 88);
  }
`

export const AddInput = styled.input`
  font-family: monospace;
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;
`

export const AddWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  margin: 15px 0;
`

export const AddButton = styled.button`
  background: none;
  cursor: pointer;
  color: whitesmoke;
  font-family: monospace;
  border: none;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    color: #32e0b9;
  }
`

export const SaveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: whitesmoke;
  font-weight: bold;
  font-size: 16px;
  font-family: monospace;
  &:hover {
    color: #32e0b9;
  }
`