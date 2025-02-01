const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  const response = {
    email: "your-email@example.com", // Replace with your email
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/yourusername/your-repo", // Replace with your GitHub repo URL
  };
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
