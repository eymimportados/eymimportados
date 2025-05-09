CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(400) NOT NULL,
    description TEXT,
    image VARCHAR(500),
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE fragrance_notes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE  
);

CREATE TABLE product_fragrance_notes (
    product_id INT REFERENCES products(id),
    note_id INT REFERENCES fragrance_notes(id),
    position INT NOT NULL CHECK (position BETWEEN 1 AND 8), 
    PRIMARY KEY (product_id, position)  
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(id), 
    product_id INTEGER REFERENCES products(id), 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


