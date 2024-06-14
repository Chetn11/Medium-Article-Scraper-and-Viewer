const express = require('express');
const{scrapeMedium}=require("./Scrapper")

const app = express();
app.use(express.json());

app.get("/articles", async (req, res) => {
  try {
    const data = await scrapeMedium();
    return res.status(200).json({
      result: data,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
