const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const users = [
    { id: 1, name: "vk" },
    { id: 2, name: "sk" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
