const express = require('express');
const scrapData = require('./Scrapper');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let articles = []; // to store articles

app.get("/", (req, res) => {
  res.status(200).json({
    Message: "Web Scrapper Api",
    PostEndpoint: "url/scrape",
    getEndpoint: "url/articles"
  });
});

app.post('/scrape', async (req, res) => {
  const { value } = req.body;
  if (!value) {
    return res.status(400).json({ error: 'Input is required' });
  }

  console.log('Received value for scraping:', value); 

  try {
    articles = await scrapData(value);
    console.log('Scraped articles:', articles); 
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error while scraping articles:', error.message); 
    res.status(500).json({ error: 'Error while getting articles' });
  }
});

app.get("/articles", (req, res) => {
  console.log('Returning articles:', articles); 
  res.status(200).json(articles);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
