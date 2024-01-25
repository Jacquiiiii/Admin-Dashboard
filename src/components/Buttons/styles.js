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
  padding: 10px;
  border-radius: 5px;
  background-color: #092837;
  color: whitesmoke;
  font-family: monospace;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    transform: scale(0.99);
    background-color: #1c5f7f;
  }
`

export const ClearButton = styled.button`
  border: none;
  padding: 1em;
  border: none;
  background-color: transparent;
  font-family: monospace;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(0.99);
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
    transition: transform 0.1s ease;

    &:hover {
      transform: scale(0.99);
    }
  }

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