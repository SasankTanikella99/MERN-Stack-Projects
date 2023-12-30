import { Router } from "express";
import { deleteChats, generateChatCompletion, sendChatsToUser } from "../controllers/chat-controller.js";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompleteValidator, validate } from "../utils/validator.js";

//24- Protected API
const chatRoutes = Router();
chatRoutes.post("/new",validate(chatCompleteValidator), verifyToken, generateChatCompletion)
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser)
chatRoutes.delete("/delete", verifyToken, deleteChats)

export default chatRoutes;