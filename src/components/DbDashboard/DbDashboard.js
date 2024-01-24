import { useState } from "react"
import Buttons from "../Buttons/Buttons"
import DataTable from "../DataTable/DataTable"
import { DashboardWrapper } from "./styles"
import { DataContext } from "@/context/DataContext"

const DbDashboard = ({ usersData, booksData, reviewsData }) => {
  const [searchResults, setSearchResults] = useState(null)

  const [data, setData] = useState({
    users: usersData,
    books: booksData,
    reviews: reviewsData,
  })

  const [show, setShow] = useState({
    users: true,
    books: true,
    reviews: true,
    results: false,
  })

  return (
    <DataContext.Provider value={{ data, setData, setShow }}>
      <DashboardWrapper>
        <Buttons searchResults={searchResults} setSearchResults={setSearchResults} />
        {data.users.length > 0 && show.users && 
          <DataTable tableData={data.users} caption="users" />
        }
        {data.books.length > 0 && show.books && 
          <DataTable tableData={data.books} caption="books" />
        }
        {data.reviews.length > 0 && show.reviews && 
          <DataTable tableData={data.reviews} caption="reviews" />
        }
        {show.results && searchResults.users.length > 0 &&
          <DataTable tableData={searchResults.users} caption="user search results" />
        }
        {show.results && searchResults.reviews.length > 0 &&
          <DataTable tableData={searchResults.reviews} caption="review search results" />
        }
        {show.results && searchResults.books.length > 0 &&
          <DataTable tableData={searchResults.books} caption="book search results" />
        }
      </DashboardWrapper>
    </DataContext.Provider>
  )
}

export default DbDashboard