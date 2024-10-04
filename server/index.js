const mysql = require('mysql2/promise');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const port = 8001;
const secretKey = 'secret';

let conn = null;

const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'driving-through',
        port: 3306
    });
};

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const [result] = await conn.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, hashedPassword]);
        res.status(201).json({ id: result.insertId, username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const [users] = await conn.query('SELECT * FROM user WHERE username = ?', [username]);
        const user = users[0];

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    console.log('Token:', token);

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.error('JWT Verification Error:', err);
            return res.status(403).json({ message: 'Invalid token' });
        }
        console.log('User from token:', user);
        req.user = user;
        next();
    });
};

app.get('/profile', authenticateJWT, async (req, res) => {
    try {
        const [result] = await conn.query('SELECT * FROM user WHERE id = ?', [req.user.id]);
        res.json(result[0]);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on port ${port}`);
});
