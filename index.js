import express from "express";  // const express =require ("express")
const app = express ()// creating server and it will do all the thing


app.get("/", (req, res) => { 
    //req (request) from user side 
    //res (respond) giving resopnt to client from server
    res.send("bye!"); 
});

// basics routed 
app.get("/about",(raq,res) =>{
    res.send("good bye")
})


//HTTPS Method 

app.listen (3500,()=> {console.log("hi ")})