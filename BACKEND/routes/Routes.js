import express from "express";
import { Book } from "../models/bookmodels.js";

const router = express.Router();

// HTTP route to save a new book - POST
//working with mongoose is a asynchronous function, async keyword for the callback function- req 7 res
router.post('/', async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishedYear
        ) {
          return response.status(400).send({
            message: 'Send all required fields: title, author, publishedYear',
          });  
        }
        const newBook = {
            title : request.body.title,
            author : request.body.author,
            publishedYear : request.body.publishedYear,
        };
        const book = await Book.create(newBook);

        return response.status(201).send(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

// HTTP route to get all books from database -GET
router.get('/', async (request, response) => {
    try{
        const books = await Book.find({});
        // .json(books) gives all the data in array
        // so you can use objects like count and data to generate no. of books and what books present
        return response.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }    
})

// HTTP route to get one book from database by id -GET
//to get id, we tag in id using ':'
router.get('/:id', async (request, response) => {
    try{
        if(
            !request.body.title||
            !request.body.author||
            !request.body.publishedYear
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishedYear',
            });
        }
        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if(!result){
            return response.status(404).json({message: "Book not found"});
        }
        return response.status(200).send({message: "Book updated successfully"});
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }    
})

// HTTP Route to update a Book - PUT
// find the book by id and update it
router.put('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const book = await Book.findByIdAndUpdate(id, request.body, {
            new: true});
            return response.status(200).json({book});
            }
            catch(error){
                console.log(error.message);
                response.status(500).send({message: error.message});
                }
})

// HTTP Route to delete a Book - DELETE
// find the book by id and delete it
router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return response.status(404).json({message: "Book not found"});
            }
            return response.status(200).json({message: "Book deleted successfully"});
            }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

export default router;    