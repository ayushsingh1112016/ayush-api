const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

const url = 'https://raw.githubusercontent.com/zerotrac/leetcode_problem_rating/main/data.json';

app.get('/api/first-20', async (req, res) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    const first20Objects = data.slice(0, 20); // Get the first 20 objects
    res.json(first20Objects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = app;
