export const fetchData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    return data
  } catch (error) {
    console.error('Error in fetchData:', error)
  }
}