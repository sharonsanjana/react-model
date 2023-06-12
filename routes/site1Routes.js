const express = require('express')
const router = express.Router()

let books = [
    {
        "id": 1,
        "BookName" : "nancy drew",
        "price" : "2000" 
    },
    {
        "id": 2,
        "BookName" : "it ends with us",
        "price" : "1500" 
    },
    {
        "id": 3,
        "BookName" : "divergent",
        "price" : "500" 
    },
    {
        "id": 4,
        "BookName" : "The Vampire Diaries:Volume 1",
        "price" : "3500" 
    },
]

router.get(('/'), (request, response)=>{
    response.send(`Fiction Books`)
})

router.get(('/:id'), (request, response)=>{
    response.send(`BOOK NAME : ${request.books.BookName} PRICE: ${request.books.price}`)
})


router.param("id", (request, response, next, id)=> {
    request.books = books[id]
    console.log(`Book name : ${request.books.BookName}`);
    console.log(`price : ${request.books.price}`)
    next()
})


module.exports= router