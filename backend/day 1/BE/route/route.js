import multer from "multer"
import { Router } from "express"
import userController from "../controller/userController.js"
import productController from "../controller/productController.js"

const route = Router()

// route.get("/user", (req,res) => {
//     res.send ("User")
// })
route.get("/", (req, res) => {
    res.send("index")
})


// route.post("/product", productController.createProduct)


route.get("/user", userController.GetUsers)
route.get("/user/:id", userController.DetailUser)
route.post("/user", userController.CreateUser)
route.delete("/user/:id", userController.DeleteUser)
route.patch("/user/:id", userController.UpdateUser)

route.post("/member", userController.CreateUserandCust)

// route.get("/product", productController.findProduct)
route.post("/coba", productController.createProduct)

// route.get("/productCategory", productController.findProductCategory)
// route.post("/productCategory", productController.createProductCategory)


export default route