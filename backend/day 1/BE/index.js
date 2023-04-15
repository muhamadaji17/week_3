import "dotenv/config"
import express from "express"

import route from "./route/route.js"

const port = process.env.PORT || 3000
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(route)

app.listen(port, () => {
    console.log(`Now We're online on http://localhost:${port}`)
})