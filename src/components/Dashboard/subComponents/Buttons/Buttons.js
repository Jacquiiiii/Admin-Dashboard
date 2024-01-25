import { useState } from "react"
import { Button, ButtonWrapper, ClearButton, SearchWrapper,SearchButtonWrapper, SearchInput } from "./styles"
import { useContext } from "react"
import { DataContext } from "@/context/DataContext"

const Buttons = ({ searchResults, setSearchResults }) => {
  const { data, setShow } = useContext(DataContext)
  const [showFilters, setShowFilters] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [input, setInput] = useState('')

  const handleShowTable = (key) => {
    setShow({
      users: false,
      books: false,
      reviews: false,
      results: false,
      [key]: true
    })
  }

  const handleClear = () => {
    setShow({
      users: true,
      books: true,
      reviews: true,
      results: false,
    })
    setShowFilters(false)
    setShowSearch(false)
    setInput('')
    setSearchResults(null)
    setErrorMessage('')
  }

  const filterData = (data, searchTerm) => {
    const filtered = data.filter(row => Object.values(row).some(value => value === searchTerm))
    return filtered
  }

  const handleSubmitSearch = (searchTerm) => {
    setSearchResults(null)

    const usersData = filterData(data.users, searchTerm)
    const reviewsData = filterData(data.reviews, searchTerm)
    const booksData = filterData(data.books, searchTerm)

    setSearchResults({ users: usersData, books: booksData, reviews: reviewsData })

    if (searchResults && searchResults.users.length === 0 && searchResults.books.length === 0 && searchResults.reviews.length === 0 ) {
      setErrorMessage('No search results found. Please try again.')
    } else {
      setInput('')
      setErrorMessage('')
      setShow({
        users: false,
        books: false,
        reviews: false,
        results: true,
      })
    }
  }

  return (
    <ButtonWrapper>
      {!showFilters && !showSearch &&
        <>
          <Button onClick={() => setShowFilters(true)}>Filter</Button>
          <Button onClick={() => setShowSearch(true)}>Search</Button>
        </>
      }
      {showFilters &&
        <>
          <Button onClick={() => handleShowTable('users')}>Users</Button>
          <Button onClick={() => handleShowTable('books')}>Books</Button>
          <Button onClick={() => handleShowTable('reviews')}>Reviews</Button>
          <ClearButton onClick={handleClear}>✖︎</ClearButton>
        </>
      }
      {errorMessage && <p>{errorMessage}</p>}
      {showSearch &&
        <SearchWrapper>
          <SearchInput type="text" placeholder="Enter search term" value={input} onChange={e => setInput(e.target.value)}/>
          <SearchButtonWrapper>
            <Button onClick={() => handleSubmitSearch(input)}>Submit</Button>
            <ClearButton onClick={handleClear}>✖︎</ClearButton>
          </SearchButtonWrapper>
        </SearchWrapper>
      }
    </ButtonWrapper>
  )
}

export default Buttons