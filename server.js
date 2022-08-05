const express = require('express');
const nunjucks = require('nunjucks')

const server = express();

// Trazendo CSS
server.use(express.static("public"))

// Trazendo HTML
server.set("view engine", "html")

nunjucks.configure("views",{
    express:server
})

server.get("/", function(req, res){
    return res.render("index")
})

server.get("/projects", function(req, res){
    return res.render("projects")
})


server.listen(5000, function(){
    console.log("server is running")
})