import {Router} from "express"
import userController from "../controller/userController.js"

const route = Router()

// route.get("/user", (req,res) => {
//     res.send ("User")
// })
route.get("/", (req,res) => {
    res.send ("index")
})

route.get("/user", userController.GetUsers)
route.get("/user/:id", userController.DetailUser)
route.post("/user", userController.CreateUser)
route.delete("/user/:id", userController.DeleteUser)
route.patch("/user/:id", userController.UpdateUser)

export default route