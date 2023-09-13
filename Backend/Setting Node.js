
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API endpoint
app.get('/api/data', (req, res) => {
  // Replace this with your API logic
  const data = { message: 'Hello, API!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
In public/index.html, create a simple HTML file for your front-end:
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Express Server</title>
</head>
<body>
    <h1>Hello from the Express Server!</h1>
    <p id="api-response"></p>
    <script src="script.js"></script>
</body>
</html>
In public/script.js, add JavaScript code to make an API request and update the HTML content:
document.addEventListener('DOMContentLoaded', () => {
  const apiResponseElement = document.getElementById('api-response');

  // Fetch data from the API endpoint
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => {
      apiResponseElement.textContent = data.message;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
