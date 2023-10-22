const express = require("express");
const { matchedData, query, validationResult } = require("express-validator");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get(
  "/hello",
  query("person").notEmpty().withMessage("Person ko dc bỏ trống").escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const data = matchedData(req);
      console.log(data);
      res.send(`Hello, ${data.person}!`);
    }
    res.status(400).json({ errors: errors.array() });
  }
);

app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
});
