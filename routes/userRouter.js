import express from 'express';
import { usersGet, usersPost, usersPut, usersDelete } from '../controllers/usersController.js';

const userRouter = express.Router();

// Add custom middleware JUST for the user routes
userRouter.use((req,res,next) => {
    console.log(" [UserRoute] " + req.method + " " + req.url);
    next();
});

userRouter.get("/", usersGet);
userRouter.post("/", usersPost);
userRouter.put("/:id", usersPut);
userRouter.delete("/:id", usersDelete);

userRouter.get("/about", (req, res) => { res.send("Users About path") });
userRouter.get("/details", (req, res, next) => {
    // Local error handler
    try {
        res.send(details);
    } catch (err) {
        console.log("Whoops!!!!!!!!!!!!!!!!!!");
        console.log("Attempted to print details, this sometimes fails!!!!");

        err.message = "Getting details failed, this just fails sometimes, sowwy";
        next(err);
    }
});

export default userRouter;