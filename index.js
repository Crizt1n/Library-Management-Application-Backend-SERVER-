//import json library in index.js file
const jsonServer= require('json-server')

//create json server
const bookListServer = jsonServer.create()

//create path to json file
const router = jsonServer.router('db.json')

//middleware to convert json to js
const middleware = jsonServer.defaults()

//use middleware and router in server
bookListServer.use(middleware)
bookListServer.use(router)

//setup port for running server
const port = 5000 || process.env.PORT

//to listen server for resolving request from client
bookListServer.listen(port,()=>{
    console.log(`booklistserver started at ${port} and waiting for the request`);
})