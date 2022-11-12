CREATE DATABASE quoteapp;

CREATE TABLE quotes(
    quote_id SERIAL PRIMARY KEY,
    quote VARCHAR(255),
    picture VARCHAR(255),
    author VARCHAR(255),
    publication VARCHAR(255),
    genre VARCHAR(255)
);