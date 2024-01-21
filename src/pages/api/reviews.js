import { handleDeleteReview, handleAddReview, handleGetEnhancedReviews, handleGetReviews } from "@/apis/reviews/reviewsController"

const reviewsHandler = (req, res) => {
  if (req.method === 'GET') {
    if (req.query && req.query.type === 'enhanced') {
      handleGetEnhancedReviews(req, res)
    } else {
      handleGetReviews(req, res)
    }
  } else if (req.method === 'DELETE') {
    handleDeleteReview(req, res)
  } else if (req.method === 'POST') {
    handleAddReview(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default reviewsHandler