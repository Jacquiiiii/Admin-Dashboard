export const fetchData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    // Loop through data and check if each object has a key of 'review_date' and update it's format if so
    const updatedData = data.map(item => {
      if (item.review_date) {
        return {
          ...item,
          review_date: item.review_date?.split('T')[0] || null,
        }
      } else {
        return item
      }
    })

    return updatedData
  } catch (error) {
    console.error('Error in fetchData:', error)
    throw error
  }
}