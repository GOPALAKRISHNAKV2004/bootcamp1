const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

const schema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().min(3).required(),
});

let submissions = []; // Temporary storage for submitted data

// 📌 POST: Submit data
app.post("/submit", (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  submissions.push(req.body); // Store data in memory

  res
    .status(201)
    .json({ message: "Data successfully submitted", data: req.body });
});

// 📌 GET: Retrieve all submissions
app.get("/submissions", (req, res) => {
  res.json({ message: "All submitted data", data: submissions });
});

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);