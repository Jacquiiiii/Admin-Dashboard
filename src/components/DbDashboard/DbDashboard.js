import { useState } from "react"
import Buttons from "../Buttons/Buttons"
import DataTable from "../DataTable/DataTable"
import { DashboardWrapper } from "./styles"

const DbDashboard = ({ usersData, booksData, reviewsData }) => {
  const [searchResults, setSearchResults] = useState(null)
  const [users, setUsers] = useState(usersData)
  const [books, setBooks] = useState(booksData)
  const [reviews, setReviews] = useState(reviewsData)
  const [show, setShow] = useState({
    users: true,
    books: true,
    reviews: true,
    results: false,
  })

  return (
    <DashboardWrapper>
      <Buttons 
        setShow={setShow} 
        searchResults={searchResults} 
        setSearchResults={setSearchResults}
        users={users}
        books={books}
        reviews={reviews}
      />
      {users.length > 0 && show.users && 
        <DataTable 
          data={users} 
          caption="users" 
          setUsers={setUsers} 
          setBooks={setBooks}
          setReviews={setReviews}
        />
      }
      {books.length > 0 && show.books && 
        <DataTable 
          data={books} 
          caption="books"
          setUsers={setUsers} 
          setBooks={setBooks}
          setReviews={setReviews}
        />
      }
      {reviews.length > 0 && show.reviews && 
        <DataTable 
          data={reviews} 
          caption="reviews"
          setUsers={setUsers} 
          setBooks={setBooks}
          setReviews={setReviews}
        />
      }
      {show.results && searchResults.users.length > 0 &&
        <DataTable 
          data={searchResults.users} 
          caption="user search results" 
        />
      }
      {show.results && searchResults.reviews.length > 0 &&
        <DataTable 
          data={searchResults.reviews} 
          caption="review search results" 
        />
      }
      {show.results && searchResults.books.length > 0 &&
        <DataTable 
          data={searchResults.books} 
          caption="book search results" 
        />
      }
    </DashboardWrapper>
  )
}

export default DbDashboard