import { removeDataFromDb } from "../../../db/utils/dbDelete"
import { getDataFromDb } from "../../../db/utils/dbGet"
import { addDataToDb } from "../../../db/utils/dbPost"

// Retrieves all reviews data from the database
export const getReviews = async () => getDataFromDb('reviews')

// Deletes a review from the database
export const deleteReview = async (params) => removeDataFromDb('reviews', params)

// Adds a review to the database
export const addReview = async (params) => addDataToDb('reviews', params)

// Retrieves all reviews from the database joined with their associated reviewer and book data
export const getEnhancedReviews = async () => {
  const params = { 
    columns: 'reviews.id, reviews.book_id, books.book_title, reviews.review_text, reviews.review_date, reviews.user_id, users.name',
    joinConditions: [
      { 
        joinTable: 'users', 
        condition: 'reviews.user_id = users.id' 
      },
      { 
        joinTable: 'books', 
        condition: 'reviews.book_id = books.id' 
      }
    ]
  }

  return getDataFromDb('reviews', params)
}