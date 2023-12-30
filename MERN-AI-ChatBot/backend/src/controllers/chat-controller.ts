import { NextFunction, Request, Response } from "express";
import { OpenAIApi, ChatCompletionRequestMessage, Configuration } from "openai";
import { configureOpenAi } from "../config/openai-config.js";
import User from "../models/User.js";

export const sendChatsToUser = async (
    req:Request,
    res:Response,
    next: NextFunction
    ) => {

    try {
        const { email, password} = req.body;
        const user = await User.findById(res.locals.jwtData.id)
        if(!user) {
            return res.status(401).send("User not registered or Token Malfunctioned")
        }
        if(user._id.toString() !== res.locals.jwtData.id){
            return res.status(401).send("Permissions did not match")
        }

        
        return res.status(200).json({message: "OK", chats: user.chats });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "error", cause: error.message});
    }
}

export const generateChatCompletion =async (req:Request, res:Response, next: NextFunction) => {
    const {message} = req.body 
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if(!user) return res.status(401).json({message: "User Not Registered or Token Malfunctioned"})
        //25- grab the chats of the user and send all chats with the new chats to openAI Api
        //26-get latest response
        const chats = user.chats.map(({role, content}) => ({ role, content })) as ChatCompletionRequestMessage[];
        chats.push({content: message, role: "user"});
        user.chats.push({content:message, role: "user"})  

        const config = configureOpenAi();
        const openai = new OpenAIApi(config);
        const chatResponse = await openai.createChatCompletion({model: "gpt-3.5-turbo", messages: chats,})
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(200).json({chats: user.chats});
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "Something Went Wrong"})
        
    }
    
}
export const deleteChats = async (
    req:Request,
    res:Response,
    next: NextFunction
    ) => {

    try {
        const { email, password} = req.body;
        const user = await User.findById(res.locals.jwtData.id)
        if(!user) {
            return res.status(401).send("User not registered or Token Malfunctioned")
        }
        if(user._id.toString() !== res.locals.jwtData.id){
            return res.status(401).send("Permissions did not match")
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res.status(200).json({message: "OK" });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "error", cause: error.message});
    }
}
