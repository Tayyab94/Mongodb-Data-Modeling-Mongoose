import express from "express";
import dotenv from "dotenv"

dotenv.config();
const app = express();
const port = process.env.NODE_PORT || 3001;

app.get("/user", (req, res) => {
    res.status(200);
    res.send("Welcome to the server")
})

app.get("/user/:userid", (req, res) => {
    console.log(req.params)
    res.send(`Welcome To user Id ${req.params}`)
})


app.get("/user/:userid/username/:username", (req, res) => {

    const { username } = req.params;
    // console.log(req.params.username)

    res.send(`Welcome ${username} to our website`)
})



app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, nd App is listening on port " + port)
    else
        console.log("Error occurred, server can't start", error);

});