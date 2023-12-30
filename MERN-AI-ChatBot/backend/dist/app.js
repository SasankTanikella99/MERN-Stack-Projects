import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
// 1 - routing with express
const App = express();
//22 - bypassing the security policy of browsers
App.use(cors({ origin: "http://localhost:5173", credentials: true }));
//4- This middleware tells the application that we are using json to handle the requests
App.use(express.json());
//18- For sending cookies
App.use(cookieParser(process.env.COOKIE_SECRET));
//5- once application is made, we have to remove it in the production, this is only for the dev env
App.use(morgan('dev'));
//6- api/v1 is the request and it is handled by the appRouter.
App.use("/api/v1", appRouter);
export default App;
//# sourceMappingURL=app.js.map