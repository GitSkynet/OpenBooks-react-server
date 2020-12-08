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

//   router.get("/api/v1/:name?", async (req, res, next) => {
//     try {
//       const page = req.query.page;
//       const name = req.params.name;
//       console.log(page, "<<<<<<<<<<<<<<<<")
//       const perpage = 10;
//       const count = await axios.get(`https://www.etnassoft.com/api/v1/get/?category=${name}&count_items=true`);
//       const items = count.data.num_items;
//       const res = await axios.get(`https://www.etnassoft.com/api/v1/get/?category=${name}` + `?page=${page}`);
//       console.log(res, "<<<<<<<<<<<<<<<<")
//       return res.json(res)
//       .status(200) //  Return status 200, you mean; OK
//     } catch (error) {
//       console.log(error)
//     }     
//   }
// );
  
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

  router.get("/mybooks/upload/:id", async(req, res, next) => {
    try {
      let books = await Book.findById(req.params.id)
        res.status(200).json(books)
      } catch (error) {
        console.log(error)
      }
      });

  router.post("/mybooks/upload/:id", async(req, res, next) => {
    try {
    const { book_title, description, writer, book_year, poster } = req.body.updatedBook;
    const bookId = req.body.updatedBook
    console.log('REQ.PARAMS.ID SERVER', bookId)
    let books= await Book.findByIdAndUpdate(bookId, {book_title, description, writer, book_year, poster }, {new: true})
    console.log(books)
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