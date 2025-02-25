const express = require('express');
const app = express();


const users = [
    { id: 1, name: "vk" },
    { id: 2, name: "sk" },
    { id: 3, name: "ak" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
