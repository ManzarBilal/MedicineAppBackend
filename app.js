const express=require("express");
const app=express();
require("./src/db/connection");
app.use(express.json());
const user=require("./src/routers/user");

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(user);

const port=5001;
app.listen(port,()=>{
console.log("listening on Port",port);
})