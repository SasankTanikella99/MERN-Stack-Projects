import { Router } from "express";
import chatRoutes from "./chat-routes.js";
import userRoutes from "./user-routes.js";

const appRouter = Router();

//7- if the request is for the user, then this handles that
appRouter.use("/user", userRoutes);  //domain/api/v1/user

//8- if the request is for the user, then this handles that
appRouter.use("/chat", chatRoutes);    //domain/api/v1/chats

export default appRouter; 