CREATE TABLE users(
    id INTEGER PRIMARY KEY ASC, 
    username TEXT, 
    password TEXT, 
    firstName TEXT, 
    lastName TEXT, 
    email TEXT, 
    role TEXT
);

CREATE TABLE locations(
    id INTEGER PRIMARY KEY ASC,
    address TEXT,
    zipcode TEXT,
    deliveryRange NUMERIC
);

CREATE TABLE employees(
    user INTEGER REFERENCES users(id),
    location INTEGER REFERENCES locations(id)
);

CREATE TABLE products(
    sku INTEGER PRIMARY KEY ASC,
    name TEXT,
    image BLOB,
    category TEXT,
    price NUMERIC,
    pricePoints INTEGER,
    calories NUMERIC,
    sugar NUMERIC,
    sodium NUMERIC
);

CREATE TABLE locationProducts(
    location INTEGER REFERENCES locations(id),
    sku INTEGER REFERENCES products(sku),
    qty INTEGER
);

CREATE TABLE transactions(
    id INTEGER PRIMARY KEY ASC,
    user INTEGER REFERENCES users(id),
    location INTEGER REFERENCES locations(id),
    timestamp INTEGER,
    fulfillmentMethod TEXT,
    deliveryAddress TEXT
);

CREATE TABLE transactionItems(
    tx INTEGER REFERENCES transactions(id),
    sku INTEGER REFERENCES products(sku),
    qty INTEGER
);

CREATE TABLE rewards(
    user INTEGER REFERENCES users(id),
    points INTEGER
);

CREATE TABLE reviews(
    user INTEGER REFERENCES users(id),
    location INTEGER REFERENCES location(id),
    stars INTEGER,
    review TEXT
);