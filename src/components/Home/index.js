import DbDashboard from '../DbDashboard/DbDashboard'

const Home = ({ usersData, usersWithReviewsData, booksData, reviewsData }) => {
  return (
    <DbDashboard 
      usersData={usersData}
      usersWithReviewsData={usersWithReviewsData}
      booksData={booksData} 
      reviewsData={reviewsData}
    />
  )
}

export default Home
