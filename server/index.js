/* not so good code */
/* sorry........... */

const express = require('express');
const session = require('express-session');
const sqlite3 = require('sqlite3')
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(session({
    secret: 'tech yeah',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

const db = new sqlite3.Database('breakfast.db');

app.post('/login', (req, res) => {
    db.get('SELECT id, username, password, role FROM users WHERE username = ?', [req.body.username], (err, row) => {
        if(err) throw(err);
        if(!row || !bcrypt.compareSync(req.body.password, row.password)) {
            res.send({status: 403, message: 'Incorrect username or password'});
        } else {
            req.session.uid = row.id;
            req.session.role = row.role;
            res.send({status: 200, message: 'Logged in successfully'});
        }
    });
});

app.post('/register', (req, res) => {
    db.run('INSERT INTO users (username, password, firstName, lastName, email, role) VALUES (?, ?, ?, ?, ?, "customer")', [
        req.body.username,
        bcrypt.hashSync(req.body.password, 3),
        req.body.firstName,
        req.body.lastName,
        req.body.email
    ], 
    (err) => {
        if(err) throw(err);
        res.send({status: 200, message: `Successfully registered ${req.body.firstName} ${req.body.lastName}`});
    });
});

app.get('/users/:user/orders', (req, res) => {

    const addItems = (items, item) => {
        const id = item.id;
        delete item.id;
        delete item.location;
        delete item.timestamp;
        delete item.fulfillmentMethod;
        delete item.deliveryAddress;
        items.push(item);
    }

    if(req.session.uid != req.params.user && req.session.role == 'customer') res.send({status: 403, message: 'Unauthorized'});
    db.all('SELECT transactions.id, transactions.location, transactions.timestamp, transactions.fulfillmentMethod, transactions.deliveryAddress, transactionItems.qty, products.name, products.price FROM transactions JOIN transactionItems ON transactions.id = transactionItems.tx JOIN products ON transactionItems.sku = products.sku WHERE transactions.user = ?',
    [req.params.user],
    (err, rows) => {
        if(err) throw(err);
        ret = {};
        rows.forEach(row => {
            if(ret[row.id]) {
                addItems(ret[row.id].items, row);
            } else {
                ret[row.id] = {
                    id: row.id, 
                    location: row.location,
                    timestamp: row.timestamp,
                    fulfillmentMethod: row.fulfillmentMethod,
                    deliveryAddress: row.deliveryAddress, 
                    items: []
                };
                addItems(ret[row.id].items, row);
            }
        });
        res.send({status: 200, message: Object.values(ret)})
    })
});

app.get('/locations/:location/products', (req, res) => {
    db.all('SELECT * FROM products JOIN locationProducts ON products.sku = locationProducts.sku WHERE locationProducts.location = ? AND locationProducts.qty > 0', [req.params.location], (err, rows) => {
        if(err) throw(err);
        res.send({status: 200, message: rows});
    });
});


// why 
app.post('/locations/:location/order', (req, res) => {
    // not durable, pretend it is
    req.session.uid = 1;

    db.run('INSERT INTO transactions (user, location, timestamp, fulfillmentMethod, deliveryAddress) VALUES (?, ?, ?, ?, ?)',
    [
        req.session.uid,
        req.params.location,
        Math.floor(new Date() / 1000),
        req.body.fulfillmentMethod,
        req.body.deliveryAddress
    ],
    (err) => {
        if(err) throw(err);
        tx = this.lastID;
        params = []
        req.body.cart.forEach(item => {
            params.push(tx, item.sku, item.qty)
        });
        console.log(`INSERT INTO transactionItems (tx, sku, qty) VALUES ${Array(req.body.cart.length).fill('(?, ?, ?)').join(', ')}`);
        db.run(`INSERT INTO transactionItems (tx, sku, qty) VALUES ${Array(req.body.cart.length).fill('(?, ?, ?)').join(', ')}`, 
        params,
        (err) => {
                if(err) throw err;
                db.run('UPDATE rewards SET points = points + ? WHERE user = ?', [Math.floor(req.body.subtotal), req.session.uid],
                (err) => {
                    if(err) throw err;
                    res.send({status: 200, message: 'Order successfully placed'});
            });
        });
    });
});

app.post('/locations/:location/reviews', (req, res) => {
    db.run('INSERT INTO reviews (user, location, stars, review) VALUES (?, ?, ?, ?)', [
        req.session.uid,
        req.params.location,
        req.body.stars,
        req.body.review,
    ], (err, row) => {
        if(err) throw(err);
        res.send({status: 200, message: `Review successfully posted`});
    });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});