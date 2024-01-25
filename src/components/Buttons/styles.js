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
  border: 1px solid #2d373b;
  padding: 10px;
  border-radius: 2px;
  background-color: #7fa99b;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`

export const ClearButton = styled.button`
  border: none;
  padding: 1em;
  color: black;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #2f440f;
  }
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

  button {
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const SearchInput = styled.input`
  padding: 1em;
  border-radius: 2px;
  border: 1px solid #2d373b;
  background-color: #fff;
  outline: none;
  width: 50%;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`