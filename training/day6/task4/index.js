const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Hardcoded array of users
let users = [
    { id: 1, name: 'sanjay' },
    { id: 2, name: 'vijay' },
    { id: 3, name: 'dhoni' }
];

// GET endpoint to retrieve users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET endpoint to retrieve a user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// POST endpoint to add a new user
app.post('/users', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    // Create a new user object with an auto-incremented ID
    const newUser = {
        id: users.length + 1,
        name: name,
    };
    
    users.push(newUser);
    res.json({ message: "User added", user: newUser });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
