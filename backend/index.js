const express = require('express');
const scrapData = require('./Scrapper');


const app = express();
app.use(express.json());


let articles=[]; // to store articles
app.post('/scrape', async (req, res) => {
  const { value } = req.body;
  if (!value) {
      return res.status(400).json({ error: 'Input is required' });
  }

  try {
      articles = await scrapData(value);
      res.status(200).json(articles);
  } catch (error) {
      res.status(500).json({ error: 'Error while getting articles' });
  }
});

app.get("/articles", async (req, res) => {
  res.status(200).json(articles);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
