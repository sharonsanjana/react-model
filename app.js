const express = require('express')
const app = express()
const PORT = 1500
const books = require('./routes/site1Routes.js')

app.get('/',(req,res)=>{
    res.send("bookshop")
})
app.use('./books', books)
app.listen(PORT, console.log('server running on http:localhost:${PORT}'))