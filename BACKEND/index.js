import express, { request, response } from "express";
import {PORT, mongodbURL} from "./config.js";
import cors from "cors"; // Import the cors module
import mongoose from "mongoose";
import { Book } from './models/bookmodels.js';
import Routes from './routes/Routes.js';


const app = express();
// adding a middleware for parsing out request body
app.use(express.json());

// Middleware for handling CORS policy
// Option- 1: Allow all Origins with Default of cors(*)
app.use(cors()); //this allows everything

// Option-2: Allow Custom Origins
// app.use(
//     cors({
//         origin: "http://localhost:7777",
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ["Content-Type"],
//     })
// );

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send("Welcome to the Store!!");
});

app.use('/books', Routes);

// connect -to connect to database
// then catch- to handle errors
mongoose 
    .connect(mongodbURL)
    .then(()=>{
        console.log('Connected to MongoDB')
        // I want express to run only if the database connection is successful
        app.listen(PORT, () => {
            console.log(`App is running on the port: ${PORT}`);
        });        
    })
    .catch((error)=>{
        console.log('Error connecting to MongoDB', error)
        // Add more detailed logging if needed
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error name:', error.name);
        }
    });
    

export default app;