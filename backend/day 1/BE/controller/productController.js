import multer from "multer";
import models from "../models/init-models.js";

const createProductCategory = async (req, res) => {
    try {
        const data = await models.product_category.create({
            name: req.body.name,
            description: req.body.description
        })
        res.json({
            message: "INSERT Product Category Success",
            status: 202,
            data
        })
        res.json({
            message: "INSERT Product Category Success",
            status: 202,
            data
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

const findProductCategory = async (req, res) => {
    try {
        const data = await models.product_category.findAll()
        res.json({
            message: "FIND ALL Product Category Success",
            status: 202,
            data
        })
    } catch (error) {

    }
}

const findProduct = async (req, res) => {
    try {
        const data = await models.product.findAll()

        res.json({
            message: "GET all Users Success",
            status: 201,
            data
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

const createProduct = async (req, res) => {
    try {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'public/image')
            },
            filename: (req, file, cb) => {
                const timestamp = new Date().getTime()
                const originalname = file.originalname
                cb(null, `${timestamp}-${originalname}`)
            }
        })

        const upload = multer({
            storage: storage,
            fileFilter: function (req, file, cb) {
                if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
                    cb(null, true)
                } else {
                    cb(null, "false")
                }
            },
        }).single("image");
        upload(req, res, async function (error) {
            if (error instanceof multer.MulterError) {
                return res.status(500).json({ message: "Error upload gambar" });
            }
            const data = models.product.create({
                name: req.body.name,
                description: req.body.description,
                product_category_id: req.body.product_category_id,
                price: req.body.price,
                image: req.file.filename
            })
            // console.log(req.file)
            res.status(202).json({
                message: "success",
                data
            });
        });
    } catch (error) {
        res.send(error.message);
    }
}

export default { createProductCategory, createProduct, findProductCategory, findProduct, createProduct }