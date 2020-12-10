const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Book = require("../models/book")
const axios = require("axios")

//GET ALL BOOKS COLLECTION OF DATA BASE
  router.get("/mybooks", async (req, res, next) => {
      try {
        let perpage = 10;
        let books = await Book.find().limit(perpage).skip(req.query.page*10)
        return res.json(books)
        .status(200) //  Return status 200, you mean; OK
      } catch (error) {
        console.log(error)
      }
    }
  );

  router.get("/api/v1/:name/:page", async (req, res, next) => {
    try {
      const name = req.params.name;
      const page = req.params.page*10;
      const books = await axios.get(`https://www.etnassoft.com/api/v1/get/?category=${name}&results_range=${page},10`);
      return res.json(books.data);
    } catch (error) {
      console.log(error)
    }     
  }
);
  
  // CREATE ROUTES
  router.post("/create", async (req, res, next)=> {
    Book.create(req.body)
    .then( newBook => {
      res.status(200).json(newBook);
    })
    .catch( err => next(err) )
  })

  // GET DETAILS ROUTE
  router.get("/details/:id", async(req, res, next) => {
    try {
      let books = await Book.findById(req.params.id)
      res.status(200).json(books)
      } catch (error) {
      console.log(error)
      }
  });

  //UPLOAD ROUTES

  router.get("/upload/:id", async(req, res, next) => {
    try {
      let books = await Book.findById(req.params.id)
        res.status(200).json(books)
      } catch (error) {
        console.log(error)
      }
      });

  router.post("/upload/:id", async(req, res, next) => {
    try {
    const { book_title, description, writer, book_year, poster } = req.body.updatedBook;
    console.log(req.body, "!!!!!!!!!!!!!!!!!!!!!")
    const bookId = req.body.updatedBook;
    console.log(bookId, "books data!!!!")
    let books= await Book.findByIdAndUpdate(bookId, {book_title, description, writer, book_year, poster }, {new: true})
    console.log(books, "books data!!!!")
      res.status(200).json(books)
    } catch (error) {
      console.log(error)
    }
  });

    //DELETE MOVIE

    router.post('/delete/:id', async (req, res, next) =>{
      try {
        let deleteMovie = await Book.findByIdAndRemove(req.params.id )
        res.status(200).json("Borrado correctamente")
      } catch (error) {
        console.log('Error eliminando libro, prueba en unos minutos', error);
      }
    });

module.exports = router;