const express = require("express")
const cors = require("cors")
require("dotenv").config()

const testRoutes = require("./routes/test.route.js")

const app = express()

app.use(cors({ origin: ["http://localhost:3000"] }))

app.use("/test", testRoutes)

app.get("/", (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Hello World!" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})