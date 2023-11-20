// Importing the express library
const express = require('express')

//Intializing an express app
const app = express()

const port  = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.status(200).json('Hello world from Travis')
})

// Exporting the home route so it can be tested
module.exports = app.listen(port, () => console.log(`Your application is running on ${port}`))