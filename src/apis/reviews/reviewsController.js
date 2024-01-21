import { deleteReview, getReviews, addReview, getEnhancedReviews } from "./reviewsService"

// Handles HTTP GET request to retrieve reviews data from database
export const handleGetReviews = async (req, res) => {
  try {
    const reviews = await getReviews()

    if (!reviews) {
      return res.status(404).json({ error: 'No reviews found.' })
    }

    console.log(`Successful GET request! There are ${reviews.length} reviews in the database`)
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot GET reviews' })
  }
}

// Handles HTTP DELETE request to delete a review from the database
export const handleDeleteReview = async (req, res) => {
  try {
    const reviews = await deleteReview(req.body.data)

    if (!reviews) {
      return res.status(404).json({ error: 'No review found.' })
    }

    console.log(`Successful DELETE request!`)
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot DELETE review.' })
  }
}

// Handles HTTP POST request to add a review to the database
export const handleAddReview = async (req, res) => {
  try {
    const newReview = await addReview(req.body.data)
    if (!newReview) {
      return res.status(404).json({ error: 'No review found.' })
    }
    console.log('Successful review adding POST request!')
    res.status(200).json(newReview)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot POST review.' })
  }
}

// Handles HTTP GET request to retrieve reviews and their associated reviewer and book data from the database
export const handleGetEnhancedReviews = async (req, res) => {
  try {
    const reviews = await getEnhancedReviews()
    if (!reviews) {
      return res.status(404).json({ error: 'No review found.' })
    }
    console.log('Successful enhanced reviews GET request!')
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error. Cannot GET review.' })
  }
}