const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

const url = 'https://raw.githubusercontent.com/zerotrac/leetcode_problem_rating/main/data.json';

app.get('/api/first-20', async (req, res) => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    // Sort the data by ID in descending order
    const sortedData = data.sort((a, b) => b.ID - a.ID);

    // Get the top 8 questions with the highest IDs
    const top8Questions = sortedData.slice(0, 8);

    res.json(top8Questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
