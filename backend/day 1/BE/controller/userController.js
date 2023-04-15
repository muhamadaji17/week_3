import bcrypt from "bcrypt"
import models from "../models/init-models.js"

const CreateUser = async(req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(req.body.password, salt)

        const data = await models.users.create({
            username: req.body.username,
            password: passHash
        })
        res.json({
            message: "INSERT USERS Success",
            status: 202,
            data
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

const GetUsers = async(req,res) => {
    try {
        const data = await models.users.findAll()

        res.json({
            message: "GET all Users Success",
            status: 201,
            data
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

const UpdateUser = async(req,res) => {
    try {
        const data = await models.users.update({
                username: req.body.username,
                password: req.body.password
        },{
            where: {
                id: req.params.id
            }
        })
        res.json({
            message: "UPDATE Success",
            data
        })
    } catch (error) {
        
    }
}

const DeleteUser = async(req,res) => {
    try {
        const data = await models.users.destroy({
            where :{
                id: req.params.id
            }
        })
        res.json({
            message: "DELETE Success",
            status: 204,
            data
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

const DetailUser = async(req, res) => {
    try {
        const data = await models.users.findOne({
            where:{
                id: req.params.id
            }
        })
        res.json({
            message: " User Not Found ",
            status: 404,
            data
        })
        
    } catch (error) {
        
        res.status(404).send(error)
    }
}

export default {CreateUser, GetUsers, DeleteUser, UpdateUser, DetailUser}