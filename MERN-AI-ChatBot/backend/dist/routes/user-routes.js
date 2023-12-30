import { Router } from "express";
import { getAllUsers, userLogin, userLogout, userSignup, verifyUser } from "../controllers/user-controller.js";
import { verifyToken } from "../utils/token-manager.js";
import { LoginValidator, signUpValidator, validate } from "../utils/validator.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
// 13- add more routes here if needed, e.g., to handle POST requests or other HTTP methods
userRoutes.post("/signup", validate(signUpValidator), userSignup);
userRoutes.post("/login", validate(LoginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/auth-logout", verifyToken, userLogout);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map