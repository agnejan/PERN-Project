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

ALTER TABLE quotes ADD FOREIGN KEY (user_id) REFERENCES users(id);