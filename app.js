// create an express app
const express = require("express")
const app = express()
var path = require('path')

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/public'));
})
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));