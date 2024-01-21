DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  book_title VARCHAR(255),
  book_author VARCHAR(255),
  book_price DECIMAL(10, 2),
  book_img VARCHAR(255),
  inventory_status VARCHAR(255)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INTEGER,
  email VARCHAR(255),
  address VARCHAR(255)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  book_id INTEGER REFERENCES books(id),
  review_text TEXT,
  review_date DATE
);