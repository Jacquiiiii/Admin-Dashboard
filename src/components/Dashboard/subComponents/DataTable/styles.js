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
  border: 1px solid #2d373b;
  border-collapse: collapse;
  max-width: 100%;
  min-width: 100%;
  font-size: 16px;
  background-color: white;
  color: black;

  tr:hover {
    background-color: #e4ece9;
  }
`

export const Caption = styled.caption`
  background-color: #7fa99b;
  border-top: 1px solid #2d373b;
  border-left: 1px solid #2d373b;
  border-right: 1px solid #2d373b;
  color: black;
  text-align: left;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
`

export const StyledTh = styled.th`
  background-color: #e4ece9;
  border: 1px solid #2d373b;
  padding: 8px;
  color: black;
  text-align: left;
`

export const StyledTd = styled.td`
  padding: 6px;
  text-align: left;
  border: 1px solid #2d373b;
  color: black;

  a {
    color: black;
    
    &:hover {
      color: red;
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
  font-size: 16px;
  background: none;
  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;
  padding: 2px;
  color: black;

  &:hover {
    border: 1px solid #2d373b;
    border-radius: 2px;
    background-color: rgb(9, 40, 55);
    color: whitesmoke;
  }
`

export const AddInput = styled.input`
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #2d373b;
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
  color: black;
  border: none;
  margin-left: 10px;
  font-size: 20px;
`

export const SaveButton = styled.button`
  border: 1px solid #2d373b;
  padding: 7px 10px;
  border-radius: 2px;
  background-color: rgb(9, 40, 55);
  color: whitesmoke;
  cursor: pointer;
  font-size: 16px;
`