import App from "./app.js";
import { connectToDatabse } from "./db/connection.js";

// 3 - http method
//  sending the id in the url is the dynamic routing. instead of body we send params. /:id is a variable
/*
{App.delete("/user/:id", (req,res,next) => {
  console.log(req.params.id);
  return res.send("Hello");
})
} */


//2- listens to the port and callback function that logs a message everytime the server is running
//connections and listeners
const PORT = process.env.PORT || 3000; //process.env gets the environment variables or if it doesn't
connectToDatabse().
  then(() => {
    App.listen(PORT, () => console.log("Server is up and running. Connected to the  Database"));
  })
  .catch((err) => console.log(err));
