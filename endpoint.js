const express = require('express')
const app = express()
 
app.get('/:index', (req, res) => {
  res.send("Hello "+req.params.index)
})

console.log("Listening on port 8080")

app.listen(8080)
