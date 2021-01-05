const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Book = require("../models/book")
const axios = require("axios")

//<<<<<<<<<<<<<<<<<<<<<<<-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>

//<<<<<<<<<<<<<<<<<<<<<<<<ROUTES MY DATABASE>>>>>>>>>>>>>>>>>>>>>>>>>>>

//GET books
  router.get("/ourbooks", async (req, res, next) => {
      try {
        let perpage = 10;
        let books = await Book.find().limit(perpage).skip(req.query.page*10)
        return res.json(books)
        .status(200) //  Return status 200, you mean; OK
      } catch (error) {
        console.log(error)
      }
  });
  
  // CREATE book
  router.post("/create", async (req, res, next)=> {
    Book.create(req.body)
    .then( newBook => {
      res.status(200).json(newBook);
    })
    .catch( err => next(err) )
  })

  //DETAILS route
  router.get("/details/:id", async(req, res, next) => {
    try {
      let books = await Book.findById(req.params.id)
      res.status(200).json(books)
      } catch (error) {
      console.log(error)
      }
  });

  //GET UPLOAD route
  router.get("/upload/:id", async(req, res, next) => {
    try {
      let books = await Book.findById(req.params.id)
      res.status(200).json(books)
    } catch (error) {
      console.log(error)
      }
  });

  //POST UPLOAD route
  router.post("/upload/:id", async(req, res, next) => {
    try {
    const { title, description, writer, year, poster } = req.body.updatedBook;
    const bookId = req.params.id;
    console.log(bookId, "books data!!!!")
    let books = await Book.findByIdAndUpdate(bookId, {title, description, writer, year, poster }, {new: true});
    console.log(books, "books UPDATE!!!!")
      res.status(200).json(books)
    } catch (error) {
      console.log(error)
    }
  });

  //DELETE BOOK route
    router.post('/delete/:id', async (req, res, next) =>{
      try {
        let deleteBook = await Book.findByIdAndRemove(req.params.id )
        console.log("Libro eliminado:", deleteBook )
        res.status(200).json("Borrado correctamente")
      } catch (error) {
        console.log('Error eliminando libro:', error);
      }
    });
  //<<<<<<<<<<<<<<<<<<<<<<<<END ROUTES MY DATABASE>>>>>>>>>>>>>>>>>>>>>>>>>

  //<<<<<<<<<<<<<<<<<<<<<<<-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  //<<<<<<<<<<<<<<<<<<<<<<<<ROUTES OPENLIBRA API>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 //Get books OpenLibra
 router.get("/openlibra/:name/:page", async (req, res, next) => {
  const name = req.params.name;
  const page = req.params.page*10;
  const counter = await axios.get("https://www.etnassoft.com/api/v1/get/?category="+ `${name}` + `&count_items=true`);
  const count = counter.data.num_items;
  try {
    const books = await axios.get("https://www.etnassoft.com/api/v1/get/?category="+ `${name}` + `&num_items=${count}` + `&results_range=${page},10`);
    return res.json(books.data)
    .status(200) //  Return status 200, you mean; OK
  } catch (error) {
    console.log(error)
  }     
});

  //Search over OpenLibra API
  router.get("/openlibra/search/:name", async (req, res, next) => {
    const name = req.params.name;
    try {
      const books = await axios.get(`https://www.etnassoft.com/api/v1/get/?keyword=${name}`);
      return res.json(books.data);
    }catch (error) {
      console.log(error);
    };
  });

  //Get Categories from API
  router.get("/openlibra", async (req, res, next)=> {
    try {
      const resp = await axios.get("https://www.etnassoft.com/api/v1/get/?get_categories=all");
      console.log(resp.data,"RES!!!!!!!!!!!!!!!!!")
      return res.json(resp.data);
    } catch (error) {
      console.log(error)
    }
  })

  //<<<<<<<<<<<<<<<<<<<<<<<<END ROUTES OPENLIBRA API>>>>>>>>>>>>>>>>>>>>>>>
  //<<<<<<<<<<<<<<<<<<<<<<<-------------------------->>>>>>>>>>>>>>>>>>>>>>

  
  //<<<<<<<<<<<<<<<<<<<<<<<------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //<<<<<<<<<<<<<<<<<<<<<<<<ROUTES GOOGLE BOOKS API>>>>>>>>>>>>>>>>>>>>>>>>>>>

  //Get Google-Books API {Home}
  router.get("/googlebooks", async (req, res, next) => {
    try {
      const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=novel&subject:novel&filter=free-ebooks&key=AIzaSyBzD61cSMcd6Si4XKfkchWaHRiXrmlFGFU`);
      return res.json(books.data)
      .status(200) //  Return status 200, you mean; OK
    } catch (error) {
      console.log(error)
    }     
  });

  //Search over Google-Books API
  router.get("/googlebooks/search/:query", async (req, res, next) => {
    const query = req.params.query;
    console.log(req, "AQUIIIIII")
    try {
      const books = await axios.get("https://www.googleapis.com/books/v1/volumes?q=" + `${query}` + "&key=AIzaSyBzD61cSMcd6Si4XKfkchWaHRiXrmlFGFU&maxResults=40");
      return res.json(books.data);
    }catch (error) {
      console.log(error);
    }
  })

  //<<<<<<<<<<<<<<<<<<<<<<<<END ROUTES GOOGLE BOOKS API>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
  //<<<<<<<<<<<<<<<<<<<<<<<-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>
module.exports = router;