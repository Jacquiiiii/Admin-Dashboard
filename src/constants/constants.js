export const columnMap = {
  users: ['user_name', 'age', 'email', 'address', 'user_role'],
  books: ['book_title', 'book_author', 'book_price', 'book_img', 'inventory_status'],
  reviews: ['user_id', 'book_id', 'review_text', 'review_date']
}

export const inventoryStatuses = ['available', 'out of stock', 'discontinued']

export const userRoles = ['user', 'admin']