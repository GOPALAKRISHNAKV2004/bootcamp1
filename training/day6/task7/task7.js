const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 6000; // Using port 5000

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for frontend integration

// Hardcoded users array
const users = [
  { id: 1, name: "sai" },
  { id: 2, name: "krishna" },
  { id: 3, name: "sam" },
];

// GET /users - Fetch all users
app.get("/users", (req, res, next) => {
  try {
    res.json(users);
  } catch (err) {
    next(err); // Pass error to global error handler
  }
});

// GET /users/:id - Fetch user by ID
app.get("/users/:id", (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const user = users.find((u) => u.id === userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
});

// POST /users - Add a new user
app.post("/users", (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    // Generate a new unique ID
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = { id: newId, name };

    users.push(newUser);

    res.status(201).json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (err) {
    next(err);
  }
});

// 🔥 Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message); // Log error for debugging

  res.status(500).json({
    error: "Internal Server Error",
    details: err.message, // Be mindful of exposing sensitive details in production
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
