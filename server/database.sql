CREATE DATABASE quoteapp;

CREATE TABLE quotes(
    id SERIAL PRIMARY KEY,
    quote VARCHAR,
    picture VARCHAR(255),
    author VARCHAR(255),
    publication VARCHAR(255),
    genre VARCHAR(255)
); 

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    password varchar(255) NOT NULL
);

ALTER TABLE quotes FOREIGN KEY (user_id) REFERENCES users(id);

SELECT *
FROM quotes
LEFT JOIN users
ON quotes.user_id = users.id

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment text NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT,
    quote_id INT
); 

ALTER TABLE comments ADD FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE comments ADD FOREIGN KEY (quote_id) REFERENCES quotes(id);