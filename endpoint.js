const express = require('express')
const app = express()
const products =["Laptop","LCD","Mobile"]
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/:index",(req,res)=>{
    res.send("Hello " + req.params.index)
})
app.listen(3000)