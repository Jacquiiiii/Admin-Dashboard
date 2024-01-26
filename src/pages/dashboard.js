import { getBooks } from '@/apis/books/booksService'
import { getEnhancedReviews } from '@/apis/reviews/reviewsService'
import { getUsers } from '@/apis/users/usersService'
import Dashboard from '@/components/Dashboard/Dashboard'
import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'

const DashboardPage = ({ usersData, booksData, reviewsData }) => {
  return (
    <>
      <Nav />
      <Dashboard 
        usersData={usersData}
        booksData={booksData}
        reviewsData={reviewsData}
      />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  // Call db functions directly since it's server code and calling the api route would be redundant
  const usersData = await getUsers()
  const booksData = await getBooks()
  const rawReviewsData = await getEnhancedReviews()

  // Fixes serialization issue for date and updates to understandable format
  const reviewsData = rawReviewsData.map(review => ({
    ...review,
    review_date: review.review_date?.toISOString().split('T')[0] || null,
  }))

  return {
    props: {
      usersData,
      booksData,
      reviewsData,
    },
  }
}

export default DashboardPage