import styled from "styled-components"

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 90%;
  margin-bottom: 20px;
`

export const Button = styled.button`
  border: none;
  padding: 1em;
  border-radius: 5px;
  background-color: #2c5d63;
  color: whitesmoke;
  font-family: monospace;
  cursor: pointer;
  font-size: 16px;
`

export const ClearButton = styled.button`
  border: none;
  padding: 1em;
  border-radius: 5px;
  background-color: #2c5d63;
  color: whitesmoke;
  font-family: monospace;
  cursor: pointer;
  width: 45px;
`

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

export const SearchButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px; 
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const SearchInput = styled.input`
  font-family: monospace;
  padding: 1em;
  border-radius: 5px;
  border-color: #2c5d63;
  background-color: #fff;
  border-width: 1px;
  outline: none;
  width: 50%;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`