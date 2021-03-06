const express = require("express");

const PORT = process.env.PORT || 3001
const app = express()
const path = require('path')

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Server responds Hello" })
})

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', index.html))
})

app.listen(PORT, () => {
  console.log(`Server live, listening on port ${PORT}`)
})

