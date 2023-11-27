const express = require("express");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/userRoute");
const cors = require('cors')

const app = express();
app.use(cors())

// Middleware for parsing JSON data
app.use(express.json())


// Define your routes
app.use("/user", userRoute);

app.get("/", async (req, res) => {
    try {
        res.send("Welcome to /");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8080, async () => {
    try {
        await connection;
        console.log("Express connected at port 8080");
    } catch (error) {
        console.error(error.message);
    }
});
