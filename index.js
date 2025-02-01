const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  const response = {
    email: "emminexy@yahoo.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/cod-emminex/hng12-backend-task",
  };
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
