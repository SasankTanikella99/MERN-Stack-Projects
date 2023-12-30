import axios from "axios"

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("/user/login", {email, password});
    if(res.status !== 200){
        throw new Error(" Cannot Login");
    }
    const data = await res.data;
    return data;
}

export const signupUser = async (name: string, email: string, password: string) => {
    const res = await axios.post("/user/signup", {name, email, password});
    if(res.status !== 201){
        throw new Error(" Cannot Signup");
    }
    const data = await res.data;
    return data;
}

export const checkAuthStatus = async () => {
    const res = await axios.get("/user/auth-status");
    if(res.status !== 200){
        throw new Error(" Cannot Authenticate");
    }
    const data = await res.data;
    return data;
}

export const sendChatRequest = async (message:string) => {
    const res = await axios.post("/chat/new", {message});
    if(res.status !== 200){
        throw new Error(" Cannot Authenticate");
    }
    const data = await res.data;
    return data;
}

export const getUserChats = async () => {
    const res = await axios.get("/chat/all-chats");
    if(res.status !== 200){
        throw new Error(" Cannot Authenticate");
    }
    const data = await res.data;
    return data;
}

export const deleteChats = async () => {
    const res = await axios.delete("/chat/delete");
    if(res.status !== 200){
        throw new Error(" Cannot Authenticate");
    }
    const data = await res.data;
    return data;
}

export const userLogout = async () => {
    const res = await axios.delete("/user/logout");
    if(res.status !== 200){
        throw new Error(" Cannot Authenticate");
    }
    const data = await res.data;
    return data;
}